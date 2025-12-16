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
    try {
      const stored = localStorage.getItem("preferredLanguage");
      if (stored && stored !== currentLang) {
        i18n.changeLanguage(stored);
        setCurrentLang(stored);
      }
    } catch {}
  }, []);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleLanguageSwitch = () => {
    const next = currentLang === "zh" ? "en" : "zh";
    i18n.changeLanguage(next);
    setCurrentLang(next);
    try {
      localStorage.setItem("preferredLanguage", next);
    } catch {}
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";
  const isDarkTextMode = isScrolled || !isHomePage;

  const desktopLinkColor = (active: boolean) =>
    active
      ? "text-red-600"
      : isDarkTextMode
      ? "text-gray-900"
      : "text-white";

  const desktopLangButtonClasses =
    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors";

  const langLabel = currentLang === "zh" ? "EN" : "中文";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isDarkTextMode ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-4 lg:py-[18px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/haixun-logo.svg"
                alt="Haixun Global Co., Ltd"
                className="h-8 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`nav-link font-medium text-base xl:text-lg hover:text-red-600 transition-colors ${desktopLinkColor(
                isActive("/")
              )}`}
            >
              {t("nav.home") || "Home"}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`nav-link font-medium text-base xl:text-lg hover:text-red-600 transition-colors flex items-center gap-1 ${
                  location.pathname.includes("/services")
                    ? "text-red-600"
                    : desktopLinkColor(false)
                }`}
              >
                {t("nav.services") || "Services"}{" "}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 bg-white border-gray-200 shadow-lg z-[100]">
                <DropdownMenuItem asChild><Link to="/services/lcl">LCL</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/fcl">FCL</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/warehousing">Warehousing</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/project-cargo">Project Cargo</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/air-freight">Air Freight</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/customs-clearance">Customs Clearance</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/import">Import Services</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/consolidation">Buyer's Consolidation</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/services/oog-shipments">OOG Shipments</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about-us"
              className={`nav-link font-medium text-base xl:text-lg hover:text-red-600 transition-colors ${desktopLinkColor(
                isActive("/about-us")
              )}`}
            >
              {t("nav.about") || "About Us"}
            </Link>

            <Link
              to="/blog"
              className={`nav-link font-medium text-base xl:text-lg hover:text-red-600 transition-colors ${desktopLinkColor(
                isActive("/blog")
              )}`}
            >
              {t("nav.news") || "News"}
            </Link>

            <Link
              to="/advantages"
              className={`nav-link font-medium text-base xl:text-lg hover:text-red-600 transition-colors ${desktopLinkColor(
                isActive("/advantages")
              )}`}
            >
              {t("nav.advantage") || "Advantage"}
            </Link>

            <Link
              to="/global-presence"
              className={`nav-link font-medium text-base xl:text-lg hover:text-red-600 transition-colors ${desktopLinkColor(
                isActive("/global-presence")
              )}`}
            >
              {t("nav.globalPresence") || "Global Presence"}
            </Link>

            <Link
              to="/contact"
              className={`nav-link font-medium text-base xl:text-lg hover:text-red-600 transition-colors ${desktopLinkColor(
                isActive("/contact")
              )}`}
            >
              {t("nav.contact") || "Contact"}
            </Link>

            <CountrySelector />

            <button
              type="button"
              onClick={handleLanguageSwitch}
              className={`${desktopLangButtonClasses} border-red-600 text-red-600 hover:bg-red-600 hover:text-white`}
            >
              {langLabel}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 mr-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className={isDarkTextMode ? "text-gray-900" : "text-white"} size={24} />
              ) : (
                <Menu className={isDarkTextMode ? "text-gray-900" : "text-white"} size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
