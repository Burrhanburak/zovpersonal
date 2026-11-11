'use client'

import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import PrefetchLink from '@/components/PrefetchLink'
import LocaleSwitcher from './LocaleSwitcher'

type NavRoute = '/' | '/services' | '/about' | '/contact' | '/blog'

const menuItems: { name: string; href: NavRoute }[] = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'services', href: '/services' },
  { name: 'blog', href: '/blog' },
  { name: 'contact', href: '/contact' },
]

export default function Header() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const t = useTranslations('nav')
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav className="fixed top-4 left-5 right-5 md:left-8 md:right-8 z-50">
        <div
          className={cn(
            'mx-auto backdrop-blur-[15px] bg-[rgb(28,39,6)] rounded-[20px] transition-all duration-300',
            isScrolled
              ? 'max-w-[650px] md:max-w-[900px]'
              : 'max-w-[650px] md:max-w-[1140px]',
            menuState
              ? 'flex flex-col gap-5 px-5 py-3 md:px-5 md:py-3'
              : 'flex items-center justify-between px-4 py-2 md:px-4 md:py-3'
          )}
        >
          <div className="flex items-center justify-between w-full">
            <PrefetchLink href="/" aria-label="home" className="flex items-center">
              <Logo className="text-white" />
            </PrefetchLink>

            <div
              className={cn(
                'hidden md:flex items-center transition-all duration-300',
                isScrolled ? 'gap-4' : 'gap-8'
              )}
            >
              {menuItems.map((item, index) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <PrefetchLink
                    key={index}
                    href={item.href}
                    className={cn(
                      'text-white hover:text-white/80 transition-colors duration-150 text-sm font-medium',
                      isActive && 'text-white font-semibold'
                    )}
                  >
                    {t(item.name)}
                  </PrefetchLink>
                )
              })}
            </div>

            <div className="hidden md:flex items-center gap-4 transition-all duration-300">
              <LocaleSwitcher isScrolled={isScrolled} />
              <PrefetchLink
                href="/contact"
                className={cn(
                  'btn-cta btn-cta-light',
                  isScrolled ? 'px-5 py-2.5 text-xs' : 'px-6 py-3 text-sm'
                )}
              >
                {t('consultation')}
              </PrefetchLink>
            </div>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="md:hidden p-2 text-white"
            >
              {menuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {menuState && (
            <div className="md:hidden flex flex-col gap-3">
              {menuItems.map((item, index) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <PrefetchLink
                    key={index}
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className={cn(
                      'text-white hover:text-white/80 transition-colors duration-150 text-base font-medium py-1',
                      isActive && 'text-white font-semibold'
                    )}
                  >
                    {t(item.name)}
                  </PrefetchLink>
                )
              })}

              <div className="flex flex-col gap-3 pt-2 border-t border-white/20">
                <LocaleSwitcher isScrolled={isScrolled} />
                <PrefetchLink
                  href="/contact"
                  onClick={() => setMenuState(false)}
                  className="btn-cta btn-cta-light text-center"
                >
                  {t('consultation')}
                </PrefetchLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
