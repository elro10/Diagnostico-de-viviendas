'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.get('fullName'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          neighborhood: formData.get('neighborhood'),
          propertyType: formData.get('propertyType'),
          reason: formData.get('reason'),
          details: formData.get('details'),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'No se pudo enviar la solicitud.');
      }

      setStatus('success');
      setMessage('Solicitud enviada correctamente. Te contactaremos a la brevedad.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error ? error.message : 'Ocurrió un error al enviar la solicitud.'
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Nombre y apellido</label>
        <input
          name="fullName"
          type="text"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Teléfono</label>
        <input
          name="phone"
          type="tel"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
          placeholder="Tu número"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Correo electrónico</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
          placeholder="tunombre@email.com"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Barrio o ubicación del inmueble</label>
        <input
          name="neighborhood"
          type="text"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
          placeholder="Ej. General Paz, Nueva Córdoba, Villa Belgrano"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Tipo de inmueble</label>
        <select
          name="propertyType"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
          defaultValue=""
        >
          <option value="" disabled>
            Seleccionar
          </option>
          <option>Casa</option>
          <option>Departamento</option>
          <option>Dúplex</option>
          <option>Otro</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Motivo de la consulta</label>
        <select
          name="reason"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
          defaultValue=""
        >
          <option value="" disabled>
            Seleccionar
          </option>
          <option>Compra</option>
          <option>Alquiler</option>
          <option>Cierre de contrato</option>
          <option>Venta</option>
          <option>Consulta general</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Mensaje</label>
        <textarea
          name="details"
          rows={4}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
          placeholder="Contanos ubicación, tipo de inmueble y qué querés revisar"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
      </button>

      {message ? (
        <p
          className={`text-sm ${
            status === 'success' ? 'text-emerald-600' : status === 'error' ? 'text-red-600' : 'text-slate-600'
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
