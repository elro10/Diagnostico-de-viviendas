import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, phone, neighborhood } = data;

    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      return NextResponse.json(
        { message: "La variable CONTACT_EMAIL no está configurada." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Base Cero Inspecciones <onboarding@resend.dev>",
      to: contactEmail,
      subject: "Nueva solicitud de inspección",
      html: `
        <h2>Nueva solicitud de inspección</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>
        <p><b>Barrio:</b> ${neighborhood}</p>
      `,
    });

    await resend.emails.send({
      from: "Base Cero Inspecciones <onboarding@resend.dev>",
      to: email,
      subject: "Recibimos tu solicitud de inspección",
      html: `
        <h2>Gracias por tu consulta</h2>
        <p>Hola ${name},</p>
        <p>Recibimos tu solicitud para realizar una inspección preventiva de vivienda.</p>
        <p>En breve nos estaremos comunicando para coordinar la visita.</p>
        <p>Saludos,<br><b>Base Cero Inspecciones</b></p>
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