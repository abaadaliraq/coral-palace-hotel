"use client";

import { bookingContent } from "@/lib/booking-content";

type Props = {
  locale: "ar" | "en" | "ku";
};

export default function RoomBookingForm({ locale }: Props) {
  const t = bookingContent.page;
  const f = t.fields;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(t.pendingContact[locale]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-10"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="label">{f.name[locale]}</label>
          <input name="name" className="input" />
        </div>

        <div>
          <label className="label">{f.phone[locale]}</label>
          <input name="phone" className="input" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="label">{f.email[locale]}</label>
          <input name="email" className="input" />
        </div>

        <div>
          <label className="label">{f.guests[locale]}</label>
          <input type="number" name="guests" className="input" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="label">{f.checkin[locale]}</label>
          <input type="date" name="checkin" className="input" />
        </div>

        <div>
          <label className="label">{f.checkout[locale]}</label>
          <input type="date" name="checkout" className="input" />
        </div>
      </div>

      <div>
        <label className="label">{f.notes[locale]}</label>
        <textarea name="notes" rows={4} className="input !rounded-[20px]" />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[#123B6D] py-3 text-sm font-semibold text-white transition hover:bg-[#0B2747]"
      >
        {t.submit[locale]}
      </button>
    </form>
  );
}
