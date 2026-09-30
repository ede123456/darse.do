<!-- Las cinco apps por rubro + la ficha de la elegida. Es la seccion que
     ordena la pagina: el visitante se reconoce aqui y de aqui baja a la
     seccion completa de su rubro. Los datos salen de composables/apps.ts -->
<template>
  <section id="rubros" class="section-shell familia-shell">
    <div class="container">
      <div class="familia reveal">
        <button
          v-for="app in apps"
          :key="app.clave"
          type="button"
          class="app-card"
          :class="{ on: elegida === app.clave }"
          :style="estilo(app)"
          @click="elegir(app.clave)"
        >
          <span class="app-ico" v-html="app.icono" />
          <b>{{ app.nombre.replace('Darse Pro ', 'Darse Pro\n') }}</b>
          <small>{{ app.resumen }}</small>
          <span class="ver">Ver la app &rarr;</span>
        </button>
      </div>

      <article v-if="app" class="ficha reveal" :style="estilo(app)">
        <header class="ficha-cab">
          <span class="app-ico" v-html="app.icono" />
          <div>
            <h2>{{ app.nombre }}</h2>
            <p class="dom">
              <template v-if="app.dominio">{{ app.dominio }} &middot; </template>{{ app.para }}
            </p>
          </div>
          <a class="btn ficha-btn" :href="app.ancla">Ver la app completa</a>
        </header>

        <div class="ficha-grid">
          <div>
            <h3>{{ app.titular }}</h3>
            <div class="mod">
              <span v-for="m in app.modulos" :key="m">{{ m }}</span>
            </div>
            <ul>
              <li v-for="p in app.puntos" :key="p">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 17.5-5-5 1.4-1.4 3.6 3.6 8.1-8.1L19 8Z" /></svg>
                {{ p }}
              </li>
            </ul>
            <p class="incluye">
              Incluye ademas el <strong>nucleo de Darse Pro</strong>: facturacion e-CF, inventario, cobros y reportes.
            </p>
          </div>
          <div class="shot">
            <img loading="lazy" decoding="async" :src="app.imagen" :alt="app.imagenAlt">
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const apps = usarApps()
const elegida = ref(apps[0].clave)
const app = computed(() => buscarApp(elegida.value))

const estilo = (a: typeof apps[number]) => ({
  '--ac': a.color,
  '--ac-suave': a.colorSuave,
  '--ac-hondo': a.colorHondo
})

const elegir = (clave: string) => {
  elegida.value = clave
}
</script>

<style scoped>
.familia-shell { padding-top: 1rem; }

.familia { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.9rem; }

.app-card {
  display: flex; flex-direction: column; gap: 0.5rem; text-align: left; cursor: pointer;
  background: #fff; border: 1px solid var(--color-border); border-radius: var(--radius-lg);
  padding: 1.15rem 1rem 1.25rem; font: inherit; transition: transform .2s ease, box-shadow .2s ease;
}
.app-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-card); }
.app-card.on { border-color: transparent; box-shadow: 0 0 0 2px var(--ac) inset, var(--shadow-card); }
.app-card b { font-family: 'Sora', sans-serif; font-size: 0.95rem; line-height: 1.2; white-space: pre-line; }
.app-card small { color: var(--color-muted); font-size: 0.79rem; line-height: 1.35; }
.app-card .ver { margin-top: auto; font-size: 0.78rem; font-weight: 700; color: var(--ac); }

.app-ico {
  width: 46px; height: 46px; border-radius: 14px; background: var(--ac);
  display: grid; place-items: center; flex: 0 0 46px;
}
.app-ico :deep(svg) { width: 24px; height: 24px; fill: #fff; }

.ficha {
  display: block; background: #fff; border-radius: var(--radius-xl); box-shadow: var(--shadow-card);
  padding: 1.8rem; margin-top: 1.1rem;
}
.ficha-cab { display: flex; gap: 0.9rem; align-items: center; flex-wrap: wrap; }
.ficha-cab .app-ico { width: 52px; height: 52px; border-radius: 16px; flex-basis: 52px; }
.ficha-cab h2 { font-family: 'Sora', sans-serif; font-size: 1.5rem; margin: 0; letter-spacing: -0.02em; }
.ficha-cab .dom { font-size: 0.8rem; font-weight: 700; color: var(--ac); margin: 0.1rem 0 0; }
.ficha-btn { margin-left: auto; background: var(--ac); color: #fff; border-color: transparent; }

.ficha-grid { display: grid; grid-template-columns: 1fr 1.02fr; gap: 2rem; align-items: center; margin-top: 1.4rem; }
.ficha h3 { font-family: 'Sora', sans-serif; font-size: 1.32rem; line-height: 1.2; margin: 0; }

.mod { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.9rem; }
.mod span {
  font-size: 0.77rem; font-weight: 600; border-radius: 999px; padding: 0.32rem 0.68rem;
  background: var(--ac-suave); color: var(--ac-hondo);
}

.ficha ul { list-style: none; padding: 0; margin: 1rem 0 0; display: grid; gap: 0.5rem; }
.ficha li { display: flex; gap: 0.6rem; font-size: 0.93rem; line-height: 1.45; color: #2c322a; }
.ficha li svg { width: 17px; height: 17px; flex: 0 0 17px; margin-top: 0.18rem; fill: var(--ac); }

.incluye {
  margin: 1.2rem 0 0; padding-top: 1rem; border-top: 1px dashed var(--color-border);
  font-size: 0.84rem; color: var(--color-muted);
}
.incluye strong { color: var(--color-text); }

.shot {
  border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card); background: #fff;
}
.shot img { width: 100%; max-height: 420px; object-fit: contain; background: #fff; }

@media (max-width: 1000px) {
  .familia { grid-template-columns: repeat(3, 1fr); }
  .ficha-grid { grid-template-columns: 1fr; }
}
@media (max-width: 620px) {
  .familia { grid-template-columns: 1fr 1fr; }
  .ficha { padding: 1.2rem; }
  .ficha-btn { margin-left: 0; width: 100%; justify-content: center; }
}
</style>
