"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      setStatus("Sending…");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus(json.ok ? "Thanks! I’ll get back soon." : json.message || "Failed");
      if (json.ok) form.reset();
    } catch (e) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section id="contact">
      <div className="glass rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-zinc-300 text-sm">Available for Full-time, Freelance, Contract · Asia/Kolkata</p>
        <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="rounded-xl border bg-transparent p-3" name="name" placeholder="Your name" required />
          <input className="rounded-xl border bg-transparent p-3" name="email" placeholder="Email" type="email" required />
          <input className="rounded-xl border bg-transparent p-3 sm:col-span-2" name="subject" placeholder="Subject" />
          <textarea className="rounded-xl border bg-transparent p-3 sm:col-span-2" name="message" placeholder="Message" rows={4} required />
          <div className="sm:col-span-2 flex items-center justify-between">
            <button className="rounded-full bg-[--color-primary] text-black px-5 py-2 text-sm font-semibold hover:opacity-90">Send</button>
            {status && <p className="text-sm text-zinc-400">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
