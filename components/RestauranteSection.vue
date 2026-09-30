<!-- Darse Pro Restaurante. El texto y las imagenes salen del brochure
     "Tu restaurante mas simple, mas contable" (Disenos darse pro): las
     capturas van dentro de su equipo, igual que en lo impreso. -->
<template>
  <section id="restaurante" class="section-shell resto-shell">
    <div class="container">
      <div class="resto reveal">
        <header class="resto-cab">
          <span class="app-ico" v-html="app.icono" />
          <div>
            <p class="eyebrow resto-eyebrow">{{ app.nombre }}</p>
            <h2>Tu restaurante mas simple, mas contable.</h2>
          </div>
        </header>

        <p class="resto-lead">
          Que un pedido no se convierta en un problema: mesero, cocina, bar y caja trabajando
          con la misma orden, y la contabilidad saliendo sola.
        </p>

        <ul class="pilares">
          <li v-for="p in pilares" :key="p">{{ p }}</li>
        </ul>

        <!-- Una sola orden que recorre todo el servicio -->
        <div class="bloque">
          <div>
            <h3>Conecta tu mesero con cocina, bar y caja en una sola orden y comanda</h3>
            <p class="bloque-txt">
              El mesero toma la orden en su telefono, la comanda sale impresa en cocina y en barra,
              y la cuenta ya esta armada cuando el cliente pide la factura. Todo desde el mismo
              equipo que ya tienes: telefono, tablet, laptop y la impresora del area.
            </p>
          </div>
          <figure class="panel panel-ancho">
            <img loading="lazy" decoding="async" src="/apps/restaurante/escena-servicio.webp" alt="Telefono del mesero, punto de venta en laptop, monitor de pedidos en tablet e impresoras de comanda">
          </figure>
        </div>

        <!-- Lo que ve la cocina -->
        <div class="bloque invertido">
          <figure class="panel">
            <img loading="lazy" decoding="async" src="/apps/restaurante/comandas-produccion.webp" alt="Solicitud a Produccion con las comandas por mesa y delivery en una tablet">
          </figure>
          <div>
            <h3>La cocina ve la comanda en pantalla, no un papel perdido</h3>
            <p class="bloque-txt">
              Cada comanda con su mesa o su delivery, y el estado a la vista: pendiente, en proceso,
              listo y despachado. El mesero sabe cuando recoger sin ir a preguntar.
            </p>
            <ul class="puntos">
              <li>Filtra por area: cocina, bar o parrilla.</li>
              <li>El monitor de pedidos muestra cuanto lleva cada mesa.</li>
              <li>Reservaciones de mesas, de forma simple.</li>
            </ul>
          </div>
        </div>

        <!-- Menu digital -->
        <div class="bloque">
          <div>
            <h3>Menu digital con codigo QR en tus mesas</h3>
            <p class="bloque-txt">
              El cliente escanea el codigo de la mesa y ve tu carta con fotos, precios del dia y lo
              que de verdad hay disponible. Sin imprimir menus cada vez que cambias un precio.
            </p>
            <ul class="puntos">
              <li>Tu carta por categorias, con foto y precio.</li>
              <li>El cliente pide desde la mesa o para llevar.</li>
              <li>El pedido entra al mismo sistema y se factura ahi.</li>
            </ul>
          </div>
          <figure class="panel panel-tel">
            <img loading="lazy" decoding="async" src="/apps/restaurante/menu-digital.webp" alt="Menu digital del restaurante en el telefono del cliente">
          </figure>
        </div>

        <!-- Los puntos del brochure -->
        <dl class="tira">
          <div v-for="d in detalles" :key="d.titulo">
            <dt>{{ d.titulo }}</dt>
            <dd>{{ d.texto }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const app = buscarApp('restaurante')

const pilares = ['Facturacion', 'Pedidos', 'Comandas', 'Punto de venta']

const detalles = [
  { titulo: 'Facturas multimonedas', texto: 'Dolar, euro y mas.' },
  { titulo: 'Comandas a bar y cocina', texto: 'Todo con una misma orden.' },
  { titulo: 'Reservaciones de mesas', texto: 'De forma simple.' },
  { titulo: 'Reportes y contabilidad', texto: 'Toma decisiones inteligentes.' },
  { titulo: 'Facturacion electronica', texto: 'Cumple con la DGII.' }
]
</script>

<style scoped>
.resto-shell { padding-top: 0.8rem; }

.resto {
  position: relative; overflow: hidden; color: #fff; background: #12100c;
  border-radius: var(--radius-xl); padding: 2.3rem;
}
.resto::after {
  content: ''; position: absolute; inset: auto -90px -160px auto; width: 380px; height: 380px;
  border-radius: 50%; background: radial-gradient(circle, rgba(232, 89, 12, .35), transparent 65%);
}

.resto-cab { display: flex; gap: 1rem; align-items: center; position: relative; z-index: 2; }
.app-ico { width: 46px; height: 46px; border-radius: 14px; background: #e8590c; display: grid; place-items: center; flex: 0 0 46px; }
.app-ico :deep(svg) { width: 24px; height: 24px; fill: #fff; }
.resto-eyebrow { color: #ffb182; margin: 0 0 0.25rem; }
.resto h2 { font-family: 'Sora', sans-serif; font-size: 1.9rem; margin: 0; letter-spacing: -0.02em; max-width: 20ch; }
.resto-lead { position: relative; z-index: 2; color: rgba(255, 255, 255, .75); line-height: 1.6; margin: 0.9rem 0 0; max-width: 64ch; }

.pilares { position: relative; z-index: 2; display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; padding: 0; margin: 1.1rem 0 0; }
.pilares li {
  font-size: 0.8rem; font-weight: 700; border-radius: 999px; padding: 0.35rem 0.8rem;
  background: rgba(232, 89, 12, .18); color: #ffb182; border: 1px solid rgba(232, 89, 12, .35);
}

.bloque { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1.1fr; gap: 2.1rem; align-items: center; margin-top: 2.4rem; }
.bloque.invertido { grid-template-columns: 1.1fr 1fr; }
.resto h3 { font-family: 'Sora', sans-serif; font-size: 1.3rem; line-height: 1.25; margin: 0; }
.bloque-txt { color: rgba(255, 255, 255, .72); line-height: 1.55; margin: 0.7rem 0 0; font-size: 0.93rem; }

.puntos { list-style: none; padding: 0; margin: 1rem 0 0; display: grid; gap: 0.45rem; }
.puntos li { position: relative; padding-left: 1.1rem; font-size: 0.86rem; color: rgba(255, 255, 255, .72); line-height: 1.45; }
.puntos li::before { content: ''; position: absolute; left: 0; top: 0.5rem; width: 6px; height: 6px; border-radius: 50%; background: #e8590c; }

/* Las capturas vienen con fondo blanco del brochure: la hoja blanca las continua sin costura */
.panel { margin: 0; background: #fff; border-radius: var(--radius-lg); padding: 0.55rem; box-shadow: 0 18px 40px rgba(0, 0, 0, .35); }
.panel img { width: 100%; display: block; border-radius: calc(var(--radius-lg) - 8px); }
.panel-tel { justify-self: center; max-width: 250px; }

.tira { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin: 2.6rem 0 0; padding-top: 1.6rem; border-top: 1px solid rgba(255, 255, 255, .14); }
.tira dt { font-size: 0.9rem; font-weight: 700; }
.tira dd { margin: 0.2rem 0 0; font-size: 0.8rem; color: rgba(255, 255, 255, .6); line-height: 1.4; }

@media (max-width: 1000px) {
  .bloque, .bloque.invertido { grid-template-columns: 1fr; }
  .bloque.invertido figure { order: 2; }
  .tira { grid-template-columns: 1fr 1fr 1fr; gap: 1.1rem; }
}
@media (max-width: 620px) {
  .resto { padding: 1.4rem; }
  .resto h2 { font-size: 1.5rem; }
  .resto h3 { font-size: 1.15rem; }
  .tira { grid-template-columns: 1fr 1fr; }
  .panel-tel { max-width: 220px; }
}
</style>
