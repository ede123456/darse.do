<template>
  <section class="section-shell">
    <div class="container">
      <div class="services-heading">
        <UiSectionHeading
          eyebrow="Servicios"
          title="Modulos pensados para operar mejor desde el primer dia."
          description="DarsePOS combina funciones esenciales y modulos avanzados para emprendedores, pequenos negocios y empresas que necesitan mas control."
        />
      </div>

      <div class="services card-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <div class="icon" v-html="service.icon" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Facturacion electronica',
    description: 'Emite facturas electronicas ilimitadas en los planes que lo incluyen y manten tu operacion mas agil y organizada.',
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16.5Zm8 1.8V8h2.7L14 5.3ZM9 11h6v1.5H9V11Zm0 3.5h6v1.5H9v-1.5Z"/></svg>`
  },
  {
    title: 'Ventas, ingresos e inventario',
    description: 'Controla ventas, productos, clientes e inventario desde un mismo sistema, con procesos simples para el dia a dia.',
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4V5Zm2 2v10h5V7H6Zm7 0v3h5V7h-5Zm0 5v5h5v-5h-5Z"/></svg>`
  },
  {
    title: 'Reportes y modulos avanzados',
    description: 'Consulta reportes financieros y activa modulos como recursos humanos o reservaciones en planes avanzados o personalizados.',
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V9h3v10H5Zm5 0V5h3v14h-3Zm5 0v-7h3v7h-3Z"/></svg>`
  }
]
</script>

<style scoped>
.services { grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: 1040px; margin: 2.5rem auto 0; }
.services-heading { max-width: 760px; }
.service-card { padding: 2rem; border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: rgba(255,255,255,.82); box-shadow: var(--shadow-soft); }
.icon { display: inline-flex; width: 4rem; height: 4rem; align-items: center; justify-content: center; border-radius: 18px; background: linear-gradient(135deg, rgba(93,177,48,.16), rgba(93,177,48,.3)); color: var(--color-green-deep); }
.icon :deep(svg) { width: 1.65rem; fill: currentColor; }
.service-card h3 { margin: 1.4rem 0 .8rem; font-size: 1.3rem; }
.service-card p { margin: 0; color: var(--color-muted); line-height: 1.8; }

@media (min-width: 641px) {
  .services-heading {
    margin-inline: auto;
  }

  .services-heading :deep(.reveal) {
    opacity: 1;
    transform: none;
    text-align: center;
  }

  .services-heading :deep(.section-copy) {
    margin-inline: auto;
  }

  .services {
    text-align: center;
  }

  .icon {
    margin-inline: auto;
  }
}

@media (max-width: 980px) { .services { grid-template-columns: 1fr; } }

@media (max-width: 640px) {
  .services {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
  }

  .service-card {
    padding: 0.85rem;
    border-radius: 16px;
  }

  .service-card:last-child {
    grid-column: 1 / -1;
    max-width: none;
    width: 100%;
    justify-self: stretch;
  }

  .service-card h3 {
    margin: 0.7rem 0 0.45rem;
    font-size: 0.9rem;
    line-height: 1.2;
  }

  .service-card p {
    font-size: 0.72rem;
    line-height: 1.35;
  }

  .icon {
    width: 2.55rem;
    height: 2.55rem;
    border-radius: 12px;
  }

  .icon :deep(svg) {
    width: 1.05rem;
  }
}
</style>
