<template>
  <section id="seguimiento-pedidos" class="section-shell tracking-shell">
    <div class="container">
      <div class="tracking-layout">
        <div class="tracking-copy">
          <UiSectionHeading
            eyebrow="Seguimiento de pedidos"
            title="Controla en tiempo real todo el proceso de pedidos y produccion."
            description="Desde la solicitud hasta la entrega, el sistema organiza cada pedido, lo distribuye por area y mantiene a tu equipo sincronizado sin procesos manuales."
          />

          <div class="tracking-highlight reveal">
            <strong>Beneficio clave</strong>
            <p>
              Optimiza tu operacion, reduce errores y mejora la velocidad de atencion con un sistema
              que coordina todo por ti.
            </p>
          </div>

          <div class="tracking-benefits">
            <article v-for="benefit in benefits" :key="benefit.title" class="tracking-card reveal">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </article>
          </div>
        </div>

        <div class="tracking-visual reveal">
          <div class="tracking-panel">
            <img src="/seguimiento-pedidos.png" alt="Modulo de seguimiento de pedidos con estados y areas de produccion">
            <div class="tracking-note note-status">
              <strong>Estados en tiempo real</strong>
              <span>Pendiente, proceso, listo y despachado con total visibilidad</span>
            </div>

            <div class="tracking-note note-areas">
              <strong>Por areas de produccion</strong>
              <span>Cocina, bar, servicios y preparacion especifica</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    title: 'Gestion inteligente de pedidos',
    description: 'Registra pedidos automaticamente desde el sistema con integracion directa a ventas y facturacion para un flujo continuo.'
  },
  {
    title: 'Organizacion por areas',
    description: 'Cada pedido se divide segun su area de preparacion, como cocina, bar, servicios o produccion especifica.'
  },
  {
    title: 'Estados claros del pedido',
    description: 'Monitorea cada solicitud con estados visibles como pendiente, en proceso, listo y despachado.'
  },
  {
    title: 'Notificaciones automaticas',
    description: 'Envía avisos al POS para meseros o empleados y notifica cuando un pedido esta listo para avanzar mas rapido.'
  },
  {
    title: 'Ideal para negocios dinamicos',
    description: 'Funciona muy bien para restaurantes, cafeterias, negocios con produccion interna y empresas de servicios.'
  },
  {
    title: 'Integracion completa',
    description: 'Conectado con el sistema de facturacion para convertir pedidos en facturas y mantener un flujo operativo sin interrupciones.'
  }
]
</script>

<style scoped>
.tracking-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.98fr) minmax(0, 1.02fr);
  gap: 2rem;
  align-items: start;
}

.tracking-highlight {
  margin-top: 1.6rem;
  padding: 1.4rem 1.5rem;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(93, 177, 48, 0.12), rgba(93, 177, 48, 0.04));
  border: 1px solid rgba(93, 177, 48, 0.2);
}

.tracking-highlight strong {
  display: block;
  margin-bottom: 0.45rem;
  font-size: 0.95rem;
  color: var(--color-green-deep);
}

.tracking-highlight p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.8;
}

.tracking-benefits {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.8rem;
}

.tracking-card {
  padding: 1.35rem;
  border: 1px solid var(--color-border);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-soft);
  height: 100%;
}

.tracking-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
}

.tracking-card p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.7;
  font-size: 0.95rem;
}

.tracking-visual { position: relative; }

.tracking-panel {
  position: relative;
  overflow: hidden;
}

.tracking-panel img {
  width: 100%;
  display: block;
}

.tracking-note {
  position: absolute;
  max-width: 220px;
  padding: 0.95rem 1rem;
  border-radius: 20px;
  background: rgba(7, 16, 4, 0.95);
  color: var(--color-white);
  box-shadow: var(--shadow-card);
}

.tracking-note strong,
.tracking-note span {
  display: block;
}

.tracking-note strong {
  font-size: 0.95rem;
}

.tracking-note span {
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.72);
}

.note-status {
  top: 2.6rem;
  right: 0;
}

.note-areas {
  left: 0;
  bottom: 6rem;
}

@media (max-width: 1180px) {
  .tracking-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .tracking-note {
    position: absolute;
    max-width: 165px;
    padding: 0.72rem 0.8rem;
    border-radius: 16px;
  }

  .tracking-note strong {
    font-size: 0.78rem;
  }

  .tracking-note span {
    margin-top: 0.2rem;
    font-size: 0.68rem;
    line-height: 1.2;
  }

  .note-status {
    top: 0;
    right: 0;
  }

  .note-areas {
    left: 0;
    bottom: 0.8rem;
  }
}

@media (max-width: 520px) {
  .tracking-benefits {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: stretch;
  }

  .tracking-card {
    padding: 0.9rem;
    border-radius: 18px;
  }

  .tracking-card h3 {
    font-size: 0.92rem;
  }

  .tracking-card p {
    font-size: 0.86rem;
    line-height: 1.5;
  }
}
</style>
