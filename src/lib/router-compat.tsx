/**
 * Router-compat shim — bridges react-router-dom v6 call sites to
 * @tanstack/react-router without hand-rewriting every component.
 * This is the same load-bearing pattern used in Klar's dev-copy migration.
 */
import {
  useNavigate as tsNavigate,
  useLocation as tsLocation,
  useParams as tsParams,
  useRouter,
  useRouterState,
  Link as TSLink,
  Navigate as TSNavigate,
  Outlet as TSOutlet,
} from "@tanstack/react-router";
import { useMemo, useCallback, forwardRef, type ComponentProps, type ReactNode } from "react";

// ---------- shared URL parsing ----------

function parseTo(to: string): { pathname: string; search?: Record<string, string>; hash?: string } {
  const hashParts = (to ?? "").split("#");
  const hashStr = hashParts[1];
  const pathParts = (hashParts[0] ?? "").split("?");
  const pathnameRaw = pathParts[0] ?? "";
  const searchStr = pathParts[1];
  const result: { pathname: string; search?: Record<string, string>; hash?: string } = {
    // react-router keeps the current path for search-only ("?a=1") and
    // hash-only ("#section") targets; TanStack's "." means current route.
    pathname: pathnameRaw || ".",
  };
  if (searchStr) {
    result.search = Object.fromEntries(new URLSearchParams(searchStr));
  }
  if (hashStr) {
    result.hash = hashStr;
  }
  return result;
}

// ---------- useNavigate ----------

type NavigateOptions = { replace?: boolean; state?: unknown };

type NavigateFn = {
  (to: string | number, options?: NavigateOptions): void;
  (delta: number): void;
};

export function useNavigate(): NavigateFn {
  const tsNav = tsNavigate();
  const router = useRouter();
  return useCallback((to: string | number, options?: NavigateOptions) => {
    if (typeof to === "number") {
      router.history.go(to);
      return;
    }
    const { pathname, search, hash } = parseTo(to);
    tsNav({
      to: pathname,
      search: search as never,
      hash,
      state: options?.state as never,
      replace: options?.replace,
    } as never);
  }, [tsNav, router]) as NavigateFn;
}

// ---------- useLocation ----------

export function useLocation() {
  const loc = tsLocation();
  return useMemo(
    () => ({
      pathname: loc.pathname,
      search: loc.searchStr ? `?${loc.searchStr}` : "",
      hash: loc.hash ?? "",
      state: (loc.state ?? null) as unknown,
      key: loc.pathname + (loc.searchStr ?? ""),
    }),
    [loc.pathname, loc.searchStr, loc.hash, loc.state],
  );
}

// ---------- useParams ----------

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  return tsParams({ strict: false } as never) as T;
}


// ---------- useSearchParams (react-router-dom compat) ----------

export function useSearchParams(): [URLSearchParams, (init: URLSearchParams | Record<string, string> | ((prev: URLSearchParams) => URLSearchParams), opts?: { replace?: boolean }) => void] {
  const loc = tsLocation();
  const nav = tsNavigate();
  const router = useRouter();
  const params = useMemo(() => new URLSearchParams(loc.searchStr ?? ""), [loc.searchStr]);
  const setParams = useCallback(
    (
      init: URLSearchParams | Record<string, string> | ((prev: URLSearchParams) => URLSearchParams),
      opts?: { replace?: boolean },
    ) => {
      // Functional updaters read the router's live location, not the render
      // snapshot — react-router passes call-time params, and chained updates
      // within one tick must see each other's writes.
      const live = router.state.location;
      const current = new URLSearchParams(live.searchStr ?? "");
      const next =
        typeof init === "function"
          ? init(current)
          : init instanceof URLSearchParams
            ? init
            : new URLSearchParams(init);
      const searchObj: Record<string, string> = {};
      next.forEach((v, k) => { searchObj[k] = v; });
      nav({ to: live.pathname, search: searchObj as never, replace: opts?.replace } as never);
    },
    [nav, router],
  );
  return [params, setParams];
}

// ---------- Link ----------

type LinkProps = Omit<ComponentProps<typeof TSLink>, "to"> & {
  to: string;
  replace?: boolean;
  state?: unknown;
  children?: ReactNode;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, replace, state, children, ...rest },
  ref,
) {
  const { pathname, search, hash } = parseTo(to);
  return (
    <TSLink
      ref={ref as never}
      to={pathname as never}
      {...(search !== undefined ? { search: search as never } : {})}
      {...(hash !== undefined ? { hash } : {})}
      {...(replace !== undefined ? { replace } : {})}
      {...(state !== undefined ? { state: state as never } : {})}
      {...((rest ?? {}) as Record<string, unknown>)}
    >
      {children}
    </TSLink>
  );
});


// ---------- Navigate ----------

export function Navigate({ to, replace, state }: { to: string; replace?: boolean; state?: unknown }) {
  const { pathname, search, hash } = parseTo(to);
  return (
    <TSNavigate
      to={pathname as never}
      {...(search !== undefined ? { search: search as never } : {})}
      {...(hash !== undefined ? { hash } : {})}
      {...(state !== undefined ? { state: state as never } : {})}
      {...(replace !== undefined ? { replace } : {})}
    />
  );
}

// ---------- Outlet ----------

export const Outlet = TSOutlet;

// ---------- NavLink (react-router-dom compat) ----------

export type NavLinkProps = Omit<LinkProps, "className"> & {
  className?: string | ((opts: { isActive: boolean; isPending: boolean }) => string);
};

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { className, to, children, ...rest },
  ref,
) {
  const { pathname, search, hash } = parseTo(to);
  const isActive = useRouterState({
    select: (s) => s.location.pathname === (pathname === "." ? s.location.pathname : pathname),
  });
  const resolvedClassName =
    typeof className === "function" ? className({ isActive, isPending: false }) : className;
  return (
    <TSLink
      ref={ref as never}
      to={pathname as never}
      className={resolvedClassName}
      {...(search !== undefined ? { search: search as never } : {})}
      {...(hash !== undefined ? { hash } : {})}
      {...((rest ?? {}) as Record<string, unknown>)}
    >
      {children}
    </TSLink>
  );
});
