import { ContactForm } from '@/components/contact-form';
import { SectionTitle } from '@/components/section-title';

const services = [
  'Humedad',
  'Nivelación y desniveles',
  'Instalación eléctrica básica',
  'Pérdidas o fugas',
  'Estado general de muros, cielorrasos, pisos y aberturas',
  'Artefactos o enchufes',
  'Observaciones constructivas y funcionales',
];

const tools = [
  'Medidor de humedad',
  'Nivel láser',
  'Detector de fugas de gas',
  'Cámara termográfica',
  'Distanciómetro',
  'Probador de enchufes',
  'Inspección visual profesional',
];

const deliverables = [
  'Informe en PDF',
  'Registro fotográfico',
  'Hallazgos por ambiente',
  'Observaciones prioritarias',
  'Conclusión general',
];

const audiences = [
  'Comprador de vivienda',
  'Inquilino antes de mudarse',
  'Propietario al cierre del contrato',
  'Vendedor que quiere dejar asentado el estado del inmueble y evitar posibles futuros reclamos',
  'Inmobiliarias o estudios',
];

const team = ['Arq. Ignacio Casas', 'Ing. Federico Fada Py', 'MMO. Rodrigo Orellano'];

const trustPoints = [
  'Informe claro',
  'Tecnología de inspección',
  'Equipo técnico interdisciplinario',
];

const frequentCases = [
  'Manchas de humedad antes de alquilar o comprar',
  'Dudas sobre el estado real de un departamento usado',
  'Control del inmueble al cierre de contrato',
  'Revisión preventiva para vendedores',
];

const propertyTypes = ['Casas', 'Departamentos', 'Dúplex'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Base Cero Inspecciones
            </p>
            <h1 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Antes de comprar o alquilar, sabé realmente en qué estado está la vivienda.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Diagnóstico técnico profesional con herramientas de inspección avanzada.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Inspeccionamos viviendas, casas y departamentos para detectar humedad, fugas, fallas eléctricas básicas, desniveles y otros problemas que muchas veces no se ven a simple vista.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Un informe técnico a tiempo puede ayudarte a negociar mejor, evitar gastos inesperados y reducir futuros reclamos entre partes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#solicitar"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
              >
                Solicitar inspección
              </a>
              <a
                href="https://wa.me/543512647360"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Consultar por WhatsApp
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Contacto principal</p>
                <p className="mt-1 text-sm text-slate-600">Formulario de solicitud de inspecciones</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
                <p className="mt-1 text-sm text-slate-600">+54 351 2647360</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 p-5 shadow-2xl sm:p-6">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-slate-100 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-300">Inspección preventiva</span>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    Informe técnico
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    'Relevamiento por ambiente',
                    'Detección de humedad y pérdidas',
                    'Chequeo visual y funcional',
                    'Registro fotográfico',
                    'Conclusión general del inmueble',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-white">Ideal para:</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    compra, alquiler, cierre de contrato, venta y verificación previa para reducir riesgos y reclamos.
                  </p>
                </div>
                <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-4">
                  <p className="text-sm font-semibold text-white">Foto recomendada</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Reemplazar este bloque por una imagen real del equipo usando cámara termográfica, medidor de humedad o nivel láser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-center shadow-sm">
                <p className="text-sm font-semibold text-slate-900 sm:text-base">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <SectionTitle
            eyebrow="¿Para quién es útil?"
            title="Una inspección preventiva sirve antes de tomar decisiones importantes."
            description="Ayuda a detectar problemas, dejar constancia del estado del inmueble y contar con información técnica clara antes de comprar, alquilar, entregar, vender o recibir una propiedad."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {audiences.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-2xl bg-sky-100" />
                <p className="text-base font-semibold leading-7 text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Qué revisamos"
                title="Evaluación técnica del estado visible y funcional de la vivienda."
                description="El servicio está pensado para brindar una mirada profesional, clara y ordenada sobre los puntos que más suelen generar dudas, gastos o reclamos posteriores."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-4 h-11 w-11 rounded-2xl bg-slate-100" />
                  <h3 className="text-base font-semibold leading-7 text-slate-900">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Herramientas</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900">Tecnología utilizada</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Combinamos inspección visual profesional con instrumentos de medición para obtener información más precisa y útil al momento de evaluar un inmueble.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Entrega</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900">Qué recibe el cliente</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Cada inspección finaliza con una entrega ordenada y fácil de entender para que el cliente pueda tomar decisiones con mayor seguridad.
              </p>
              <ul className="mt-6 space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Vista previa recomendada</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Reemplazar este bloque por una mini captura real o maqueta del informe PDF para aumentar la confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Equipo técnico</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Profesionales que integran Base Cero Inspecciones
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {team.map((member) => (
                  <div key={member} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-4 h-14 w-14 rounded-2xl bg-slate-200" />
                    <p className="text-base font-semibold text-slate-900">{member}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Zona de trabajo</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight">Córdoba Capital y zonas aledañas</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Realizamos inspecciones de viviendas, casas y departamentos en Córdoba Capital y sectores cercanos según disponibilidad y tipo de inmueble.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-5">
                  <p className="text-sm font-semibold text-white">Tipo de propiedades</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{propertyTypes.join(', ')}.</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-5">
                  <p className="text-sm font-semibold text-white">Duración estimada</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Entre 1 y 2 horas según tamaño, accesibilidad y complejidad del inmueble.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <SectionTitle
            eyebrow="Cómo funciona"
            title="Un proceso claro, breve y fácil de coordinar."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: '1. Solicitud inicial',
                text: 'Completás el formulario o hacés una consulta por WhatsApp con los datos básicos del inmueble.',
              },
              {
                title: '2. Coordinación de visita',
                text: 'Se define fecha, tipo de propiedad, alcance de la inspección y condiciones de acceso.',
              },
              {
                title: '3. Inspección e informe',
                text: 'Realizamos el relevamiento técnico y luego entregamos el informe en PDF con hallazgos y observaciones prioritarias.',
              },
            ].map((step) => (
              <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-5 inline-flex rounded-2xl bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-800">
                  {step.title}
                </div>
                <p className="text-base leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Casos frecuentes</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Situaciones en las que este servicio suele ser útil
              </h2>
              <div className="mt-6 space-y-3">
                {frequentCases.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Qué no hacemos</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Una aclaración que genera confianza
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                La inspección no reemplaza ensayos destructivos, certificaciones específicas de instalaciones ni pericias judiciales. El objetivo es brindar una evaluación técnica visible, instrumental y funcional del inmueble al momento de la visita.
              </p>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-700">
                  Esta aclaración mejora la credibilidad del servicio, ordena expectativas y reduce malos entendidos con el cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:px-6 md:px-8 lg:flex-row lg:text-left">
          <div>
            <p className="text-lg font-semibold text-slate-900">
              Ideal para operaciones de compra, alquiler, entrega o recepción de inmuebles.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Si querés una evaluación previa, podés pedir la inspección ahora mismo.
            </p>
          </div>
          <a
            href="#solicitar"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Solicitar inspección
          </a>
        </div>
      </section>

      <section id="solicitar" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-slate-900 p-8 text-white sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Solicitar inspección</p>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight">Pedí una evaluación técnica de la vivienda</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Completá el formulario con los datos básicos del inmueble y del servicio que necesitás. Si preferís, también podés hacer una consulta inicial por WhatsApp.
                </p>

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950/40 p-5">
                  <p className="text-sm font-semibold text-white">WhatsApp secundario</p>
                  <a
                    href="https://wa.me/543512647360"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-base font-medium text-sky-300 hover:text-sky-200"
                  >
                    +54 351 2647360
                  </a>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}