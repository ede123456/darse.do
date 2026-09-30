<!-- Seccion completa de una app hermana (Salud y Legal): cinco puntos
     numerados y la captura real del producto con el telefono encima.
     Se usa dos veces desde el inicio, cambiando la prop `clave`. -->
<template>
  <section :id="app.clave" class="section-shell hermana-shell" :style="estilo">
    <div class="container">
      <div class="app-hermana reveal">
        <header class="app-cab">
          <span class="app-ico" v-html="app.icono" />
          <div>
            <h2>{{ app.nombre }}</h2>
            <p class="dom">{{ app.dominio }}</p>
          </div>
          <a class="btn cab-btn" href="#contacto">Ver demostracion</a>
        </header>

        <div class="app-cuerpo">
          <ol class="puntos">
            <li v-for="(p, i) in detalle.puntos" :key="p.titulo" class="punto-item">
              <span class="n">{{ i + 1 }}</span>
              <div>
                <b>{{ p.titulo }}</b>
                <p>{{ p.texto }}</p>
              </div>
            </li>
          </ol>

          <div class="galeria">
            <div class="grande">
              <img loading="lazy" decoding="async" :src="detalle.grande" :alt="`${app.nombre} en la computadora`">
            </div>
            <div class="chica">
              <img loading="lazy" decoding="async" :src="detalle.chica" :alt="`${app.nombre} en el telefono`">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ clave: 'salud' | 'legal' }>()

const DETALLE = {
  salud: {
    grande: '/apps/salud-expediente.jpg',
    chica: '/apps/salud-telefono.jpg',
    puntos: [
      { titulo: 'Agenda con sala de espera', texto: 'Quien llego, quien esta en consulta y quien falta, por profesional.' },
      { titulo: 'Recordatorio de cita', texto: 'Correo automatico el dia anterior y WhatsApp con un clic desde la cita.' },
      { titulo: 'Expediente y consulta', texto: 'Antecedentes, alergias y medicamentos a la vista; SOAP por especialidad y CIE-10.' },
      { titulo: 'Receta lista para entregar', texto: 'En carta o media carta, con los datos del profesional y del paciente.' },
      { titulo: 'Se factura en Darse Pro', texto: 'Al cerrar la consulta los servicios pasan a la caja y se factura con e-CF.' }
    ]
  },
  legal: {
    grande: '/apps/legal-conflicto.jpg',
    chica: '/apps/legal-telefono.jpg',
    puntos: [
      { titulo: 'Plazos y audiencias en una sola agenda', texto: 'Con marca de plazo fatal y un correo a cada abogado a las 7:00 de la manana.' },
      { titulo: 'El expediente completo', texto: 'Partes y contrapartes, tribunal, numero judicial, equipo e historial del caso.' },
      { titulo: 'Conflicto de intereses a tiempo', texto: 'El sistema avisa mientras se escribe la contraparte, antes de aceptar el caso.' },
      { titulo: 'Documentos que no quedan sueltos', texto: 'Se abren solo con sesion y cada apertura queda registrada.' },
      { titulo: 'Igualas y cuota litis', texto: 'Se cobran en Darse Pro con comprobante fiscal; el expediente ve el saldo.' }
    ]
  }
} as const

const app = computed(() => buscarApp(props.clave))
const detalle = computed(() => DETALLE[props.clave])
const estilo = computed(() => ({
  '--ac': app.value.color,
  '--ac-suave': app.value.colorSuave,
  '--ac-hondo': app.value.colorHondo
}))
</script>

<style scoped>
.hermana-shell { padding-top: 0.8rem; }

.app-hermana { background: #fff; border-radius: var(--radius-xl); box-shadow: var(--shadow-card); overflow: hidden; }

.app-cab {
  display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;
  padding: 1.8rem 2.1rem; border-bottom: 1px solid var(--color-border);
}
.app-ico { width: 46px; height: 46px; border-radius: 14px; background: var(--ac); display: grid; place-items: center; flex: 0 0 46px; }
.app-ico :deep(svg) { width: 24px; height: 24px; fill: #fff; }
.app-cab h2 { font-family: 'Sora', sans-serif; font-size: 1.6rem; margin: 0; letter-spacing: -0.02em; }
.app-cab .dom { margin: 0.12rem 0 0; font-size: 0.82rem; font-weight: 700; color: var(--ac-hondo); }
.cab-btn { margin-left: auto; background: var(--ac); color: #fff; border-color: transparent; }

.app-cuerpo { display: grid; grid-template-columns: 1fr 1.15fr; gap: 2rem; align-items: center; padding: 1.9rem 2.1rem 2.2rem; }

.puntos { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.95rem; }
.punto-item { display: flex; gap: 0.8rem; }
.punto-item .n {
  width: 26px; height: 26px; border-radius: 9px; background: var(--ac); color: #fff;
  font-size: 0.8rem; font-weight: 700; display: grid; place-items: center; flex: 0 0 26px;
}
.punto-item b { display: block; font-size: 0.96rem; }
.punto-item p { margin: 0.15rem 0 0; font-size: 0.86rem; color: var(--color-muted); line-height: 1.45; }

.galeria { position: relative; }
.galeria .grande { border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border); box-shadow: var(--shadow-soft); }
.galeria .chica {
  position: absolute; right: -14px; bottom: -24px; width: 26%;
  border-radius: 18px; overflow: hidden; border: 5px solid #fff; box-shadow: var(--shadow-soft);
}

@media (max-width: 1000px) {
  .app-cuerpo { grid-template-columns: 1fr; }
}
@media (max-width: 620px) {
  .app-cab, .app-cuerpo { padding: 1.3rem; }
  .cab-btn { margin-left: 0; width: 100%; justify-content: center; }
  .galeria .chica { display: none; }
}
</style>
