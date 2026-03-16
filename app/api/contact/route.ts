import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  const name = data.name || "No informado";
  const email = data.email;
  const phone = data.phone;
  const neighborhood = data.neighborhood;

  const contactEmail = process.env.CONTACT_EMAIL as string;

  // mail que te llega a vos
  await resend.emails.send({
    from: "Base Cero Inspecciones <contacto@inspeccionesdeviviendas.com.ar>",
    to: contactEmail,
    subject: "Nueva solicitud de inspección",
    html: `
      <h2>Nueva solicitud de inspección</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Barrio del inmueble:</strong> ${neighborhood}</p>
    `,
  });

  // mail de confirmación al cliente
  await resend.emails.send({
    from: "Base Cero Inspecciones <contacto@inspeccionesdeviviendas.com.ar>",
    to: email,
    subject: "Recibimos tu consulta",
    html: `
      <h2>Gracias por contactarte</h2>
      <p>Recibimos tu solicitud de inspección de vivienda.</p>
      <p>Nos comunicaremos con vos a la brevedad.</p>
      <p>Base Cero Inspecciones</p>
    `,
  });

  return Response.json({ success: true });
}