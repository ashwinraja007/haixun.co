import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  X,
  MapPin,
  Globe,
  ExternalLink,
  Phone,
  Mail,
  Home,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Country data with translation keys
const getCountryData = () => [
  {
    code: "in",
    nameKey: "globalPresence.countries.india",
    lat: 9.9323,
    lng: 76.2996,
    cities: [
      {
        nameKey: "globalPresence.cities.kerala",
        addressKey: "globalPresence.addresses.kerala",
        lat: 9.9323,
        lng: 76.2996,
        contacts: ["+91 484 4019192 / 93"],
      },
      {
        nameKey: "globalPresence.cities.mumbai",
        addressKey: "globalPresence.addresses.mumbai",
        lat: 19.01123,
        lng: 73.03715,
        contacts: ["022-35131688 / 35113475 / 35082586"],
      },
      {
        nameKey: "globalPresence.cities.mumbaiAndheri",
        addressKey: "globalPresence.addresses.mumbaiAndheri",
        lat: 19.11303,
        lng: 72.86848,
        contacts: ["+91 8879756838"],
      },
      {
        nameKey: "globalPresence.cities.delhi",
        addressKey: "globalPresence.addresses.delhi",
        lat: 28.62748,
        lng: 77.2221,
        contacts: ["+91 11 493224477 / 48 /49"],
      },
      {
        nameKey: "globalPresence.cities.bangalore",
        addressKey: "globalPresence.addresses.bangalore",
        lat: 13.01855,
        lng: 77.64191,
        contacts: ["+91 9841676259"],
      },
      {
        nameKey: "globalPresence.cities.kolkata",
        addressKey: "globalPresence.addresses.kolkata",
        lat: 22.5769,
        lng: 88.4341,
        contacts: ["+91 33 46025458 / 59 / 60/ 61"],
      },
    ],
  },
  {
    code: "my",
    nameKey: "globalPresence.countries.malaysia",
    lat: 1.4842,
    lng: 103.7629,
    cities: [
      {
        nameKey: "globalPresence.cities.pasirgudang",
        addressKey: "globalPresence.addresses.pasirgudang",
        lat: 1.4842,
        lng: 103.7629,
        contacts: ["+603-3319 2778 / 74 / 75, 79"],
      },
      {
        nameKey: "globalPresence.cities.portklang",
        addressKey: "globalPresence.addresses.portklang",
        lat: 2.9982,
        lng: 101.3831,
        contacts: ["+603 - 3319 2778 / 74 / 75"],
      },
    ],
  },
  {
    code: "qa",
    nameKey: "globalPresence.countries.qatar",
    lat: 25.276987,
    lng: 51.520008,
    cities: [
      {
        nameKey: "globalPresence.cities.doha",
        addressKey: "globalPresence.addresses.doha",
        lat: 25.276987,
        lng: 51.520008,
        contacts: ["0974 33622555"],
      },
    ],
  },
  {
    code: "sg",
    nameKey: "globalPresence.countries.singapore",
    lat: 1.3521,
    lng: 103.8198,
    cities: [
      {
        nameKey: "globalPresence.countries.singapore",
        addressKey: "globalPresence.addresses.singapore",
        lat: 1.3521,
        lng: 103.8198,
        contacts: ["+ 65 69080838"],
        email: "info.sg@globalconsol.com",
      },
    ],
  },
  {
    code: "id",
    nameKey: "globalPresence.countries.indonesia",
    lat: -6.2088,
    lng: 106.8456,
    cities: [
      {
        nameKey: "globalPresence.cities.jakarta",
        addressKey: "globalPresence.addresses.jakarta",
        lat: -6.2088,
        lng: 106.8456,
        contacts: ["+62 21 529 20292, 522 4887"],
      },
      {
        nameKey: "globalPresence.cities.surabaya",
        addressKey: "globalPresence.addresses.surabaya",
        lat: -7.2575,
        lng: 112.7521,
        contacts: ["+62 21 529 20292, 522 4887"],
      },
    ],
  },
  {
    code: "lk",
    nameKey: "globalPresence.countries.sriLanka",
    lat: 6.9271,
    lng: 79.8612,
    cities: [
      {
        nameKey: "globalPresence.cities.colombo",
        addressKey: "globalPresence.addresses.colombo",
        lat: 6.9271,
        lng: 79.8612,
        contacts: ["+94 114477499", "+94 114477494 / 98"],
        email: "thilanka.cmb@globalconsol.com",
      },
    ],
  },
  {
    code: "th",
    nameKey: "globalPresence.countries.thailand",
    lat: 13.72957,
    lng: 100.53095,
    cities: [
      {
        nameKey: "globalPresence.cities.bangkok",
        addressKey: "globalPresence.addresses.bangkok",
        lat: 13.72957,
        lng: 100.53095,
        contacts: ["+662-634-3240", "+662-634-3942"],
      },
    ],
  },
  {
    code: "mm",
    nameKey: "globalPresence.countries.myanmar",
    lat: 16.8409,
    lng: 96.1735,
    cities: [
      {
        nameKey: "globalPresence.cities.yangon",
        addressKey: "globalPresence.addresses.yangon",
        lat: 16.8409,
        lng: 96.1735,
        contacts: ["+951 243158", "+951 377985, 243101"],
        email: "info@globalconsol.com",
      },
    ],
  },
  {
    code: "pk",
    nameKey: "globalPresence.countries.pakistan",
    lat: 24.8608,
    lng: 67.0097,
    cities: [
      {
        nameKey: "globalPresence.cities.karachi",
        addressKey: "globalPresence.addresses.karachi",
        lat: 24.8608,
        lng: 67.0097,
        contacts: ["+92-300-8282511", "+92-21-34302281-5"],
        email: "info.pk@globalconsol.com",
      },
      {
        nameKey: "globalPresence.cities.lahore",
        addressKey: "globalPresence.addresses.lahore",
        lat: 31.5204,
        lng: 74.3487,
        contacts: ["+92 42-35782306/07/08"],
        email: "info.pk@globalconsol.com",
      },
    ],
  },
  {
    code: "cn",
    nameKey: "globalPresence.countries.china",
    lat: 22.54262,
    lng: 114.11696,
    cities: [
      {
        nameKey: "globalPresence.cities.shenzhen",
        addressKey: "globalPresence.addresses.shenzhen",
        lat: 22.54262,
        lng: 114.11696,
        contacts: [],
      },
    ],
  },
  {
    code: "us",
    nameKey: "globalPresence.countries.usa",
    lat: 41.8622,
    lng: -87.7209,
    cities: [
      {
        nameKey: "globalPresence.cities.chicago",
        addressKey: "globalPresence.addresses.chicago",
        lat: 41.8622,
        lng: -87.7209,
        contacts: ["+1 847 254 7320"],
        email: "info@gglusa.us",
      },
      {
        nameKey: "globalPresence.cities.newYork",
        addressKey: "globalPresence.addresses.newYork",
        lat: 37.4545,
        lng: -122.1818,
        contacts: ["+1 732 456 6780"],
        email: "info@gglusa.us",
      },
      {
        nameKey: "globalPresence.cities.losAngeles",
        addressKey: "globalPresence.addresses.losAngeles",
        lat: 40.533,
        lng: -74.3481,
        contacts: ["+1 310 928 3903"],
        email: "info@gglusa.us",
      },
    ],
  },
  {
    code: "gb",
    nameKey: "globalPresence.countries.uk",
    lat: 51.5074,
    lng: -0.1278,
    cities: [
      {
        nameKey: "globalPresence.cities.london",
        addressKey: "globalPresence.addresses.london",
        lat: 51.5074,
        lng: -0.1278,
        contacts: ["+44 (0) 203 393 9508"],
      },
    ],
  },
  {
    code: "au",
    nameKey: "globalPresence.countries.australia",
    lat: -37.7064,
    lng: 144.8503,
    cities: [
      {
        nameKey: "globalPresence.cities.melbourne",
        addressKey: "globalPresence.addresses.melbourne",
        lat: -37.7064,
        lng: 144.8503,
        contacts: ["Mob: +61 432254969", "Tel: +61 388205157"],
        email: "info@gglaustralia.com",
      },
    ],
  },
];

const ContactSidebar: React.FC<ContactSidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
  const [selectedCityIndexes, setSelectedCityIndexes] = useState<{
    [countryName: string]: number;
  }>({});
  const isMobile = useIsMobile();

  // Get countries data and sort by translated name
  const countriesData = getCountryData();
  const sortedCountries = [...countriesData].sort((a, b) =>
    t(a.nameKey).localeCompare(t(b.nameKey))
  );

  useEffect(() => {
    iframeRef.current = document.querySelector("iframe");
  }, []);

  useEffect(() => {
    if (sortedCountries.length > 0 && sortedCountries[0].cities.length > 0) {
      const firstCountry = sortedCountries[0];
      const firstCity = firstCountry.cities[0];
      setSelectedLocation(firstCity);
      setExpandedCountry(t(firstCountry.nameKey));

      const initialIndexes: { [countryName: string]: number } = {};
      sortedCountries.forEach((country) => {
        initialIndexes[t(country.nameKey)] = 0;
      });
      setSelectedCityIndexes(initialIndexes);

      navigateToLocation(firstCity.lat, firstCity.lng, firstCity);
    }
  }, [t]);

  const navigateToLocation = (lat: number, lng: number, city: any = null) => {
    const iframe = document.querySelector(
      'iframe[title="Interactive Map"]'
    ) as HTMLIFrameElement;
    if (iframe) {
      try {
        const zoomLevel = city ? 12 : 9;
        const baseUrl =
          "https://www.google.com/maps/d/u/0/embed?mid=1Gy9JUvlSaOBrtQaKI7OoYU2KgFymoXg&ehbc";
        const newSrc = `${baseUrl}&z=${zoomLevel}&ll=${lat},${lng}&hl=en&ehbc=2E312F&output=embed`;
        iframe.src = newSrc;
        if (city) {
          setSelectedLocation(city);
        }
      } catch (e) {
        console.error("Navigation failed:", e);
      }
    }
  };

  const handleCitySelection = (country: any, cityIndex: number) => {
    const countryName = t(country.nameKey);
    setSelectedCityIndexes((prev) => ({
      ...prev,
      [countryName]: cityIndex,
    }));

    const selectedCity = country.cities[cityIndex];
    navigateToLocation(selectedCity.lat, selectedCity.lng, selectedCity);
  };

  const isSelectedCity = (countryNameKey: string, cityIndex: number) => {
    const countryName = t(countryNameKey);
    return selectedCityIndexes[countryName] === cityIndex;
  };

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`my-3 w-full ${
          isMobile ? "max-w-[95%]" : "max-w-[520px]"
        } mx-auto px-2 md:px-0`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-xl shadow-sm">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <h2 className="font-bold text-lg">{t("globalPresence.globalLocations")}</h2>
          </div>
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-red-500/20"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <ScrollArea className="custom-scroll h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] bg-white rounded-b-xl shadow-md">
          <div className="p-4">
            <div className="mt-4 space-y-3">
              <Accordion
                type="single"
                collapsible
                value={expandedCountry || ""}
                className="w-full space-y-3"
              >
                {sortedCountries.map((country) => (
                  <AccordionItem
                    key={country.nameKey}
                    value={t(country.nameKey)}
                    className="border border-red-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
                  >
                    <AccordionTrigger
                      onClick={() => {
                        setExpandedCountry(
                          expandedCountry === t(country.nameKey) ? null : t(country.nameKey)
                        );
                        navigateToLocation(country.lat, country.lng);
                      }}
                      className="rounded-t-md hover:bg-amber-50 transition-colors px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={`/${country.code}.svg`}
                          alt={`${t(country.nameKey)} flag`}
                          className="w-6 h-6 rounded-sm object-cover shadow-sm"
                        />
                        <span className="font-medium">{t(country.nameKey)}</span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="bg-gradient-to-b from-red-50/30 to-white px-3 py-2">
                      <div className="space-y-2">
                        <div className="space-y-2">
                          {country.cities.map((city: any, index: number) => (
                            <div key={index} className="w-full">
                              <Button
                                variant="ghost"
                                className={cn(
                                  "w-full justify-start text-sm p-2 h-auto rounded-md border transition-all shadow-sm",
                                  isSelectedCity(country.nameKey, index)
                                    ? "bg-red-100 hover:bg-red-150 border-red-300 text-red-800"
                                    : "bg-white hover:bg-red-50 border-gray-100 hover:border-red-200"
                                )}
                                onClick={() => {
                                  handleCitySelection(country, index);
                                  if (isMobile) {
                                    setTimeout(
                                      () =>
                                        setSelectedLocation({
                                          ...city,
                                        }),
                                      50
                                    );
                                  }
                                }}
                              >
                                <MapPin className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                                <span className="font-medium truncate">
                                  {t(city.nameKey)}
                                </span>
                                <ChevronRight className="w-4 h-4 ml-auto text-red-300" />
                              </Button>

                              {isSelectedCity(country.nameKey, index) &&
                                city.addressKey && (
                                  <div className="mt-2 p-3 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-200 shadow text-sm animate-in fade-in duration-300 w-full">
                                    <h4 className="font-semibold text-red-700 mb-2 pb-1 border-b border-red-100 flex items-center">
                                      <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                                        {t(city.nameKey)} {t("globalPresence.office")}
                                      </span>
                                    </h4>

                                    <div className="flex items-start mb-2 group hover:bg-red-50/50 p-2 rounded-md transition-colors w-full">
                                      <Home className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0 group-hover:text-red-600 transition-colors" />
                                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors text-sm break-words w-full overflow-hidden">
                                        {t(city.addressKey)}
                                      </p>
                                    </div>

                                    {city.contacts && city.contacts.length > 0 && (
                                      <div className="flex items-start mb-2 group hover:bg-red-50/50 p-2 rounded-md transition-colors w-full">
                                        <Phone className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0 group-hover:text-red-600 transition-colors" />
                                        <div className="space-y-1 w-full overflow-hidden">
                                          {city.contacts.map(
                                            (contact: string, idx: number) => (
                                              <p
                                                key={idx}
                                                className="text-gray-700 group-hover:text-gray-900 transition-colors text-sm break-words"
                                              >
                                                {contact}
                                              </p>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}

                                    {city.email && (
                                      <div className="flex items-start group hover:bg-red-50/50 p-2 rounded-md transition-colors w-full">
                                        <Mail className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0 group-hover:text-red-600 transition-colors" />
                                        <a
                                          href={`mailto:${city.email}`}
                                          className="text-red-600 hover:text-red-800 hover:underline flex items-center text-sm break-words w-full overflow-hidden"
                                        >
                                          {city.email}
                                          <ExternalLink className="ml-1 h-3 w-3" />
                                        </a>
                                      </div>
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Scrollbar styling only for this component */}
     <style>
{`
  /* Radix ScrollArea scrollbar container */
  .custom-scroll [data-orientation] {
    background: transparent !important;
  }

  /* The draggable scrollbar thumb (THIS is the blue one) */
  .custom-scroll [data-orientation] .ScrollAreaThumb,
  .custom-scroll [data-orientation] [data-scrollbar-thumb],
  .custom-scroll [data-orientation] div[style*="background"],
  .custom-scroll [data-radix-scroll-area-thumb] {
    background-color: #bc0018 !important;   /* RED always */
    border-radius: 8px !important;
  }

  /* While dragging */
  .custom-scroll [data-orientation] .ScrollAreaThumb[data-state="visible"],
  .custom-scroll [data-radix-scroll-area-thumb][data-state="visible"] {
    background-color: #9b0014 !important;  /* darker red */
  }

  /* Fallback override for any inline style background injected by Radix */
  .custom-scroll div[style*="background-color"] {
    background-color: #bc0018 !important;
  }
`}
</style>

    </>
  );
};

export default ContactSidebar;
