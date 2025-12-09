import { useState, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MRFQ_Logo from "@/assets/layout/MRFQ_Logo.png"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from './darkTheme';

const Header = () => {
    const [language, setLanguage] = useState('Ar');
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            setIsScrolled(scrolled);
            console.log('Scrolled:', scrolled, 'ScrollY:', window.scrollY); // Debug log
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div
            className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white border-b shadow-sm"
                : "bg-transparent"
                }`}
            style={{
                backdropFilter: isScrolled ? 'none' : 'none',
                WebkitBackdropFilter: isScrolled ? 'none' : 'none'
            }}
            dir="rtl"
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo - Right side in RTL */}
                    <div className="flex flex-col items-start">
                        <img src={MRFQ_Logo} alt="MRFQ Logo" className='w-[60px]' />
                    </div>

                    {/* Navigation Links - Center */}
                    <ul className="hidden md:flex items-center gap-10">
                        <li>
                            <a
                                href="#about"
                                className="text-foreground hover:text-blue-600 transition-colors text-base font-medium"
                            >
                                حول
                            </a>
                        </li>
                        <li>
                            <a
                                href="#advantages"
                                className="text-foreground hover:text-blue-600 transition-colors text-base font-medium"
                            >
                                المزايا
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-foreground hover:text-blue-600 transition-colors text-base font-medium"
                            >
                                تواصل
                            </a>
                        </li>
                    </ul>


                    {/* Actions - Left side in RTL */}
                    <div className="flex items-center gap-4">
                        {/* Language Selector */}
                        <ModeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 text-foreground hover:text-blue-600"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span className="font-medium">{language}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem onClick={() => setLanguage('Ar')}>
                                    العربية (Ar)
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLanguage('En')}>
                                    English (En)
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Login Button */}
                        <a href="https://mrfq.sa/login" target='_blank'>
                            <Button
                                variant="outline"

                                className="rounded-full px-6 py-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all font-medium"
                            >
                                تسجيل الدخول
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="hidden mt-4 flex flex-col gap-3">
                    <a href="#about" className="text-foreground hover:text-blue-600 text-base">
                        حول
                    </a>
                    <a href="#advantages" className="text-foreground hover:text-blue-600 text-base">
                        المزايا
                    </a>
                    <a href="#contact" className="text-foreground hover:text-blue-600 text-base">
                        تواصل
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;