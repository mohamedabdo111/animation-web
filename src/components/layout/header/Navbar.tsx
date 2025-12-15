import { useEffect, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MRFQ_Logo_dark from "@/assets/layout/MRFQ_Logo.png";
import MRFQ_Logo_light from "@/assets/layout/MRFQ_White_Logo.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./darkTheme";
import MobileMenu from "./mobileMenu";
import { useTheme } from "@/components/theme-providers";

const Header = () => {
  const [language, setLanguage] = useState("Ar");
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme } = useTheme();

  const logo = theme === "dark" ? MRFQ_Logo_light : MRFQ_Logo_dark;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full bg-blu fixed top-0 z-50 transition-all duration-300 bg-transparent shadow-sm ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      // style={{
      //     backdropFilter: isScrolled ? 'none' : 'none',
      //     WebkitBackdropFilter: isScrolled ? 'none' : 'none'
      // }}
      dir="rtl"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Right side in RTL */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="MRFQ Logo" className="w-[60px]" />
          </div>

          {/* Navigation Links - Center */}
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <Link
                to="#about"
                className="text-foreground hover:text-blue-600 transition-colors text-base font-medium"
              >
                حول
              </Link>
            </li>
            <li>
              <Link
                to="#advantages"
                className="text-foreground hover:text-blue-600 transition-colors text-base font-medium"
              >
                المزايا
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="text-foreground hover:text-blue-600 transition-colors text-base font-medium"
              >
                تواصل
              </Link>
            </li>
          </ul>

          {/* Actions - Left side in RTL */}
          <div className="flex items-center gap-2 justify-between">
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
                <DropdownMenuItem onClick={() => setLanguage("Ar")}>
                  العربية (Ar)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("En")}>
                  English (En)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Link to="https://mrfq.sa/login" target="_blank">
              <Button
                variant="outline"
                className="rounded-full hidden sm:block px-6 py-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all font-medium"
              >
                تسجيل الدخول
              </Button>
            </Link>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
