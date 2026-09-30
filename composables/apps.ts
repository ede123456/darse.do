// Las cinco versiones de Darse Pro, una por rubro. Es la fuente unica: la
// usan el selector del inicio, el menu y cada seccion de rubro, de modo que
// el color y el nombre no se repitan a mano en cada componente.

export interface AppRubro {
  clave: string
  nombre: string
  para: string
  resumen: string
  titular: string
  dominio?: string
  ancla: string
  color: string
  colorSuave: string
  colorHondo: string
  icono: string
  modulos: string[]
  puntos: string[]
  imagen: string
  imagenAlt: string
}

const ICONOS = {
  restaurante: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v8a3 3 0 0 0 2 2.83V22h2V12.83A3 3 0 0 0 13 10V2h-2v7H9V2H7Zm10 0c-1.7 1-3 3.2-3 6v5h2v9h2V2h-1Z"/></svg>',
  comercio: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16l-1 5H5L4 4Zm1 7h14v9H5v-9Zm4 2v5h6v-5H9Z"/></svg>',
  salud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.4-7-9.6A4.4 4.4 0 0 1 12 8a4.4 4.4 0 0 1 7 3.4C19 16.6 12 21 12 21Z"/></svg>',
  legal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 2h2v3h7v2h-2.2l2.9 6.4A3.8 3.8 0 0 1 17 17a3.8 3.8 0 0 1-3.7-3.6L16.2 7H13v12h4v2H7v-2h4V7H7.8l2.9 6.4A3.8 3.8 0 0 1 7 17a3.8 3.8 0 0 1-3.7-3.6L6.2 7H4V5h7V2Z"/></svg>',
  servicios: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 7-4-4-3 3 4 4 3-3ZM3 17.2 12.6 7.6l3.8 3.8L6.8 21H3v-3.8Z"/></svg>'
}

export const APPS: AppRubro[] = [
  {
    clave: 'restaurante',
    nombre: 'Darse Pro Restaurante',
    para: 'Restaurantes, cafeterias y bares',
    resumen: 'Mesas, comandas y delivery',
    titular: 'Que un pedido no se convierta en un problema.',
    ancla: '#restaurante',
    color: '#e8590c',
    colorSuave: '#fdefe6',
    colorHondo: '#a8400a',
    icono: ICONOS.restaurante,
    modulos: ['Punto de venta', 'Comandas', 'Pedidos', 'Menu digital', 'Facturacion'],
    puntos: [
      'Conecta tu mesero con cocina, bar y caja en una sola orden y comanda.',
      'Menu digital con codigo QR en tus mesas, con fotos y precios del dia.',
      'Facturas multimoneda y facturacion electronica que cumple con la DGII.'
    ],
    imagen: '/apps/restaurante/pos-restaurante.webp',
    imagenAlt: 'Punto de venta de restaurante con la carta en pantalla'
  },
  {
    clave: 'comercio',
    nombre: 'Darse Pro Comercio',
    para: 'Tiendas, colmados, farmacias y almacenes',
    resumen: 'Tienda, colmado y almacen',
    titular: 'Vende rapido en el mostrador y sepa que le queda.',
    ancla: '#comercio',
    color: '#5db130',
    colorSuave: '#eef7e8',
    colorHondo: '#417c22',
    icono: ICONOS.comercio,
    modulos: ['POS con lector', 'Inventario', 'Multi-almacen', 'Catalogo web', 'Cupones'],
    puntos: [
      'Codigo de barra, presentaciones y listas de precio por cliente.',
      'Turno de caja que cuadra el efectivo al cerrar el dia.',
      'Catalogo publico con tu dominio y pedidos en linea.'
    ],
    imagen: '/hero-design/hero-tablet-new.webp',
    imagenAlt: 'Punto de venta en tablet'
  },
  {
    clave: 'salud',
    nombre: 'Darse Pro Salud',
    para: 'Clinicas y consultorios',
    resumen: 'Clinicas y consultorios',
    titular: 'La consulta completa, del saludo a la factura.',
    dominio: 'salud.darse.do',
    ancla: '#salud',
    color: '#0d6efd',
    colorSuave: '#e7f0ff',
    colorHondo: '#0b5ed7',
    icono: ICONOS.salud,
    modulos: ['Agenda', 'Sala de espera', 'Expediente', 'Receta', 'CIE-10'],
    puntos: [
      'Agenda por profesional, con sala de espera y recordatorio al paciente.',
      'Expediente con alergias y medicamentos a la vista en cada consulta.',
      'Receta en PDF y documentos clinicos protegidos.'
    ],
    imagen: '/apps/salud-hoy.jpg',
    imagenAlt: 'Panel del dia en Darse Pro Salud'
  },
  {
    clave: 'legal',
    nombre: 'Darse Pro Legal',
    para: 'Bufetes de abogados',
    resumen: 'Bufetes de abogados',
    titular: 'Que no se venza un plazo ni se pierda una audiencia.',
    dominio: 'legal.darse.do',
    ancla: '#legal',
    color: '#6f42c1',
    colorSuave: '#f0eaff',
    colorHondo: '#59359a',
    icono: ICONOS.legal,
    modulos: ['Expedientes', 'Plazos fatales', 'Audiencias', 'Conflictos', 'Igualas'],
    puntos: [
      'Agenda judicial con marca de plazo fatal y correo a las 7:00 a. m.',
      'Aviso de conflicto de intereses antes de aceptar el caso.',
      'Documentos privados con registro de cada apertura.'
    ],
    imagen: '/apps/legal-hoy.jpg',
    imagenAlt: 'Panel del dia en Darse Pro Legal'
  },
  {
    clave: 'servicios',
    nombre: 'Darse Pro Servicios',
    para: 'Talleres, contratistas, rutas y distribucion',
    resumen: 'Talleres, rutas y distribucion',
    titular: 'Cotiza, entrega y cobra sin perder el hilo.',
    ancla: '#servicios',
    color: '#0f8b8d',
    colorSuave: '#e4f4f4',
    colorHondo: '#0a6a6c',
    icono: ICONOS.servicios,
    modulos: ['Cotizaciones', 'Ordenes de trabajo', 'Conduces', 'Rutas', 'Comisiones'],
    puntos: [
      'De la cotizacion a la factura sin volver a digitar nada.',
      'Tablero en vivo por ruta y chofer: quien va en proceso y quien ya esta listo.',
      'La comision del vendedor se liquida y se paga como egreso.'
    ],
    imagen: '/apps/servicios-seguimiento.jpg',
    imagenAlt: 'Seguimiento de pedidos por ruta'
  }
]

export const usarApps = () => APPS
export const buscarApp = (clave: string) => APPS.find((a) => a.clave === clave) as AppRubro
