<template>
  <section id="catalogo-digital" class="section-shell catalog-shell">
    <div class="container">
      <div class="catalog-layout">
        <div class="catalog-copy">
          <UiSectionHeading
            eyebrow="Catalogo digital"
            title="Un catalogo inteligente integrado con tu sistema de facturacion."
            description="Disena una experiencia de compra moderna que no solo muestra tus productos, sino que tambien impulsa las ventas y mantiene la informacion siempre sincronizada."
          />

          <div class="catalog-intro reveal">
            <p>
              Personaliza banners, imagenes y estilos para reflejar tu marca, organiza tus productos por categorias
              y permite que tus clientes pidan directamente por WhatsApp con total de compra visible en tiempo real.
            </p>
          </div>

          <div class="benefits">
            <article
              v-for="benefit in benefits"
              :key="benefit.title"
              class="benefit-card reveal"
              :class="benefit.className"
            >
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </article>
          </div>
        </div>

        <div class="catalog-showcase reveal">
          <div class="catalog-visual">
            <div class="visual-panel visual-panel-featured">
              <img src="/catalogo/catalogo-phone-1.png" alt="Catalogo digital con ofertas, categorias y productos">
            </div>
            <div class="visual-panel visual-panel-secondary">
              <img src="/catalogo/catalogo-phone-2.png" alt="Catalogo digital personalizado por categorias">
            </div>
          </div>
          <div class="catalog-notes">
            <div class="floating-note">
              <strong>Precios sincronizados</strong>
              <span>Con inventario y POS en tiempo real</span>
            </div>
            <div class="floating-note">
              <strong>Pedidos por WhatsApp</strong>
              <span>Mas rapido, directo y sin friccion</span>
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
    title: 'Personalizacion profesional',
    description: 'Crea un catalogo visualmente atractivo con banners, imagenes y estilos alineados a la identidad de tu marca.',
    className: 'benefit-brand'
  },
  {
    title: 'Pedidos directos por WhatsApp',
    description: 'Tus clientes seleccionan productos y envian su pedido automaticamente, mejorando la conversion y la rapidez de atencion.',
    className: 'benefit-whatsapp'
  },
  {
    title: 'Ofertas, categorias y buscador',
    description: 'Configura promociones inteligentes, organiza por categorias y facilita la busqueda para una experiencia de compra mas fluida.',
    className: 'benefit-offers'
  },
  {
    title: 'Carrito con total de compra',
    description: 'El cliente ve el total mientras arma su pedido, lo que ayuda a decidir mejor y aumenta el ticket promedio.',
    className: 'benefit-cart'
  },
  {
    title: 'Precios siempre actualizados',
    description: 'La informacion se sincroniza con inventario y punto de venta para evitar errores y mantener total consistencia.',
    className: 'benefit-prices'
  }
]
</script>

<style scoped>
.catalog-shell {
  position: relative;
}

.catalog-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 2rem;
  align-items: start;
}

.catalog-intro {
  margin-top: 1.5rem;
  max-width: 640px;
}

.catalog-intro p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.85;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.benefit-card {
  padding: 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-soft);
  height: 100%;
}

.benefit-card h3 {
  margin: 0 0 0.65rem;
  font-size: 1.05rem;
}

.benefit-card p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.7;
  font-size: 0.96rem;
}

@media (min-width: 1181px) {
  .benefit-brand { grid-column: 1; grid-row: 1; }
  .benefit-whatsapp { grid-column: 2; grid-row: 1; }
  .benefit-offers { grid-column: 1; grid-row: 2; }
  .benefit-cart { grid-column: 2; grid-row: 2; }
  .benefit-prices { grid-column: 1 / -1; grid-row: 3; }
}

.catalog-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 0.1rem 0;
  overflow: hidden;
}

.catalog-showcase {
  position: relative;
  display: grid;
  gap: 0;
  align-items: start;
}

.catalog-notes {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.visual-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.visual-panel img {
  width: 138%;
  height: auto;
  object-fit: contain;
  display: block;
  max-width: none;
}

.visual-panel-featured {
  width: min(64%, 660px);
  flex: 0 1 auto;
  margin-right: -2.4rem;
  position: relative;
  z-index: 2;
}

.visual-panel-secondary {
  width: min(64%, 660px);
  flex: 0 1 auto;
  margin-left: -2.4rem;
}

.visual-panel-featured img {
  transform: translateX(8%);
}

.visual-panel-secondary img {
  transform: translateX(-8%);
}

.floating-note {
  position: absolute;
  padding: 1rem 1.05rem;
  max-width: 220px;
  border-radius: 20px;
  background: rgba(7, 16, 4, 0.95);
  color: var(--color-white);
  box-shadow: var(--shadow-card);
  pointer-events: auto;
}

.floating-note strong,
.floating-note span {
  display: block;
}

.floating-note strong {
  font-size: 0.95rem;
}

.floating-note span {
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.72);
}

.catalog-notes .floating-note:first-child {
  top: -1.4rem;
  right: -0.2rem;
}

.catalog-notes .floating-note:last-child {
  left: -0.2rem;
  bottom: -1.4rem;
}

@media (max-width: 1180px) {
  .catalog-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .catalog-showcase {
    gap: 0;
  }

  .catalog-visual {
    gap: 0;
  }

  .catalog-notes .floating-note:first-child {
    top: -0.9rem;
    right: 0.15rem;
  }

  .catalog-notes .floating-note:last-child {
    left: 0.15rem;
    bottom: -0.9rem;
  }
}

@media (max-width: 520px) {
  .catalog-visual {
    gap: 0;
    justify-content: center;
    padding: 0.55rem 0 0.7rem;
  }

  .visual-panel-featured,
  .visual-panel-secondary {
    width: 68%;
  }

  .visual-panel-featured {
    margin-right: -1.95rem;
  }

  .visual-panel-secondary {
    margin-left: -1.95rem;
  }

  .visual-panel img {
    width: 132%;
  }

  .visual-panel-featured img {
    transform: translateX(6%);
  }

  .visual-panel-secondary img {
    transform: translateX(-6%);
  }

  .floating-note {
    padding: 0.68rem 0.78rem;
    max-width: 138px;
    border-radius: 15px;
    background: rgba(7, 16, 4, 0.92);
  }

  .floating-note strong {
    font-size: 0.72rem;
    line-height: 1.15;
  }

  .floating-note span {
    margin-top: 0.22rem;
    font-size: 0.62rem;
    line-height: 1.2;
  }

  .catalog-notes .floating-note:first-child {
    top: -0.82rem;
    right: 0.6rem;
  }

  .catalog-notes .floating-note:last-child {
    left: 0.6rem;
    bottom: 0.15rem;
  }

  .benefits {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: stretch;
  }

  .benefit-card {
    padding: 0.9rem;
    border-radius: 18px;
  }

  .benefit-card h3 {
    font-size: 0.92rem;
  }

  .benefit-card p {
    font-size: 0.86rem;
    line-height: 1.5;
  }

  .benefit-prices {
    grid-column: 1 / -1;
    padding: 1.4rem;
    border-radius: 24px;
  }

  .benefit-prices h3 {
    font-size: 1.05rem;
  }

  .benefit-prices p {
    font-size: 0.96rem;
    line-height: 1.7;
  }
}
</style>
