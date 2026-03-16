import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  const data = await req.json();

  const { name, email, phone, neighborhood } = data;

  try {

    // Mail para ustedes
    await resend.emails.send({
      from: "Base Cero Inspecciones <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: "Nueva solicitud de inspección",
      html: `
        <h2>Nueva solicitud de inspección</h2>

        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>
        <p><b>Barrio:</b> ${neighborhood}</p>
      `,
    });

    // Mail automático al cliente
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
        Si querés acelerar la coordinación también podés escribirnos por WhatsApp.
        </p>

        <p>
        Saludos,<br>
        <b>Base Cero Inspecciones</b><br>
        Córdoba Capital
        </p>
      `,
    });

    return Response.json({ message: "Solicitud enviada correctamente" });

  } catch (error) {

    console.error(error);

    return Response.json({ message: "Error al enviar el formulario" });

  }

}