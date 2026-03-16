"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const neighborhood = String(formData.get("neighborhood") || "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          neighborhood,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No se pudo enviar el formulario.");
      }

      setMessage("Solicitud enviada correctamente.");
      form.reset();

      const whatsappText =
        `Hola, soy ${name}. Ya envié el formulario en la web de Base Cero Inspecciones.` +
        `\nMi teléfono: ${phone}` +
        `\nMi email: ${email}` +
        `\nUbicación del inmueble: ${neighborhood}` +
        `\nQuedo atento para coordinar la inspección.`;

      const whatsappUrl = `https://wa.me/543512647360?text=${encodeURIComponent(whatsappText)}`;

      window.open(whatsappUrl, "_blank");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el formulario."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="name"
        placeholder="Nombre y apellido"
        required
        className="w-full border px-4 py-3 rounded-xl"
      />

      <input
        name="phone"
        placeholder="Teléfono"
        required
        className="w-full border px-4 py-3 rounded-xl"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border px-4 py-3 rounded-xl"
      />

      <input
        name="neighborhood"
        placeholder="Barrio o ubicación del inmueble"
        className="w-full border px-4 py-3 rounded-xl"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-sky-600 text-white px-6 py-3 rounded-xl w-full font-semibold disabled:opacity-70"
      >
        {loading ? "Enviando..." : "Enviar solicitud"}
      </button>

      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}