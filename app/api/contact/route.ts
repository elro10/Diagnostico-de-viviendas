import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const neighborhood = String(data.neighborhood || "").trim();
    const propertyType = String(data.propertyType || "").trim();
    const reason = String(data.reason || "").trim();
    const details = String(data.details || "").trim();

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

    if (!name || !email || !phone || !neighborhood || !propertyType || !reason) {
      return NextResponse.json(
        { message: "Faltan campos obligatorios del formulario." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Base Cero Inspecciones <contacto@inspeccionesdeviviendas.com.ar>",
      to: contactEmail,
      subject: "Nueva solicitud de inspección",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #1f2937; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">Nueva solicitud de inspección</h2>

          <table style="border-collapse: collapse; width: 100%; max-width: 700px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Nombre y apellido:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Correo electrónico:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Teléfono:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Barrio o ubicación del inmueble:</td>
              <td style="padding: 8px 0;">${neighborhood}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Tipo de vivienda:</td>
              <td style="padding: 8px 0;">${propertyType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Motivo de la consulta:</td>
              <td style="padding: 8px 0;">${reason}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Mensaje:</td>
              <td style="padding: 8px 0;">${details || "No informado"}</td>
            </tr>
          </table>
        </div>
      `,
    });

    await resend.emails.send({
      from: "Base Cero Inspecciones <contacto@inspeccionesdeviviendas.com.ar>",
      to: email,
      subject: "Confirmación de recepción de su consulta",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #1f2937; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">Confirmación de recepción</h2>

          <p>Estimado/a ${name},</p>

          <p>
            Le confirmamos que hemos recibido correctamente su solicitud de inspección preventiva de vivienda.
          </p>

          <p>
            A continuación, le detallamos la información registrada:
          </p>

          <ul>
            <li><strong>Barrio o ubicación del inmueble:</strong> ${neighborhood}</li>
            <li><strong>Tipo de vivienda:</strong> ${propertyType}</li>
            <li><strong>Motivo de la consulta:</strong> ${reason}</li>
            <li><strong>Teléfono informado:</strong> ${phone}</li>
          </ul>

          <p>
            En caso de que necesitemos ampliar o completar algún dato, nos estaremos comunicando al número que usted indicó en el formulario.
          </p>

          <p>
            Nuestro informe técnico puede incluir, según corresponda:
          </p>

          <ul>
            <li>Registro fotográfico</li>
            <li>Hallazgos por ambiente</li>
            <li>Observaciones prioritarias</li>
            <li>Conclusión general</li>
          </ul>

          <p>
            Muchas gracias por contactarse con nosotros.
          </p>

          <p>
            Saludos cordiales,<br />
            <strong>Base Cero Inspecciones</strong><br />
            Córdoba Capital
          </p>
        </div>
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