// Datos del comercio usados en el footer y en las páginas legales.
// Fuente única de verdad: edita aquí y se actualiza en todo el sitio.
export const useEmpresa = () => ({
  // Identidad legal del comercio
  razonSocial: 'Darse, S. R. L.',
  rnc: '131614124',

  // Dirección física PERMANENTE (requisito del banco)
  direccion: 'Calle Mellaa #29B',
  ciudad: 'Sánchez, Samaná',
  pais: 'República Dominicana',

  // Servicio al cliente
  email: 'info@darse.do',
  telefono: '829-470-8000',
  telefonoIntl: '+1 829 470 8000',
  whatsapp: 'https://wa.me/18294708000',
  horario: 'Lunes a viernes, 9:00 a.m. – 6:00 p.m. (hora de RD)',

  // Moneda (requisito del banco: debe representarse en RD$ / DOP)
  moneda: 'RD$ (DOP)',
  monedaNombre: 'Pesos dominicanos (DOP)',
  tasaUsd: 60, // tasa USD→RD$ usada para mostrar los precios de los planes

  // Pagos
  procesador: 'CardNet, Azul (Banco Popular), Banreservas y BHD',

  // Plazos de la política de reembolsos
  diasReembolso: 7,
  diasAcreditacion: '5 a 10 días hábiles',
})
