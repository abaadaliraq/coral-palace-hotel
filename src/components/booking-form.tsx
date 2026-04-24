"use client";

import { useState } from "react";
import { bookingContent } from "@/lib/booking-content";

type Locale = "ar" | "en" | "ku";

const WHATSAPP_NUMBER = "9647700000000";

export default function BookingForm({ locale }: { locale: Locale }) {
  const t = bookingContent.page;
  const f = t.fields;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
Booking Request

${f.name[locale]}: ${form.name}
${f.phone[locale]}: ${form.phone}
${f.email[locale]}: ${form.email}

${f.checkin[locale]}: ${form.checkin}
${f.checkout[locale]}: ${form.checkout}
${f.guests[locale]}: ${form.guests}

${f.notes[locale]}:
${form.notes}
`.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label">{f.name[locale]}</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div>
          <label className="label">{f.phone[locale]}</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div>
          <label className="label">{f.email[locale]}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="label">{f.guests[locale]}</label>
          <input
            type="number"
            min="1"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="label">{f.checkin[locale]}</label>
          <input
            type="date"
            name="checkin"
            value={form.checkin}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div>
          <label className="label">{f.checkout[locale]}</label>
          <input
            type="date"
            name="checkout"
            value={form.checkout}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="label">{f.notes[locale]}</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            className="input !rounded-[20px]"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 w-full rounded-full bg-[#c79a5c] py-3 text-sm font-semibold text-white transition hover:bg-[#b88a4f]"
        >
          {t.submit[locale]}
        </button>
      </div>
    </form>
  );
}