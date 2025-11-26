import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Ship,
  Truck,
  Boxes,
  Plane,
  FileText,
  Package,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

const RUBY_RED = "#BC0018";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const AboutUs = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const detected = getCurrentCountryFromPath(location.pathname);
  const currentCountry = detected ?? { code: "SG", name: "Singapore" };

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${basePath}`;
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow pt-20">
        {/* ABOUT SECTION – IMAGE LEFT, TEXT RIGHT */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* LEFT: IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.18)] bg-slate-100">
                  <img
                    src="/Dubai.jpg"
                    alt="Haixun Global operations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* RIGHT: TEXT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p
                  className="text-sm font-semibold tracking-[0.22em] uppercase"
                  style={{ color: RUBY_RED }}
                >
                  Who We Are
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  About Haixun Global
                </h1>

                <p className="text-lg leading-relaxed text-gray-700">
                  Haixun Global stands on a powerful legacy of over three decades
                  in the logistics and supply chain industry. With deep expertise
                  in sea freight, land transportation, air cargo, customs
                  clearance, warehousing, and distribution, we deliver
                  end-to-end logistics solutions for businesses of all sizes.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Our growth across China, India, Malaysia, the UAE, and other
                  key regions reflects our commitment to operational excellence,
                  responsive service, and seamless cross-border movement. Every
                  shipment is handled with precision, transparency, and a strong
                  customer-first approach.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Haixun Global Shenzhen—established in 2019—represents the
                  Group’s strong and rapidly expanding presence in China.
                  Although young as a branch, it draws strength from the Group’s
                  30+ years of logistics expertise, global network, and trusted
                  partnerships.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Tailored Transport Plans
                    </h3>
                    <p>
                      Solutions built around cargo type, route complexity, and
                      delivery timelines to optimise cost and reliability.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Certified & Compliant
                    </h3>
                    <p>
                      Safe, compliant handling for Flat Rack, Open Top,
                      Breakbulk and traditional container shipping.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/contact">
                    <Button
                      className="text-white rounded-full px-8"
                      style={{ backgroundColor: RUBY_RED }}
                    >
                      {t("nav.contact")}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ALL SERVICES SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl font-bold mb-4"
                style={{ color: RUBY_RED }}
              >
                Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive end-to-end global logistics solutions tailored to your
                business needs.
              </p>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {/* 1. LCL Services */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl"
                style={{
                  borderColor: "rgba(148, 163, 184, 1)",
                }}
              >
                <div className="group-hover:text-white">
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 transition group-hover:bg-white">
                    <Ship
                      className="w-8 h-8"
                      style={{ color: RUBY_RED }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    LCL Services
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    HAIXUN operate own consolidation service on many trade routes,
                    providing complete LCL solutions.
                  </p>
                </div>

                <Link to={getNavLink("/services/lcl")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white"
                    style={{ color: RUBY_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: RUBY_RED }}
                      />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 2. FCL Services */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 transition group-hover:bg-white">
                    <Ship
                      className="w-8 h-8"
                      style={{ color: RUBY_RED }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    FCL Services
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Own fleet of containers including special equipment for
                    flexible full-container load solutions.
                  </p>
                </div>

                <Link to={getNavLink("/services/fcl")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white"
                    style={{ color: RUBY_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: RUBY_RED }}
                      />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 3. Warehouse Management */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 transition group-hover:bg-white">
                    <Boxes
                      className="w-8 h-8"
                      style={{ color: RUBY_RED }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    Warehouse Management
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Comprehensive facilities for warehousing, cold storage, and
                    specialized commodities.
                  </p>
                </div>

                <Link
                  to={getNavLink("/services/warehouse-management")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white"
                    style={{ color: RUBY_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: RUBY_RED }}
                      />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 4. Project Logistics */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 transition group-hover:bg-white">
                    <Truck
                      className="w-8 h-8"
                      style={{ color: RUBY_RED }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    Project Logistics
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Dedicated division to manage end-to-end project logistics across
                    critical geographies.
                  </p>
                </div>

                <Link
                  to={getNavLink("/services/project-logistics")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white"
                    style={{ color: RUBY_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: RUBY_RED }}
                      />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 5. Air Shipments */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 transition group-hover:bg-white">
                    <Plane
                      className="w-8 h-8"
                      style={{ color: RUBY_RED }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    Air Shipments
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Customized sea–air and air–sea shipment options for
                    time-critical deliveries.
                  </p>
                </div>

                <Link
                  to={getNavLink("/services/air-shipments")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white"
                    style={{ color: RUBY_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: RUBY_RED }}
                      />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 6. Customs Declaration & Insurance */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 transition group-hover:bg-white">
                    <FileText
                      className="w-8 h-8"
                      style={{ color: RUBY_RED }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    Customs Declaration & Insurance
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Complete compliance and documentation support for smooth
                    shipment clearance.
                  </p>
                </div>

                <Link
                  to={getNavLink("/services/customs-declaration")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white"
                    style={{ color: RUBY_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: RUBY_RED }}
                      />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 7. OOG Shipments */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 transition group-hover:bg-white">
                    <Package
                      className="w-8 h-8"
                      style={{ color: RUBY_RED }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    OOG Shipments
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Handling oversized and heavy-lift cargo including lashing and
                    survey coordination.
                  </p>
                </div>

                <Link
                  to={getNavLink("/services/oog-shipments")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white"
                    style={{ color: RUBY_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: RUBY_RED }}
                      />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 8. LCL Consolidation */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 transition group-hover:bg-white">
                    <ClipboardList
                      className="w-8 h-8"
                      style={{ color: RUBY_RED }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    LCL Consolidation
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Combining smaller shipments efficiently into single containers
                    for optimized movement.
                  </p>
                </div>

                <Link
                  to={getNavLink("/services/lcl-consolidation")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white"
                    style={{ color: RUBY_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: RUBY_RED }}
                      />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS / TRUST SECTION */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Why Businesses Trust Haixun Global
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: RUBY_RED }}
                >
                  30+
                </div>
                <div className="text-gray-700 font-medium">
                  Years of Industry Experience
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: RUBY_RED }}
                >
                  Multi-
                </div>
                <div className="text-gray-700 font-medium">
                  Modal Transport Expertise
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: RUBY_RED }}
                >
                  5+
                </div>
                <div className="text-gray-700 font-medium">
                  Key Global Regions Served
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: RUBY_RED }}
                >
                  24/7
                </div>
                <div className="text-gray-700 font-medium">
                  Commitment to Service & Support
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
