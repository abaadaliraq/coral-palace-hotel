"use client";

import { useState } from "react";
import type { Locale } from "@/lib/home-content";
import { officesContent } from "@/lib/offices-content";

type Props = {
  locale: Locale;
};

export default function OfficeBookingForm({ locale }: Props) {
  const t = officesContent.page.fields;

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    startDate: "",
    duration: "",
    businessType: "",
    employees: "",
    space: "",
    guests: "",
    notes: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function sendToWhatsApp(e: React.FormEvent) {
    e.preventDefault();

    const hotelWhatsApp = "9647700000000";

    const message = `
Office Booking Request

Full Name: ${form.name}
Company Name: ${form.company}
Email: ${form.email}
Phone: ${form.phone}

Preferred Rental Start Date: ${form.startDate}
Booking / Rental Duration: ${form.duration}

Business / Office Activity: ${form.businessType}
Expected Number of Employees: ${form.employees}
Required Space: ${form.space}

Guests / Clients Reception: ${form.guests}

Additional Notes:
${form.notes}
`;

    const url = `https://wa.me/${hotelWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <form
      onSubmit={sendToWhatsApp}
      className="rounded-[34px] bg-white p-5 shadow-[0_20px_70px_rgba(90,64,28,0.10)] md:p-7"
    >
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3">
        <Field label={t.name[locale]}>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.company[locale]}>
          <input
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.email[locale]}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.phone[locale]}>
          <input
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.startDate[locale]}>
          <input
            required
            type="date"
            value={form.startDate}
            onChange={(e) => update("startDate", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.duration[locale]}>
          <input
            value={form.duration}
            onChange={(e) => update("duration", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.businessType[locale]}>
          <input
            value={form.businessType}
            onChange={(e) => update("businessType", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.employees[locale]}>
          <input
            type="number"
            min="1"
            value={form.employees}
            onChange={(e) => update("employees", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.space[locale]}>
          <input
            value={form.space}
            onChange={(e) => update("space", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t.guests[locale]}>
          <select
            value={form.guests}
            onChange={(e) => update("guests", e.target.value)}
            className={inputClass}
          >
            <option value=""></option>
            <option value="Employees Only">{t.guestsEmployeesOnly[locale]}</option>
            <option value="Clients and Guests">{t.guestsVisitors[locale]}</option>
          </select>
        </Field>

        <div className="md:col-span-2">
          <Field label={t.notes[locale]}>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              className={textareaClass}
            />
          </Field>
        </div>

        <button
          type="submit"
          className="self-end rounded-full bg-[#c79a5c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b88a4f]"
        >
          {t.submit[locale]}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-black/55">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "h-11 w-full rounded-full border border-black/10 bg-[#f8f2e8] px-4 text-sm text-[#18130c] outline-none transition focus:border-[#c79a5c]";

const textareaClass =
  "w-full resize-none rounded-[22px] border border-black/10 bg-[#f8f2e8] px-4 py-3 text-sm text-[#18130c] outline-none transition focus:border-[#c79a5c]";