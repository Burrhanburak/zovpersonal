'use client'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { usePathname, Link } from '../navigation'
import LocaleSwitcher from './LocaleSwitcher'

type NavRoute = '/' | '/services' | '/about' | '/contact';

const menuItems: { name: string; href: NavRoute }[] = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'services', href: '/services' },
    { name: 'contact', href: '/contact' },
]

export default function Header() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const t = useTranslations('nav')
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav className="fixed top-4 left-8 right-8 z-10">
                <div 
                    className={cn(
                        "mx-auto backdrop-blur-[15px] bg-[rgb(28,39,6)] rounded-[20px] transition-all duration-300",
                        isScrolled 
                            ? "max-w-[650px] md:max-w-[800px]" 
                            : "max-w-[650px] md:max-w-[1140px]",
                        menuState ? "px-4 py-4" : "px-4 py-3"
                    )}
                >
                    {/* Top Row - Logo and Menu Button */}
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center">
                            <Logo />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className={cn(
                            "hidden md:flex items-center transition-all duration-300",
                            menuState && "md:hidden",
                            isScrolled ? "gap-4" : "gap-8"
                        )}>
                            {menuItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={cn(
                                            "text-white hover:text-white/80 transition-colors duration-150 text-sm font-medium",
                                            isActive && "text-white font-semibold"
                                        )}
                                    >
                                        {t(item.name)}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Desktop Right Side */}
                        <div className={cn(
                            "hidden md:flex items-center gap-4 transition-all duration-300",
                            menuState && "md:hidden"
                        )}>
                            <LocaleSwitcher />
                            <Link
                                href="/contact"
                                className={cn(
                                    "bg-white text-[rgb(28,39,6)] rounded-[20px] font-medium hover:bg-white/90 transition-all duration-300",
                                    isScrolled 
                                        ? "px-4 py-1.5 text-xs" 
                                        : "px-6 py-3 text-sm"
                                )}
                            >
                                {t('consultation')}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            className="md:hidden p-2 text-white"
                        >
                            {menuState ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Content */}
                    {menuState && (
                        <div className="md:hidden mt-4 flex flex-col gap-4">
                            {/* Mobile Navigation Links */}
                            {menuItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={() => setMenuState(false)}
                                        className={cn(
                                            "text-white hover:text-white/80 transition-colors duration-150 text-base font-medium py-2",
                                            isActive && "text-white font-semibold"
                                        )}
                                    >
                                        {t(item.name)}
                                    </Link>
                                );
                            })}
                            
                            {/* Mobile Language Switcher and Contact Button */}
                            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/20">
                                <LocaleSwitcher />
                                <Link
                                    href="/contact"
                                    onClick={() => setMenuState(false)}
                                    className="bg-white text-[rgb(28,39,6)] px-6 py-3 rounded-[60px] text-base font-medium hover:bg-white/90 transition-colors duration-150 text-center"
                                >
                                    {t('consultation')}
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
