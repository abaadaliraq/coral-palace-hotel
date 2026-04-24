"use client";

import { bookingRoomContent } from "@/lib/booking-room-content";

type Props = {
  locale: "ar" | "en" | "ku";
};

export default function RoomBookingForm({ locale }: Props) {
  const t = bookingRoomContent.page;
  const f = t.fields;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const message = `
🏨 Room Booking

👤 ${data.get("name")}
📞 ${data.get("phone")}
📧 ${data.get("email")}

📅 ${data.get("checkin")} → ${data.get("checkout")}
👥 ${data.get("guests")}

📝 ${data.get("notes")}
`;

    const url = `https://wa.me/9647700000000?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[32px] p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] space-y-6"
    >
      {/* ROW 1 */}
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

      {/* ROW 2 */}
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

      {/* ROW 3 */}
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

      {/* NOTES */}
      <div>
        <label className="label">{f.notes[locale]}</label>
        <textarea
          name="notes"
          rows={4}
          className="input !rounded-[20px]"
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full rounded-full bg-[#c79a5c] py-3 text-white text-sm font-semibold hover:bg-[#b88a4f] transition"
      >
        {f.submit[locale]}
      </button>
    </form>
  );
}