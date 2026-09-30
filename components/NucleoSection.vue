<!-- El nucleo: lo que traen las cinco apps. Va despues de los rubros a
     proposito, para desarmar el miedo a estar comprando cinco sistemas. -->
<template>
  <section id="nucleo" class="section-shell nucleo-shell">
    <div class="container">
      <div class="reveal">
        <p class="eyebrow">El mismo motor debajo</p>
        <h2>Cinco apps distintas, un solo sistema.</h2>
        <p class="nucleo-lead">
          Cambia lo que ve cada negocio en pantalla, no la base. Por eso el contador ve una sola
          contabilidad, la DGII recibe un solo emisor y tu pagas una sola suscripcion.
        </p>
      </div>

      <div class="nucleo card-grid">
        <article v-for="b in bloques" :key="b.titulo" class="n-card reveal">
          <span class="ico" v-html="b.icono" />
          <b>{{ b.titulo }}</b>
          <p>{{ b.texto }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const bloques = [
  {
    titulo: 'Facturacion electronica',
    texto: 'e-CF y NCF con la DGII, notas de credito y debito, y el envio automatico.',
    icono: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6V3Zm8 1.5V8h3.5L14 4.5ZM8 11h8v1.6H8V11Zm0 4h8v1.6H8V15Z"/></svg>'
  },
  {
    titulo: 'Inventario y compras',
    texto: 'Existencias por almacen, costo real, conduces y ordenes de compra.',
    icono: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4V5Zm2 2v10h5V7H6Zm7 0v3h5V7h-5Zm0 5v5h5v-5h-5Z"/></svg>'
  },
  {
    titulo: 'Cobros y bancos',
    texto: 'Cuentas por cobrar y pagar, planes de pago, conciliacion y caja chica.',
    icono: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v4H3V6Zm0 6h18v6H3v-6Zm3 2v2h6v-2H6Z"/></svg>'
  },
  {
    titulo: 'Reportes y equipo',
    texto: 'Ventas, utilidad, comisiones, nomina, asistencia y metas del equipo.',
    icono: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V9h3v10H5Zm5 0V5h3v14h-3Zm5 0v-7h3v7h-3Z"/></svg>'
  }
]
</script>

<style scoped>
.nucleo-shell { padding-top: 0.8rem; }
.nucleo-shell h2 { font-family: 'Sora', sans-serif; font-size: 1.85rem; max-width: 22ch; margin: 0; letter-spacing: -0.02em; }
.nucleo-lead { color: var(--color-muted); line-height: 1.6; max-width: 64ch; margin: 0.8rem 0 0; }

.nucleo { grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 1.8rem; }
.n-card { background: #fff; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.25rem; }
.n-card .ico { width: 38px; height: 38px; border-radius: 12px; background: var(--color-green-soft); display: grid; place-items: center; margin-bottom: 0.65rem; }
.n-card .ico :deep(svg) { width: 19px; height: 19px; fill: var(--color-green-deep); }
.n-card b { font-size: 0.94rem; }
.n-card p { margin: 0.28rem 0 0; font-size: 0.83rem; color: var(--color-muted); line-height: 1.45; }

@media (max-width: 1000px) { .nucleo { grid-template-columns: 1fr 1fr; } }
@media (max-width: 620px) { .nucleo { grid-template-columns: 1fr; } }
</style>
