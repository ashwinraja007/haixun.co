import React, { useRef, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  X,
  MapPin,
  Globe,
  Phone,
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

const countries = [
  {
    code: "sg",
    name: "Singapore (Headquarters)",
    lat: 1.3521,
    lng: 103.8198,
    cities: [
      {
        name: "Singapore",
        lat: 1.3521,
        lng: 103.8198,
        address:
          "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore 099447",
        contacts: ["+65 65140868"],
      },
    ],
  },
  {
    code: "my",
    name: "Malaysia",
    lat: 2.9982,
    lng: 101.3831,
    cities: [
      {
        name: "Port Klang",
        lat: 2.9982,
        lng: 101.3831,
        address:
          "18 Jalan Sungai Chandong 12, Bdr Armada Putra Pulau Indah, 42000 Pelabuhan Klang, Selangor Darul Ehsan, Malaysia",
        contacts: ["+60 16-985 4705"],
      },
      {
        name: "Johor",
        lat: 1.4842,
        lng: 103.7629,
        address:
          "HS(D) 576585 PTD 233430, No.19A, Jalan Sagai 6, Taman Pasir Putih, 81700 Pasir Gudang, Johor",
        contacts: ["+60 16-959 4075"],
      },
    ],
  },
  {
    code: "id",
    name: "Indonesia",
    lat: -6.2088,
    lng: 106.8456,
    cities: [
      {
        name: "Jakarta",
        lat: -6.2088,
        lng: 106.8456,
        address: "408, Lina Building, JL. HR Rasuna Said kav B7, Jakarta",
        contacts: ["+62 815 1038 5581"],
      },
    ],
  },
  {
    code: "sa",
    name: "Saudi Arabia",
    lat: 26.4207,
    lng: 50.0888,
    cities: [
      {
        name: "Dammam",
        lat: 26.4207,
        lng: 50.0888,
        address:
          "2817 King Faizal Road, Dammam 9403-32233, Kingdom of Saudi Arabia",
        contacts: ["+966 13 3430003"],
      },
    ],
  },
  {
    code: "th",
    name: "Thailand",
    lat: 13.7563,
    lng: 100.5018,
    cities: [
      {
        name: "Bangkok",
        lat: 13.7563,
        lng: 100.5018,
        address:
          "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500 109",
        contacts: ["+60 16-985 4705"],
      },
    ],
  },
  {
    code: "ae",
    name: "United Arab Emirates (UAE)",
    lat: 25.2048,
    lng: 55.2708,
    cities: [
      {
        name: "Dubai",
        lat: 25.2048,
        lng: 55.2708,
        address:
          "Plot #2430152, Al Qusais Industrial Area 2, Dubai, United Arab Emirates",
        contacts: ["+971 509093357"],
      },
    ],
  },
  {
    code: "gb",
    name: "United Kingdom (UK)",
    lat: 51.5074,
    lng: -0.1278,
    cities: [
      {
        name: "London",
        lat: 51.5074,
        lng: -0.1278,
        address:
          "167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom",
        contacts: ["+44 (0) 7305 856612"],
      },
    ],
  },
  {
    code: "us",
    name: "United States (USA)",
    lat: 40.7128,
    lng: -74.006,
    cities: [
      {
        name: "New York / New Jersey",
        lat: 40.5576,
        lng: -74.3229,
        address:
          "New Jersey Branch, 33 Wood Avenue South, Suite 600, Iselin, NJ 08830",
        contacts: ["+1 732 456 6780"],
      },
    ],
  },
  {
    code: "au",
    name: "Australia",
    lat: -37.7064,
    lng: 144.8503,
    cities: [
      {
        name: "Victoria",
        lat: -37.7064,
        lng: 144.8503,
        address: "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria 3043",
        contacts: ["+61 388205157"],
      },
    ],
  },
];

// Singapore stays at top
const sortedCountries = [
  countries[0],
  ...countries.slice(1).sort((a, b) => a.name.localeCompare(b.name)),
];

const ContactSidebar: React.FC<ContactSidebarProps> = ({ isOpen, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
  const [selectedCityIndexes, setSelectedCityIndexes] = useState<{
    [countryName: string]: number;
  }>({});
  const isMobile = useIsMobile();

  useEffect(() => {
    iframeRef.current = document.querySelector("iframe");
  }, []);

  useEffect(() => {
    const firstCountry = sortedCountries[0];
    const firstCity = firstCountry.cities[0];

    setSelectedLocation(firstCity);
    setExpandedCountry(firstCountry.name);

    const initialIndexes: any = {};
    sortedCountries.forEach((country) => (initialIndexes[country.name] = 0));
    setSelectedCityIndexes(initialIndexes);

    navigateToLocation(firstCity.lat, firstCity.lng, firstCity);
  }, []);

  const navigateToLocation = (lat: number, lng: number, city: any = null) => {
    const iframe = document.querySelector(
      'iframe[title="Interactive Map"]'
    ) as HTMLIFrameElement;

    if (!iframe) return;

    const zoomLevel = city ? 12 : 9;
    const baseUrl =
      "https://www.google.com/maps/d/embed?mid=1G4yw3-VR-EIBj21s8AiMV8WGcJi6cGQ&ehbc=2E312F";
    iframe.src = `${baseUrl}&z=${zoomLevel}&ll=${lat},${lng}&hl=en&output=embed`;

    if (city) setSelectedLocation(city);
  };

  const handleCitySelection = (country: any, cityIndex: number) => {
    setSelectedCityIndexes((prev) => ({ ...prev, [country.name]: cityIndex }));
    const city = country.cities[cityIndex];
    navigateToLocation(city.lat, city.lng, city);
  };

  const isSelectedCity = (countryName: string, cityIndex: number) =>
    selectedCityIndexes[countryName] === cityIndex;

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div
        className={`my-3 w-full ${
          isMobile ? "max-w-[95%]" : "max-w-[520px]"
        } mx-auto px-2`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-t-xl shadow-sm">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <h2 className="font-bold text-lg">Global Locations</h2>
          </div>

          {isMobile && (
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-white hover:bg-violet-500/20"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Scroll Area */}
        <ScrollArea className="h-[calc(100vh-10rem)] bg-white rounded-b-xl shadow-md">
          <div className="p-4">
            <Accordion
              type="single"
              collapsible
              value={expandedCountry || ""}
              className="space-y-3"
            >
              {sortedCountries.map((country) => (
                <AccordionItem
                  key={country.name}
                  value={country.name}
                  className="border border-violet-100 rounded-lg"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setExpandedCountry(
                        expandedCountry === country.name ? null : country.name
                      );
                      navigateToLocation(country.lat, country.lng);
                    }}
                    className="px-3 py-2 hover:bg-violet-50"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`/${country.code}.svg`}
                        className="w-6 h-6 rounded-sm"
                      />
                      <span className="font-medium">{country.name}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-3 py-2 bg-violet-50/30">
                    {country.cities.map((city, index) => (
                      <div key={index} className="w-full">
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-sm p-2 rounded-md border shadow-sm",
                            isSelectedCity(country.name, index)
                              ? "bg-violet-100 border-violet-300 text-violet-800"
                              : "bg-white hover:bg-violet-50 border-gray-100"
                          )}
                          onClick={() => handleCitySelection(country, index)}
                        >
                          <MapPin className="w-4 h-4 mr-2 text-violet-600" />
                          <span className="font-medium truncate">
                            {city.name}
                          </span>
                          <ChevronRight className="w-4 h-4 ml-auto text-violet-300" />
                        </Button>

                        {isSelectedCity(country.name, index) && (
                          <div className="mt-2 p-3 bg-white border border-violet-200 rounded-lg">
                            <div className="flex items-start mb-2">
                              <Home className="w-4 h-4 mr-2 text-violet-600 mt-1" />
                              <p className="text-sm">{city.address}</p>
                            </div>

                            {/* Contacts */}
                            {city.contacts?.length > 0 && (
                              <div className="flex items-start">
                                <Phone className="w-4 h-4 mr-2 text-violet-600 mt-1" />
                                <div className="space-y-1">
                                  {city.contacts.map((c, i) => (
                                    <p key={i} className="text-sm">
                                      {c}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ContactSidebar;
