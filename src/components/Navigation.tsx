import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CountrySelector from "@/components/common/CountrySelector";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  useEffect(() => {
    const stored = localStorage.getItem("preferredLanguage");
    if (stored) {
      i18n.changeLanguage(stored);
      setCurrentLang(stored);
    }
  }, []);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleLanguageSwitch = () => {
    const next = currentLang === "zh" ? "en" : "zh";
    i18n.changeLanguage(next);
    setCurrentLang(next);
    localStorage.setItem("preferredLanguage", next);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";
  const isDarkTextMode = isScrolled || !isHomePage;

  const linkTextColor = (active: boolean) =>
    active
      ? "text-red-600"
      : isDarkTextMode
      ? "text-gray-900"
      : "text-white";

  const langLabel = currentLang === "zh" ? "EN" : "中文";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isDarkTextMode ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src="/haixun-logo.svg"
              alt="Haixun Global"
              className="h-10 lg:h-14"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              { to: "/", label: t("nav.home") || "Home" },
              { to: "/about-us", label: t("nav.about") || "About Us" },
              { to: "/blog", label: t("nav.news") || "News" },
              { to: "/advantages", label: t("nav.advantage") || "Advantage" },
              { to: "/global-presence", label: t("nav.globalPresence") || "Global Presence" },
              { to: "/contact", label: t("nav.contact") || "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative group font-medium text-lg transition-colors ${linkTextColor(
                  isActive(item.to)
                )}`}
              >
                {item.label}

                {/* 🔴 RED UNDERLINE */}
                <span
                  className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 bg-red-600 transition-all duration-300
                  ${
                    isActive(item.to)
                      ? "w-3/4"
                      : "w-0 group-hover:w-3/4"
                  }`}
                />
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`relative group flex items-center gap-1 font-medium text-lg ${linkTextColor(
                  location.pathname.includes("/services")
                )}`}
              >
                {t("nav.services") || "Services"}
                <ChevronDown className="w-4 h-4" />

                <span
                  className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 bg-red-600 transition-all duration-300
                  ${
                    location.pathname.includes("/services")
                      ? "w-3/4"
                      : "w-0 group-hover:w-3/4"
                  }`}
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 bg-white shadow-lg">
                <DropdownMenuItem asChild><Link to="/services/lcl">LCL</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/fcl">FCL</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/warehousing">Warehousing</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/air-freight">Air Freight</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <CountrySelector />

            <button
              onClick={handleLanguageSwitch}
              className="rounded-full border border-red-600 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              {langLabel}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? (
              <X className={isDarkTextMode ? "text-black" : "text-white"} />
            ) : (
              <Menu className={isDarkTextMode ? "text-black" : "text-white"} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
