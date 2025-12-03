import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";
import { UserCheck, FileText, Shield, Globe } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const CustomsClearance = () => {
  const location = useLocation();

  const detected = getCurrentCountryFromPath(location.pathname);
  const currentCountry = detected ?? { code: "SG", name: "Singapore" };

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${basePath}`;
  };

  const servicesNav = [
    { label: "See All Services", path: "/services" },
    { label: "LCL Services", path: "/services/lcl" },
    { label: "FCL Services", path: "/services/fcl" },
    { label: "Warehousing", path: "/services/warehousing" },
    { label: "Project Cargo", path: "/services/project-cargo" },
    { label: "Air Freight", path: "/services/air-freight" },
    { label: "Customs Clearance", path: "/services/customs-clearance" },
    { label: "Import Services", path: "/services/import" },
    { label: "Consolidation", path: "/services/consolidation" },
    { label: "OOG Shipments", path: "/services/oog-shipments" },
  ];

  const pathname = location.pathname;

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      <div className="h-[90px] w-full bg-white" />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[300px] md:h-[360px] w-full overflow-hidden flex items-center justify-center">
          <img
            src="/servicepagehero.jpg"
            alt="Customs Clearance Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                Customs Clearance
              </h1>
              <div className="w-24 h-[3px] bg-[#BC0018] mx-auto mt-3" />

              <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
                Fast, compliant, and reliable customs brokerage for smooth import and export
                movements across global gateways.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr]">
              
              {/* SIDEBAR */}
              <aside className="space-y-10">
                <div>
                  <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-900 mb-2">
                    OUR SERVICES
                  </h2>
                  <div className="w-12 h-[2px] bg-[#BC0018] mb-5" />

                  <div className="border border-slate-200 rounded-md bg-slate-50 overflow-hidden">
                    {servicesNav.map((item) => {
                      const to = getNavLink(item.path);
                      const isActive =
                        pathname === to ||
                        (item.path !== "/services" && pathname.startsWith(to));

                      return (
                        <Link
                          key={item.path}
                          to={to}
                          className={`block px-6 py-3 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-[#BC0018] text-white"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </aside>

              {/* RIGHT CONTENT */}
              <div className="space-y-12">
                
                {/* TOP IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-md overflow-hidden shadow-lg relative"
                >
                  <img
                    src="/customclearance.png"
                    alt="Customs Clearance Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>

                {/* DESCRIPTION */}
                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BC0018]/10">
                      <UserCheck className="w-5 h-5 text-[#BC0018]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                        Customs Clearance
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  {/* UPDATED CONTENT WITH NEW PARAGRAPH */}
                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    
                    {/* NEW PARAGRAPH */}
                    <p>
                      As one of the leading custom clearing agents, we ensure that all clearance
                      formalities are done in a smooth and easy manner so that all our customers
                      receive their goods on time. Our customs brokers help ease import and export
                      regulations and all paperwork related to trade compliances and procedures to
                      ensure that your consignments via sea, land and air leave on time.
                    </p>

                    <p>
                      With more than a decade of experience, we have cleared all types of
                      shipments of every size and a wide variety of cargo from across the world,
                      managing each movement with precision. Our experienced team studies local
                      rules and regulations thoroughly to help clients overcome complex trade
                      compliance challenges.
                    </p>

                    <p>
                      Our strength lies in understanding changing business demands and challenges,
                      allowing us to handle all documentation and compliance seamlessly so that
                      your operations run without delay. We provide end-to-end import and export
                      customs clearance solutions.
                    </p>
                  </div>
                </section>

                {/* WHY CHOOSE SECTION */}
                <section>
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900 mb-2">
                    Why Choose Our Customs Service
                  </h2>
                  <div className="w-16 h-[2px] bg-[#BC0018] mb-6" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: FileText,
                        title: "Expert Documentation",
                        description:
                          "Complete handling of all import and export documentation requirements.",
                      },
                      {
                        icon: Shield,
                        title: "Compliance Assurance",
                        description:
                          "Ensuring full compliance with customs regulations at every stage.",
                      },
                      {
                        icon: Globe,
                        title: "Global Expertise",
                        description:
                          "A strong understanding of customs procedures across major ports worldwide.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                      >
                        <div className="bg-[#BC0018]/10 p-3 rounded-lg mb-4 w-fit">
                          <item.icon className="w-6 h-6 text-[#BC0018]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* CTA REMOVED TO MATCH YOUR NEW DESIGN STYLE */}

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomsClearance;
