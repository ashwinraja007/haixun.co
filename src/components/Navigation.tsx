import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

// 🌍 Your country list
const COUNTRIES = [
  { code: "au", name: "Australia", short: "GGL", url: "https://haixun-global.com.au" },
  { code: "sg", name: "Singapore", short: "GGL", url: "https://haixun-global.com.sg" },
  { code: "sg", name: "Singapore", short: "GC", url: "https://gc.sg" },
  { code: "my", name: "Malaysia", short: "OECL", url: "https://oecl.my" },
  { code: "th", name: "Thailand", short: "OECL", url: "https://oecl.co.th" },
  { code: "mm", name: "Myanmar", short: "GC", url: "https://gc.com.mm" },
  { code: "id", name: "Indonesia", short: "OECL", url: "https://oecl.co.id" },
  { code: "bd", name: "Bangladesh", short: "GGL", url: "https://haixun.com.bd" },
  { code: "lk", name: "Sri Lanka", short: "GC", url: "https://gc.lk" },
  { code: "qa", name: "Qatar", short: "ONE G", url: "https://oneg.qa" },
  { code: "sa", name: "Saudi Arabia", short: "AMASS", url: "https://amass.sa" },
  { code: "ae", name: "UAE", short: "AMASS", url: "https://amass.ae" },
  { code: "us", name: "USA", short: "GGL", url: "https://haixunusa.com" },
  { code: "uk", name: "UK", short: "MOLTECH", url: "https://moltech.uk" },
];

// Clean flag icon
function Flag({ code }: { code: string }) {
  return (
    <img
      src={`/${code}.svg`}
      className="h-5 w-6 rounded-sm object-cover"
      alt=""
    />
  );
}

export default function CountrySelector() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm font-medium hover:bg-gray-100 transition">
        <Globe size={16} />
        Switch Country
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-72 bg-white shadow-lg py-2 border border-gray-200">
        {COUNTRIES.map((country, index) => (
          <DropdownMenuItem
            key={index}
            className="px-3 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100"
            onClick={() => window.open(country.url, "_blank")}
          >
            <Flag code={country.code} />

            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                {country.name}
              </span>

              <span className="text-xs text-gray-500 font-medium">
                {country.short}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
