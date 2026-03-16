import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const neighborhood = data.neighborhood;

    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      console.error("CONTACT_EMAIL no está configurado");
      return NextResponse.json(
        { message: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurado");
      return NextResponse.json(
        { message: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    // MAIL PARA USTEDES
    await resend.emails.send({
      from: "Base Cero Inspecciones <onboarding@resend.dev>",
      to: contactEmail,
      subject: "Nueva solicitud de inspección",
      html: `
        <h2>Nueva solicitud de inspección</h2>

        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>
        <p><b>Barrio del inmueble:</b> ${neighborhood}</p>
      `,
    });

    // MAIL AUTOMÁTICO AL CLIENTE
    await resend.emails.send({
      from: "Base Cero Inspecciones <onboarding@resend.dev>",
      to: email,
      subject: "Recibimos tu solicitud de inspección",
      html: `
        <h2>Gracias por tu consulta</h2>

        <p>Hola ${name},</p>

        <p>
        Recibimos tu solicitud para realizar una inspección preventiva de vivienda.
        </p>

        <p>
        En breve nos estaremos comunicando para coordinar la visita.
        </p>

        <p>
        El informe técnico incluye:
        </p>

        <ul>
          <li>Registro fotográfico</li>
          <li>Hallazgos por ambiente</li>
          <li>Observaciones prioritarias</li>
          <li>Conclusión general</li>
        </ul>

        <p>
        Si querés coordinar más rápido también podés escribirnos por WhatsApp.
        </p>

        <p>
        Saludos,<br/>
        <b>Base Cero Inspecciones</b><br/>
        Córdoba Capital
        </p>
      `,
    });

    return NextResponse.json({
      message: "Solicitud enviada correctamente",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error al enviar el formulario." },
      { status: 500 }
    );
  }
}