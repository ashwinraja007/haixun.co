import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  XCircle,
  Phone,
  Mail,
  MapPin,
  Truck,
  Headset,
  User,
  MessageCircle,
} from "lucide-react";

const BRAND_RED = "#BC0018";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/helen@haixun.co",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Failed");

      setFormStatus("success");
      form.reset();
      setSelectedLocation("");

      setTimeout(() => setFormStatus("idle"), 4000);
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navigation />
      <div className="h-20 md:h-24 bg-white" />

      {/* MAP */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-white">
        <iframe
          title="Haixun Global Shenzhen Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.9747126781313!2d114.11695999999999!3d22.54262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f5bf0884ff7b%3A0xda2e416692e764e2!2sZhaoxin%20Huijin%20Plaza!5e0!3m2!1sen!2sin!4v1764335462682!5m2!1sen!2sin"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </section>

      {/* SUCCESS / ERROR TOAST */}
      <AnimatePresence>
        {formStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-4 z-50 flex items-center gap-3 rounded-xl bg-emerald-600 px-4 py-3 text-white shadow-xl"
          >
            <Send className="h-4 w-4" />
            <span>{t("contact.messageSent")}</span>
            <button onClick={() => setFormStatus("idle")}>
              <XCircle className="h-4 w-4" />
            </button>
          </motion.div>
        )}

        {formStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-4 z-50 flex items-center gap-3 rounded-xl bg-red-600 px-4 py-3 text-white shadow-xl"
          >
            <XCircle className="h-4 w-4" />
            <span>{t("contact.error")}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <section
          className="py-8 md:py-16 bg-cover bg-center"
          style={{ backgroundImage: "url('/about-bg.webp')" }}
        >
          <div className="container mx-auto px-4">
            <div className="relative bg-white/90 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-10">

                {/* FORM */}
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("contact.feelFreeToWrite")}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* FormSubmit config */}
                    <input type="hidden" name="_subject" value="New Contact Enquiry - Haixun" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="Location" value={selectedLocation} />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="First Name" required placeholder={t("contact.form.firstName")} />
                      <Input name="Last Name" placeholder={t("contact.form.lastName")} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="Email" type="email" required placeholder={t("contact.form.email")} />
                      <Input name="Phone" placeholder={t("contact.form.phone")} />
                    </div>

                    <Textarea
                      name="Message"
                      required
                      placeholder={t("contact.form.message")}
                      className="min-h-[120px]"
                    />

                    <Button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="bg-[#E0001B] hover:bg-[#c30017]"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {formStatus === "loading"
                        ? t("contact.form.sending")
                        : t("contact.form.send")}
                    </Button>
                  </form>
                </div>

                {/* CONTACT INFO */}
                <div className="p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="text-[#E0001B]" />
                    <span>+86 75582222447</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="text-[#E0001B]" />
                    <span>helen@haixun.co</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="text-[#E0001B]" />
                    <span>
                      13C02, Block A, Zhaoxin Huijin Plaza, Shenzhen
                    </span>
                  </div>
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

export default Contact;
