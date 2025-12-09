import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MRFQ_Logo from "@/assets/layout/MRFQ_Logo.png"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
    const [language, setLanguage] = useState('Ar');

    return (
        <div className="w-full bg-transparent shadow-sm fixed top-0 z-50" dir="rtl">
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo - Right side in RTL */}
                    <div className="flex flex-col items-start">
                        <img src={MRFQ_Logo} alt="MRFQ Logo" className='w-[50px] h-[50px]' />
                    </div>

                    {/* Navigation Links - Center */}
                    <ul className="hidden md:flex items-center gap-10">
                        <li>
                            <a
                                href="#about"
                                className="text-gray-900 hover:text-blue-600 transition-colors text-base font-medium"
                            >
                                حول
                            </a>
                        </li>
                        <li>
                            <a
                                href="#advantages"
                                className="text-gray-900 hover:text-blue-600 transition-colors text-base font-medium"
                            >
                                المزايا
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-gray-900 hover:text-blue-600 transition-colors text-base font-medium"
                            >
                                تواصل
                            </a>
                        </li>
                    </ul>

                    {/* Actions - Left side in RTL */}
                    <div className="flex items-center gap-4">
                        {/* Language Selector */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 text-gray-900 hover:text-blue-600"
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
                        <Button
                            variant="outline"
                            className="rounded-full px-6 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all font-medium"
                        >
                            تسجيل الدخول
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden mt-4 flex flex-col gap-3">
                    <a href="#about" className="text-gray-900 hover:text-blue-600 text-base">
                        حول
                    </a>
                    <a href="#advantages" className="text-gray-900 hover:text-blue-600 text-base">
                        المزايا
                    </a>
                    <a href="#contact" className="text-gray-900 hover:text-blue-600 text-base">
                        تواصل
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;