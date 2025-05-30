"use client";
import Header from "@/components/Header";
import Head from "next/head";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] mt-24">
      <Header />
      <Head>
        <title>Contact Me</title>
      </Head>

      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Contact Header */}
        <div className="mb-12 text-center">
          <div className="inline-block border-4 border-black px-8 py-3 mb-6">
            <h1 className="text-lg font-normal tracking-[0.2em] uppercase mb-0">
              CONTACT
            </h1>
          </div>
          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Have an idea? Share your vision with us to create an elegant,
            functional web service to suit your web application needs in 48 hrs.
          </p>

          {/* Decorative element */}
          <div className="flex items-center justify-center mt-4 mb-8">
            <div className="w-8 h-px bg-black"></div>
            <div className="mx-2">
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                className="fill-black"
              >
                <path
                  d="M1 1L8 7L15 1"
                  stroke="black"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            <div className="w-8 h-px bg-black"></div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b-2 border-l-2  border-black focus:border-black focus:outline-none placeholder-gray-500"
              placeholder="ENTER YOUR NAME*"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b-2 border-black focus:border-black focus:outline-none placeholder-gray-500"
              placeholder="ENTER YOUR EMAIL*"
              required
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b-2 border-black focus:border-black focus:outline-none placeholder-gray-500"
              placeholder="PHONE NUMBER"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b-2 border-black focus:border-black focus:outline-none placeholder-gray-500 resize-none h-24"
              placeholder="YOUR MESSAGE*"
              required
            />
          </div>

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="border-2 border-black px-8 py-3 text-sm font-normal tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300"
            >
              SUBMIT
            </button>
          </div>
        </form>

        {status && (
          <div className="mt-6 text-center">
            <p
              className={`text-sm ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
