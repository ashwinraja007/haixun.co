import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { getCurrentCountryFromPath, detectCountryByIP } from '@/services/countryDetection';
import { useTranslation } from 'react-i18next';

interface CountryData {
  country: string;
  company: string;
  website: string;
  priority: number;
  flag?: string;
  route?: string;
  visibilityByCountry?: Record<string, boolean>;
}

const countries: CountryData[] = [
  { country: "SINGAPORE", company: "GGL", website: "https://www.ggl.sg", priority: 1, flag: "/sg.svg" },
  { country: "SRI LANKA", company: "GC", website: "https://www.globalconsol.com/sri-lanka/home", priority: 2, flag: "/lk.svg" },
  { country: "MYANMAR", company: "GC", website: "https://www.globalconsol.com/myanmar/home", priority: 3, flag: "/mm.svg" },
  { country: "PAKISTAN", company: "GC", website: "https://www.globalconsol.com/pakistan/home", priority: 5, flag: "/pk.svg" },

  {
    country: "MALAYSIA",
    company: "OECL",
    website: "https://oecl.sg/malaysia",
    priority: 6,
    flag: "/my.svg",
    visibilityByCountry: { BANGLADESH: false }
  },
  {
    country: "INDONESIA",
    company: "OECL",
    website: "https://oecl.sg/indonesia",
    priority: 7,
    flag: "/id.svg",
    visibilityByCountry: { BANGLADESH: false }
  },
  {
    country: "THAILAND",
    company: "OECL",
    website: "https://oecl.sg/thailand",
    priority: 8,
    flag: "/th.svg",
    visibilityByCountry: { BANGLADESH: false }
  },

  { country: "INDIA", company: "GGL", website: "https://gglindia.com", priority: 8, flag: "/in.svg" },
  { country: "AUSTRALIA", company: "GGL", website: "https://www.gglaustralia.com/", priority: 10, flag: "/au.svg" },
  { country: "QATAR", company: "ONE GLOBAL", website: "https://oneglobalqatar.com/", priority: 11, flag: "/qa.svg" },
  {
    country: "USA",
    company: "GGL",
    website: "https://gglusa.us/",
    priority: 14,
    flag: "/us.svg",
    visibilityByCountry: { MYANMAR: false }
  },
  { country: "UK", company: "Moltech", website: "https://moltech.uk/", priority: 15, flag: "/gb.svg" }
];

const CountrySelector = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const getCountryTranslationKey = (countryName: string) => {
    const map: Record<string, string> = {
      SINGAPORE: "globalPresence.countries.singapore",
      "SRI LANKA": "globalPresence.countries.sriLanka",
      MYANMAR: "globalPresence.countries.myanmar",
      PAKISTAN: "globalPresence.countries.pakistan",
      MALAYSIA: "globalPresence.countries.malaysia",
      INDONESIA: "globalPresence.countries.indonesia",
      THAILAND: "globalPresence.countries.thailand",
      INDIA: "globalPresence.countries.india",
      AUSTRALIA: "globalPresence.countries.australia",
      QATAR: "globalPresence.countries.qatar",
      USA: "globalPresence.countries.usa",
      UK: "globalPresence.countries.uk",
    };
    return map[countryName] || countryName;
  };

  const detected = getCurrentCountryFromPath(location.pathname) ?? {
    code: "SG",
    name: "Singapore"
  };
  const currentCountryName = detected.name.toUpperCase();

  const visibleCountries = countries.filter(
    c => !c.visibilityByCountry || c.visibilityByCountry[currentCountryName] !== false
  );

  const sortedCountries = [...visibleCountries].sort((a, b) =>
    a.priority === b.priority
      ? a.company.localeCompare(b.company)
      : a.priority - b.priority
  );

  const handleCountrySelect = (country: CountryData) => {
    localStorage.setItem("preferredCountry", JSON.stringify({
      name: country.country,
      code: country.flag?.split('/')[1]?.split('.')[0] || ''
    }));

    window.open(country.website, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-black text-white border-black hover:bg-black/90 px-4 py-2 rounded-full flex items-center gap-2"
          >
            <Globe className="w-5 h-5" />
            {t("nav.switchcountry")}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        {/* 🔥 MOBILE SAFE HEIGHT FIX */}
        <DropdownMenuContent
          align="center"
          sideOffset={8}
          className="
            w-[280px]
            max-h-[70vh]
            overflow-hidden
            bg-white
            border
            rounded-lg
            shadow-xl
          "
        >
          <ScrollArea
            className="
              h-[70vh]
              w-full
              pr-2
              [&_[data-radix-scroll-area-thumb]]:bg-red-500
              [&_[data-radix-scroll-area-track]]:bg-red-100
            "
          >
            <div className="grid gap-1 p-2">
              {sortedCountries.map(country => (
                <DropdownMenuItem
                  key={`${country.country}-${country.company}`}
                  onSelect={(e) => {
                    e.preventDefault();
                    handleCountrySelect(country);
                  }}
                  className="
                    cursor-pointer
                    rounded-md
                    px-3
                    py-4
                    min-h-[60px]
                    flex
                    items-center
                    gap-3
                    hover:bg-red-100
                    focus:bg-red-500
                    focus:text-white
                    data-[highlighted]:bg-red-500
                    data-[highlighted]:text-white
                  "
                >
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center w-full">
                    <img
                      src={country.flag}
                      alt={country.country}
                      className="w-6 h-6 rounded-sm"
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium">
                        {t(getCountryTranslationKey(country.country))}
                      </div>
                      <div className="text-xs text-gray-500">
                        {country.company}
                      </div>
                    </div>
                  </motion.div>
                </DropdownMenuItem>
              ))}
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CountrySelector;
