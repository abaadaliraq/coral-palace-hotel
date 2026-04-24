"use client";

import React from "react";
import { bookingContent } from "@/lib/booking-content";
import emailjs from "@emailjs/browser";

type Props = {
  locale: "ar" | "en" | "ku";
};

export default function RoomBookingForm({ locale }: Props) {
  const t = bookingContent.page;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const message = `Room Booking Request

Name: ${data.get("name")}
Phone: ${data.get("phone")}
Email: ${data.get("email")}

Check-in: ${data.get("checkin")}
Check-out: ${data.get("checkout")}
Guests: ${data.get("guests")}

Notes:
${data.get("notes")}`;

    // WhatsApp
    const waUrl = `https://wa.me/9647700000000?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    // EmailJS
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { message },
        "YOUR_PUBLIC_KEY"
      );
    } catch (err) {
      console.log("EmailJS Error:", err);
    }

    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 md:grid-cols-2 bg-white p-6 md:p-8 rounded-[32px] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      <input name="name" placeholder={t.fields.name[locale]} className="input" />
      <input name="phone" placeholder={t.fields.phone[locale]} className="input" />

      <input name="email" placeholder={t.fields.email[locale]} className="input" />
      <input type="date" name="checkin" className="input" />

      <input type="date" name="checkout" className="input" />
      <input name="guests" placeholder={t.fields.guests[locale]} className="input" />

      <textarea
        name="notes"
        placeholder={t.fields.notes[locale]}
        className="md:col-span-2 rounded-[20px] border border-black/10 px-4 py-3"
      />

      <button className="md:col-span-2 bg-[#c79a5c] text-white py-3 rounded-full">
        {t.submit[locale]}
      </button>
    </form>
  );
}