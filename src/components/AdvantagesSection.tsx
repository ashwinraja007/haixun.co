import { motion } from "framer-motion";
import { Truck, Ship, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";

export default function AdvantagesSection() {
  const { t } = useTranslation();
  
  const advantages = [
    {
      icon: Truck,
      titleKey: "advantages.transportation.title",
      descriptionKey: "advantages.transportation.description",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    },
    {
      icon: Ship,
      titleKey: "advantages.logistics.title",
      descriptionKey: "advantages.logistics.description",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
    },
    {
      icon: Users,
      titleKey: "advantages.team.title",
      descriptionKey: "advantages.team.description",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* SECTION TITLE */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#9B111E] mb-4">
            {t("advantages.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </ScrollAnimation>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <ScrollAnimation key={index} delay={index * 120}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-none shadow-lg hover:shadow-2xl 
                             transition-all duration-300 overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={advantage.image}
                      alt={t(advantage.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* CONTENT WITH BORDER */}
                  <div className="relative border-l-4 border-[#003F48] pl-8 pr-8 pt-8 pb-20">
                    <h3 className="text-2xl font-bold text-[#003F48] mb-4">
                      {t(advantage.titleKey)}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {t(advantage.descriptionKey)}
                    </p>
                    <button className="text-[#003F48] font-semibold text-sm flex items-center gap-2 
                                     hover:gap-3 transition-all duration-300">
                      Read More <span className="text-lg">→</span>
                    </button>
                  </div>

                  {/* ICON BOX - BOTTOM RIGHT */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#003F48] 
                                  flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
