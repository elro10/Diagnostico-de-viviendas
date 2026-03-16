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

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      neighborhood: String(formData.get("neighborhood") || ""),
      propertyType: String(formData.get("propertyType") || ""),
      reason: String(formData.get("reason") || ""),
      details: String(formData.get("details") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No se pudo enviar el formulario.");
      }

      setMessage("Solicitud enviada correctamente. Revisá tu correo para confirmar la recepción.");
      form.reset();
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
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Nombre y apellido
        </label>
        <input
          name="name"
          type="text"
          placeholder="Tu nombre y apellido"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Teléfono
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="Tu número"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Correo electrónico
        </label>
        <input
          name="email"
          type="email"
          placeholder="tunombre@email.com"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Barrio o ubicación del inmueble
        </label>
        <input
          name="neighborhood"
          type="text"
          placeholder="Ej. General Paz, Nueva Córdoba, Villa Belgrano"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Tipo de vivienda
        </label>
        <select
          name="propertyType"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        >
          <option value="" disabled>
            Seleccionar
          </option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Dúplex">Dúplex</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Motivo de la consulta
        </label>
        <select
          name="reason"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        >
          <option value="" disabled>
            Seleccionar
          </option>
          <option value="Compra">Compra</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Cierre de contrato">Cierre de contrato</option>
          <option value="Venta">Venta</option>
          <option value="Consulta general">Consulta general</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Mensaje
        </label>
        <textarea
          name="details"
          rows={4}
          placeholder="Contanos ubicación, tipo de inmueble y qué querés revisar"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Enviando..." : "Enviar solicitud"}
      </button>

      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}"use client";

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

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      neighborhood: String(formData.get("neighborhood") || ""),
      propertyType: String(formData.get("propertyType") || ""),
      reason: String(formData.get("reason") || ""),
      details: String(formData.get("details") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No se pudo enviar el formulario.");
      }

      setMessage("Solicitud enviada correctamente. Revisá tu correo para confirmar la recepción.");
      form.reset();
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
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Nombre y apellido
        </label>
        <input
          name="name"
          type="text"
          placeholder="Tu nombre y apellido"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Teléfono
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="Tu número"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Correo electrónico
        </label>
        <input
          name="email"
          type="email"
          placeholder="tunombre@email.com"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Barrio o ubicación del inmueble
        </label>
        <input
          name="neighborhood"
          type="text"
          placeholder="Ej. General Paz, Nueva Córdoba, Villa Belgrano"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Tipo de vivienda
        </label>
        <select
          name="propertyType"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        >
          <option value="" disabled>
            Seleccionar
          </option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Dúplex">Dúplex</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Motivo de la consulta
        </label>
        <select
          name="reason"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        >
          <option value="" disabled>
            Seleccionar
          </option>
          <option value="Compra">Compra</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Cierre de contrato">Cierre de contrato</option>
          <option value="Venta">Venta</option>
          <option value="Consulta general">Consulta general</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Mensaje
        </label>
        <textarea
          name="details"
          rows={4}
          placeholder="Contanos ubicación, tipo de inmueble y qué querés revisar"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Enviando..." : "Enviar solicitud"}
      </button>

      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}