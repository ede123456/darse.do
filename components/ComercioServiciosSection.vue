<!-- Comercio y Servicios en tarjetas gemelas: son los dos rubros que hoy no
     tienen una seccion larga propia, pero si identidad y captura. -->
<template>
  <section class="section-shell duo-shell">
    <div class="container">
      <div class="duo">
        <div v-for="d in tarjetas" :key="d.clave" :id="d.clave" class="duo-slot">
          <article class="duo-card reveal" :style="estilo(d.clave)">
            <header class="duo-cab">
              <span class="app-ico" v-html="app(d.clave).icono" />
              <div>
                <h3>{{ app(d.clave).nombre }}</h3>
                <p class="dom">{{ app(d.clave).para }}</p>
              </div>
            </header>

            <p class="txt">{{ d.texto }}</p>

            <div class="mod">
              <span v-for="m in app(d.clave).modulos" :key="m">{{ m }}</span>
            </div>

            <div class="foto">
              <img loading="lazy" decoding="async" :src="d.imagen" :alt="d.alt">
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const app = (clave: string) => buscarApp(clave)

const tarjetas = [
  {
    clave: 'comercio',
    texto:
      'El mostrador manda: lector de codigo, presentaciones, listas de precio y un turno de caja que cuadra el efectivo. Con catalogo publico y pedidos en linea cuando quieras vender fuera del local.',
    imagen: '/hero-design/hero-tablet-new.webp',
    alt: 'Punto de venta'
  },
  {
    clave: 'servicios',
    texto:
      'Cotiza, programa el trabajo o la ruta, entrega con conduce y cobra. El cliente sigue su pedido por un enlace y el repartidor liquida su comision al final del dia.',
    imagen: '/apps/servicios-cotizacion.jpg',
    alt: 'Cotizacion'
  }
]

const estilo = (clave: string) => {
  const a = buscarApp(clave)
  return { '--ac': a.color, '--ac-suave': a.colorSuave, '--ac-hondo': a.colorHondo }
}
</script>

<style scoped>
.duo-shell { padding-top: 0.8rem; }
.duo { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
.duo-slot { display: flex; }
.duo-card { flex: 1; }

.duo-card {
  display: flex; flex-direction: column; background: #fff;
  border-radius: var(--radius-xl); box-shadow: var(--shadow-card); overflow: hidden;
}
.duo-cab { display: flex; gap: 0.8rem; align-items: center; padding: 1.4rem 1.5rem 1rem; }
.app-ico { width: 42px; height: 42px; border-radius: 13px; background: var(--ac); display: grid; place-items: center; flex: 0 0 42px; }
.app-ico :deep(svg) { width: 22px; height: 22px; fill: #fff; }
.duo-cab h3 { font-family: 'Sora', sans-serif; font-size: 1.2rem; margin: 0; letter-spacing: -0.02em; }
.duo-cab .dom { margin: 0.1rem 0 0; font-size: 0.76rem; font-weight: 700; color: var(--ac); }

.txt { margin: 0; padding: 0 1.5rem; color: var(--color-muted); font-size: 0.9rem; line-height: 1.5; }

.mod { display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0 1.5rem; margin-top: 0.9rem; }
.mod span {
  font-size: 0.77rem; font-weight: 600; border-radius: 999px; padding: 0.32rem 0.68rem;
  background: var(--ac-suave); color: var(--ac-hondo);
}

.foto { margin-top: 1.2rem; border-top: 1px solid var(--color-border); background: #f7faf5; }
.foto img { width: 100%; max-height: 240px; object-fit: contain; padding: 1rem; }

@media (max-width: 1000px) {
  .duo { grid-template-columns: 1fr; }
}
</style>
