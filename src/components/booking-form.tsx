"use client";

import { useState } from "react";
import { Locale, getDictionary } from "@/lib/i18n";

const WHATSAPP_NUMBER = "9647700000000";

export default function BookingForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    bookingType: "room",
    preferredContact: "whatsapp",
    virtualTour: "yes",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingTypeLabel =
      form.bookingType === "room"
        ? t.bookingForm.typeRoom
        : t.bookingForm.typeOffice;

    const preferredContactLabel =
      form.preferredContact === "whatsapp"
        ? t.bookingForm.contactWhatsapp
        : form.preferredContact === "phone"
        ? t.bookingForm.contactPhone
        : t.bookingForm.contactEmail;

    const virtualTourLabel =
      form.virtualTour === "yes" ? t.bookingForm.yes : t.bookingForm.no;

    const message = `
${t.bookingForm.title}
-------------------------
${t.bookingForm.fullName}: ${form.fullName}
${t.bookingForm.phone}: ${form.phone}
${t.bookingForm.email}: ${form.email}
${t.bookingForm.checkIn}: ${form.checkIn}
${t.bookingForm.checkOut}: ${form.checkOut}
${t.bookingForm.guests}: ${form.guests}
${t.bookingForm.type}: ${bookingTypeLabel}
${t.bookingForm.preferredContact}: ${preferredContactLabel}
${t.bookingForm.virtualTour}: ${virtualTourLabel}
${t.bookingForm.notes}: ${form.notes}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
    >
      <div>
        <h3 className="text-2xl font-semibold text-white">
          {t.bookingForm.title}
        </h3>
        <p className="mt-2 text-sm text-white/65">{t.bookingForm.subtitle}</p>
      </div>

      <input
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder={t.bookingForm.fullName}
        required
        className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none placeholder:text-white/35"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder={t.bookingForm.phone}
        required
        className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none placeholder:text-white/35"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder={t.bookingForm.email}
        className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none placeholder:text-white/35"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="date"
          name="checkIn"
          value={form.checkIn}
          onChange={handleChange}
          required
          className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none"
        />
        <input
          type="date"
          name="checkOut"
          value={form.checkOut}
          onChange={handleChange}
          required
          className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none"
        />
      </div>

      <input
        type="number"
        min="1"
        name="guests"
        value={form.guests}
        onChange={handleChange}
        placeholder={t.bookingForm.guests}
        className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none placeholder:text-white/35"
      />

      <select
        name="bookingType"
        value={form.bookingType}
        onChange={handleChange}
        className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none"
      >
        <option value="room">{t.bookingForm.typeRoom}</option>
        <option value="office">{t.bookingForm.typeOffice}</option>
      </select>

      <select
        name="preferredContact"
        value={form.preferredContact}
        onChange={handleChange}
        className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none"
      >
        <option value="whatsapp">{t.bookingForm.contactWhatsapp}</option>
        <option value="phone">{t.bookingForm.contactPhone}</option>
        <option value="email">{t.bookingForm.contactEmail}</option>
      </select>

      <select
        name="virtualTour"
        value={form.virtualTour}
        onChange={handleChange}
        className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-white outline-none"
      >
        <option value="yes">{t.bookingForm.yes}</option>
        <option value="no">{t.bookingForm.no}</option>
      </select>

      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder={t.bookingForm.notes}
        rows={5}
        className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-white outline-none placeholder:text-white/35"
      />

      <button
        type="submit"
        className="h-14 rounded-2xl bg-[#c8a46b] font-semibold text-black transition hover:opacity-90"
      >
        {t.bookingForm.submit}
      </button>
    </form>
  );
}