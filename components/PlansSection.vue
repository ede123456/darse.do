<template>
  <section id="planes" class="section-shell">
    <div class="container">
      <div class="plans-heading">
        <UiSectionHeading
          eyebrow="Planes"
          title="Planes de suscripcion y opcion personalizada segun tu negocio."
          description="Cada plan esta disenado para brindar una solucion rapida, simple y poderosa, con usuarios, facturacion y soporte ajustados a tu realidad."
        />
      </div>

      <div class="plans card-grid">
        <article v-for="plan in plans" :key="plan.name" class="plan-card" :class="{ featured: plan.featured }">
          <p class="plan-label">{{ plan.label }}</p>
          <h3>{{ plan.name }}</h3>
          <p class="plan-price">{{ plan.price }}<span>/mes</span></p>
          <p class="plan-copy">{{ plan.description }}</p>
          <ul>
            <li v-for="feature in visibleFeatures(plan)" :key="feature">{{ feature }}</li>
          </ul>
          <button
            v-if="plan.features.length > collapsedFeatureCount"
            type="button"
            class="plan-toggle"
            @click="togglePlan(plan.name)"
          >
            {{ isExpanded(plan.name) ? 'Ver menos' : 'Ver mas' }}
          </button>
          <a href="#contacto" class="btn" :class="plan.featured ? 'btn-primary' : 'btn-secondary'">Elegir plan</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const collapsedFeatureCount = 4
const expandedPlans = ref<string[]>([])

const plans = [
  {
    label: 'Ideal para empezar',
    name: 'Emprendedor',
    price: 'USD 16.00',
    description: 'Pensado para pequenos negocios o emprendedores que necesitan ordenar ingresos y ventas.',
    features: ['Registro de ingresos y ventas', '1 usuario', 'Gestion basica de clientes', 'Reportes esenciales', 'Acceso en la nube', 'Soporte basico', 'Entrenamiento remoto'],
    featured: false
  },
  {
    label: 'Mas elegido',
    name: 'Basico',
    price: 'USD 33.75',
    description: 'Para negocios en crecimiento que necesitan mas control y facturacion electronica ilimitada.',
    features: ['Facturacion electronica ilimitada', 'Registro de ingresos y ventas', '2 usuarios', 'Gestion de clientes y productos', 'Control de inventario basico', 'Reportes de ventas y finanzas', 'Acceso en la nube', 'Soporte prioritario', 'Entrenamiento remoto'],
    featured: true
  },
  {
    label: 'Control completo',
    name: 'Pro',
    price: 'USD 67.50',
    description: 'Orientado a empresas que buscan automatizacion, modulos avanzados y una operacion mas robusta.',
    features: ['Facturacion electronica ilimitada', 'Registro de ingresos y ventas', '4 usuarios', 'Gestion avanzada de clientes y productos', 'Control completo de inventario', 'Modulo de ventas POS', 'Reportes financieros avanzados', 'Acceso desde cualquier dispositivo', 'Soporte preferencial', 'Entrenamiento remoto personalizado', 'Incluye recursos humanos', 'Incluye reservaciones'],
    featured: false
  },
  {
    label: 'Hecho a tu medida',
    name: 'Personalizado',
    price: 'A cotizar',
    description: 'Creamos un plan segun la cantidad de usuarios, niveles de facturacion, soporte y funciones que tu empresa realmente necesita.',
    features: ['Cantidad exacta de usuarios', 'Funciones segun operacion real', 'Gestion de ingresos y facturacion', 'Soporte ajustado al negocio', 'Modulos adicionales a solicitud'],
    featured: false
  }
]

const isExpanded = (planName: string) => expandedPlans.value.includes(planName)

const togglePlan = (planName: string) => {
  expandedPlans.value = isExpanded(planName)
    ? expandedPlans.value.filter((item) => item !== planName)
    : [...expandedPlans.value, planName]
}

const visibleFeatures = (plan: { name: string; features: string[] }) => {
  return isExpanded(plan.name) ? plan.features : plan.features.slice(0, collapsedFeatureCount)
}
</script>

<style scoped>
.plans { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 2.5rem; }
.plans-heading { max-width: 760px; }
.plan-card { display: flex; flex-direction: column; padding: 1.7rem; border: 1px solid var(--color-border); border-radius: 26px; background: rgba(255,255,255,.86); box-shadow: var(--shadow-soft); }
.plan-card.featured { background: linear-gradient(180deg, rgba(7,15,4,.98), rgba(24,43,13,.98)); color: var(--color-white); transform: translateY(-.6rem); }
.plan-label { margin: 0; color: var(--color-green); font-size: .9rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.plan-card h3 { margin: .85rem 0 0; font-size: 1.45rem; }
.plan-price { margin: .85rem 0 0; font-family: 'Sora', sans-serif; font-size: 2.15rem; }
.plan-price span { font-size: 1rem; opacity: .72; }
.plan-copy { margin: .85rem 0 1.2rem; opacity: .8; line-height: 1.65; font-size: .97rem; }
.plan-card ul { display: grid; gap: .78rem; padding: 0; margin: 0 0 1.45rem; list-style: none; }
.plan-card li { position: relative; padding-left: 1.45rem; line-height: 1.52; font-size: .95rem; }
.plan-card li::before { content: ''; position: absolute; left: 0; top: .45rem; width: .7rem; height: .7rem; border-radius: 999px; background: var(--color-green); }
.plan-toggle { align-self: flex-start; margin: 0 0 1rem; padding: 0; border: 0; background: transparent; color: inherit; font: inherit; font-size: .9rem; font-weight: 600; opacity: .72; cursor: pointer; transition: opacity .2s ease; }
.plan-toggle:hover { opacity: 1; }
.plan-card .btn { margin-top: auto; }

@media (min-width: 981px) {
  .plans-heading {
    margin-inline: auto;
  }

  .plans-heading :deep(.reveal) {
    opacity: 1;
    transform: none;
    text-align: center;
  }

  .plans-heading :deep(.section-copy) {
    margin-inline: auto;
  }

  .plans {
    max-width: 980px;
    margin-inline: auto;
  }
}

@media (max-width: 1180px) {
  .plans { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 980px) {
  .plans { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .plan-card.featured { transform: none; }
}

@media (max-width: 520px) {
  .plans {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
  }

  .plan-card {
    padding: 0.95rem;
    border-radius: 18px;
  }

  .plan-card h3 {
    margin-top: 0.7rem;
    font-size: 0.98rem;
    line-height: 1.2;
  }

  .plan-price {
    margin-top: 0.6rem;
    font-size: 1.15rem;
  }

  .plan-copy,
  .plan-card li {
    font-size: 0.75rem;
    line-height: 1.35;
  }

  .plan-card ul {
    gap: 0.45rem;
    margin-bottom: 0.8rem;
  }

  .plan-label {
    font-size: 0.62rem;
    letter-spacing: 0.06em;
  }

  .plan-price span {
    font-size: 0.72rem;
  }

  .plan-card li {
    padding-left: 1rem;
  }

  .plan-card li::before {
    top: 0.3rem;
    width: 0.45rem;
    height: 0.45rem;
  }

  .plan-card .btn {
    min-height: 38px;
    padding-inline: 0.85rem;
    border-radius: 999px;
    font-size: 0.76rem;
  }

  .plan-toggle {
    margin-bottom: 0.8rem;
    font-size: 0.76rem;
  }
}
</style>
