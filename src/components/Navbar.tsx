'use client';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

function useScroll(threshold = 0) {
  const [scrolled, setScrolled] = React.useState(false);
  const scrollY = useMotionValue(0);

  React.useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollY.set(currentScrollY);
      setScrolled(currentScrollY > threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, scrollY]);

  return { scrolled, scrollY };
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { scrolled, scrollY } = useScroll(50);
  const location = useLocation();
  const MotionLink = motion(Link);

  // Check if we're on homepage
  const isHomepage = location.pathname === '/';

  // Determine if header should be transparent
  const isTransparent = isHomepage && !scrolled;

  // Smooth interpolations for scroll-based animations
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 50], [0, 16]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.5]);

  const links = [{
    label: "Home",
    href: "/"
  }, {
    label: "Over",
    href: "/#about"
  }, {
    label: "Diensten",
    href: "/#services"
  }, {
    label: "Ervaring",
    href: "/experience"
  }, {
    label: "Reviews",
    href: "/#reviews"
  }, {
    label: "FAQ",
    href: "/#faq"
  }, {
    label: "Contact",
    href: "/contact"
  }];

  const handleScrollLink = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return <>
    <motion.nav
      animate={{
        backgroundColor: isTransparent
          ? 'rgba(255, 255, 255, 0)'
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: isTransparent ? 'blur(0px)' : 'blur(16px)',
        borderColor: isTransparent
          ? 'rgba(229, 231, 235, 0)'
          : 'rgba(229, 231, 235, 0.5)'
      }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className='fixed top-0 left-0 right-0 z-50 border-b'
    >
      <div className="max-w-7xl mx-auto px-6 py-1.5">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <MotionLink
              to="/"
              className="flex items-center gap-3 z-50 relative"
              whileHover={{
                opacity: 0.8
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
            >
              <motion.img
                key={isTransparent ? 'white' : 'dark'}
                src={isTransparent ? "/logo-white.png" : "/logo-dark.png"}
                alt="Erica van Dijk"
                className="h-9"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
            </MotionLink>

            <motion.div
              animate={{
                backgroundColor: isTransparent ? 'rgba(255, 255, 255, 0.3)' : 'rgba(209, 213, 219, 1)'
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="hidden md:block mx-6 h-6 w-px"
            />

            <nav className="hidden lg:flex items-center gap-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <MotionLink
                    to={link.href}
                    onClick={() => handleScrollLink(link.href)}
                    animate={{
                      color: isTransparent ? '#ffffff' : '#374151'
                    }}
                    whileHover={{
                      color: '#8E170B',
                      y: -1
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="text-[13px] font-normal relative"
                  >
                    {link.label}
                    <motion.div
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#8E170B]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    />
                  </MotionLink>
                </motion.div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <MotionLink
              to="/contact"
              className="hidden lg:block"
            >
              <motion.div
                animate={{
                  backgroundColor: isTransparent ? 'transparent' : '#8E170B',
                  borderColor: isTransparent ? '#ffffff' : '#8E170B',
                  color: isTransparent ? '#ffffff' : '#ffffff'
                }}
                whileHover={{
                  backgroundColor: isTransparent ? 'rgba(255, 255, 255, 0.1)' : '#701209',
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="px-6 py-2.5 border rounded-[50px] font-medium text-sm"
              >
                Contact
              </motion.div>
            </MotionLink>

            <motion.button
              onClick={() => setOpen(!open)}
              animate={{
                color: isTransparent ? '#ffffff' : '#111827'
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: isTransparent ? 'rgba(255, 255, 255, 0.1)' : 'rgba(243, 244, 246, 1)'
              }}
              whileTap={{
                scale: 0.95
              }}
              transition={{
                duration: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="lg:hidden p-2 rounded-lg z-50 relative"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>

    {typeof document !== 'undefined' && createPortal(
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                mass: 0.8
              }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <motion.img
                  src="/logo-dark.png"
                  alt="Erica van Dijk"
                  className="h-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-gray-900" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.15
                      }
                    }
                  }}
                  className="flex flex-col gap-2"
                >
                  {links.map((link) => (
                    <motion.div
                      key={link.label}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <MotionLink
                        to={link.href}
                        onClick={() => handleScrollLink(link.href)}
                        whileHover={{ x: 4, color: '#8E170B' }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-lg font-normal transition-colors",
                          location.pathname === link.href || (link.href.startsWith('/#') && location.pathname === '/')
                            ? "bg-[#8E170B]/5 text-[#8E170B]"
                            : "text-gray-700 hover:bg-gray-50"
                        )}
                      >
                        {link.label}
                      </MotionLink>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="p-6 border-t border-gray-100"
              >
                <MotionLink to="/contact" onClick={() => setOpen(false)} className="block">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: '#701209',
                      boxShadow: '0 8px 20px rgba(142, 23, 11, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="w-full bg-[#8E170B] text-white font-medium text-lg py-4 rounded-lg shadow-lg"
                  >
                    Plan Consult
                  </motion.button>
                </MotionLink>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      , document.body)}
  </>;
}