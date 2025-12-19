import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function ContactUsSection() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/helen@haixun.co", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) throw new Error("Submission failed");

      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT COLUMN — FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs md:text-sm font-semibold text-[#9B111E] tracking-[0.2em] uppercase mb-2">
            {t("contact.sendUsMail")}
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            {t("contact.feelFreeToWrite")}
          </h2>

          <p className="text-gray-700 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            {t("contact.logisticsDesc")}
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="New Contact Enquiry - Haixun" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            {/* FIRST / LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="First Name"
                placeholder={t("contact.form.firstName")}
                required
                className="h-12 rounded-none border-0 bg-[#FBF5EE] text-sm"
              />
              <Input
                name="Last Name"
                placeholder={t("contact.form.lastName")}
                required
                className="h-12 rounded-none border-0 bg-[#FBF5EE] text-sm"
              />
            </div>

            {/* EMAIL / PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="Email"
                type="email"
                placeholder={t("contact.form.yourEmail")}
                required
                className="h-12 rounded-none border-0 bg-[#FBF5EE] text-sm"
              />
              <Input
                name="Phone"
                placeholder={t("contact.form.phone")}
                className="h-12 rounded-none border-0 bg-[#FBF5EE] text-sm"
              />
            </div>

            {/* MESSAGE */}
            <Textarea
              name="Message"
              placeholder={t("contact.form.message")}
              rows={5}
              required
              className="rounded-none border-0 bg-[#FBF5EE] text-sm"
            />

            {/* SUBMIT */}
            <Button
              type="submit"
              disabled={formStatus === "loading"}
              className="inline-flex items-center gap-2 rounded-none bg-[#9B111E] px-10 py-6 
              text-sm font-semibold uppercase tracking-wide hover:bg-[#7F0E18]"
            >
              <Send className="w-4 h-4" />
              {formStatus === "loading"
                ? t("contact.form.sending")
                : t("contact.form.send")}
            </Button>

            {/* INLINE STATUS MESSAGE */}
            {formStatus === "success" && (
              <div className="rounded-md bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                {t("contact.success")}
              </div>
            )}

            {formStatus === "error" && (
              <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {t("contact.error")}
              </div>
            )}
          </form>
        </motion.div>

        {/* RIGHT COLUMN — CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xs md:text-sm font-semibold text-[#9B111E] tracking-[0.2em] uppercase">
            {t("contact.needAnyHelp")}
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {t("contact.getInTouchWithUs")}
          </h2>

          <p className="text-gray-700 text-sm md:text-base max-w-xl leading-relaxed">
            {t("contact.logisticsDesc")}
          </p>

          <div className="space-y-6 mt-4">
            <div className="flex items-center gap-4 bg-white rounded-xl shadow-md border border-gray-100 p-5">
              <div className="w-14 h-14 rounded-md bg-[#9B111E] flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {t("contact.haveAnyQuestion")}
                </p>
                <a
                  href="tel:+8675582222447"
                  className="mt-1 block text-gray-900 font-semibold text-sm"
                >
                  +86 75582222447
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl shadow-md border border-gray-100 p-5">
              <div className="w-14 h-14 rounded-md bg-[#9B111E] flex items-center justify-center">
                <Phone className="w-6 h-6 text-white rotate-90" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {t("footer.fax")}
                </p>
                <a
                  href="fax:+8675582192854"
                  className="mt-1 block text-gray-900 font-semibold text-sm"
                >
                  +86 75582192854
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl shadow-md border border-gray-100 p-5">
              <div className="w-14 h-14 rounded-md bg-[#9B111E] flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {t("contact.writeUsEmail")}
                </p>
                <a
                  href="mailto:helen@haixun.co"
                  className="mt-1 block text-gray-900 font-semibold text-sm"
                >
                  helen@haixun.co
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl shadow-md border border-gray-100 p-5">
              <div className="w-14 h-14 rounded-md bg-[#9B111E] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {t("contact.headquarters")}
                </p>
                <p className="mt-1 text-gray-900 text-sm leading-relaxed whitespace-pre-line">
                  {t("footer.shenzhenAddress")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
