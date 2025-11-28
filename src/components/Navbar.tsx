'use client';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

function useScroll(threshold = 0) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(50);
  const location = useLocation();
  const MotionLink = motion(Link);

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
    <motion.nav style={{
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderColor: scrolled ? 'rgba(229, 231, 235, 0.5)' : 'rgba(229, 231, 235, 1)'
    }} transition={{
      duration: 0.3
    }} className='fixed top-0 left-0 right-0 z-50 border-b'>
      <div className="max-w-7xl mx-auto px-6 py-[10px]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <MotionLink to="/" className="flex items-center gap-3 z-50 relative" whileHover={{
              opacity: 0.8
            }}>
              <img src={logo} alt="Erica van Dijk" className="h-12" />
            </MotionLink>

            <div className="hidden md:block mx-8 h-8 w-px bg-gray-300"></div>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map(link => <MotionLink
                key={link.label}
                to={link.href}
                onClick={() => handleScrollLink(link.href)}
                whileHover={{
                  color: '#8E170B',
                  y: -2
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}
                className="text-base font-normal text-gray-700 relative"
              >
                {link.label}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8E170B]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </MotionLink>)}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <MotionLink to="/contact" className="hidden lg:block bg-[#8E170B] text-white px-6 py-2.5 rounded-lg font-medium text-sm" whileHover={{
              backgroundColor: '#701209',
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
              Plan Consult
            </MotionLink>

            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors z-50 relative" aria-label="Toggle menu">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
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
              transition={{ duration: 0.3 }}
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
                damping: 30,
                stiffness: 300
              }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img src={logo} alt="Erica van Dijk" className="h-10" />
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
                        delayChildren: 0.1
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
                    >
                      <MotionLink
                        to={link.href}
                        onClick={() => handleScrollLink(link.href)}
                        whileHover={{ x: 4, color: '#8E170B' }}
                        whileTap={{ scale: 0.98 }}
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
                transition={{ delay: 0.4 }}
                className="p-6 border-t border-gray-100"
              >
                <MotionLink to="/contact" onClick={() => setOpen(false)} className="block">
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: '#701209' }}
                    whileTap={{ scale: 0.98 }}
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