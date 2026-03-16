import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = [
      'fullName',
      'phone',
      'email',
      'neighborhood',
      'propertyType',
      'reason',
    ];

    for (const field of requiredFields) {
      if (!body[field] || typeof body[field] !== 'string') {
        return NextResponse.json(
          { message: `El campo ${field} es obligatorio.` },
          { status: 400 }
        );
      }
    }

    console.log('Nueva solicitud de inspección:', body);

    return NextResponse.json(
      {
        message:
          'Solicitud recibida correctamente. Configurá este endpoint para enviar correo, guardar en base de datos o conectar con WhatsApp.',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: 'No se pudo procesar la solicitud.' },
      { status: 500 }
    );
  }
}