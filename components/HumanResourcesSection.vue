<template>
  <section id="rrhh" class="section-shell hr-shell">
    <div class="container">
      <div class="hr-banner reveal">
        <img src="/rrhh/rrhh-facial.png" alt="Reconocimiento facial para control de asistencia">
        <div class="hr-banner-note">
          <strong>Control de asistencia</strong>
          <span>Con reconocimiento facial</span>
        </div>
      </div>

      <div class="hr-layout">
        <div class="hr-copy">
          <UiSectionHeading
            eyebrow="Modulo de recursos humanos"
            title="Gestiona tu equipo de forma organizada, automatizada e integrada."
            description="Administra empleados, nomina, asistencia, vacaciones y reportes desde un mismo entorno conectado con el resto del sistema."
          />

          <div class="hr-highlight reveal">
            <strong>Beneficio clave</strong>
            <p>
              Automatiza la gestion de tu personal, mejora el control interno y toma decisiones con
              informacion clara y en tiempo real.
            </p>
          </div>

          <div class="hr-benefits">
            <article v-for="benefit in benefits" :key="benefit.title" class="hr-card reveal">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </article>
          </div>
        </div>

        <div class="hr-visual reveal">
          <div class="hr-stage">
            <div class="hr-panel hr-panel-wide">
              <img src="/rrhh/rrhh-payroll.png" alt="Generar nomina en el modulo de recursos humanos">
            </div>
            <div class="hr-panel hr-panel-wide">
              <img src="/rrhh/rrhh-attendance.png" alt="Control de asistencia en el modulo de recursos humanos">
            </div>

            <div class="hr-note note-payroll">
              <strong>Nomina automatizada</strong>
              <span>Salarios, comisiones y horas trabajadas con menos errores</span>
            </div>

            <div class="hr-note note-attendance">
              <strong>Poncheo en tiempo real</strong>
              <span>Base precisa para asistencia, vacaciones y calculo de nomina</span>
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
    title: 'Administracion completa de empleados',
    description: 'Registra empleados con informacion organizada, disponible y clasificada por departamentos dentro de la empresa.'
  },
  {
    title: 'Gestion de nomina automatizada',
    description: 'Configura la nomina segun tu negocio y calcula automaticamente salarios, comisiones y horas trabajadas.'
  },
  {
    title: 'Control de asistencia',
    description: 'Lleva registro de entrada y salida en tiempo real para tener una base mas precisa en el calculo de nomina.'
  },
  {
    title: 'Reportes inteligentes',
    description: 'Consulta reportes de nomina y asistencia con informacion clara para tomar mejores decisiones administrativas.'
  },
  {
    title: 'Gestion de vacaciones',
    description: 'Controla dias disponibles, solicitudes y tiempos del personal con una vista mas ordenada del equipo.'
  },
  {
    title: 'Integracion total',
    description: 'El modulo se conecta con facturacion, operaciones del negocio y control administrativo para un flujo mas continuo.'
  }
]
</script>

<style scoped>
.hr-banner {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.hr-banner img {
  width: 100%;
  max-width: 420px;
  height: auto;
  display: block;
}

.hr-banner-note {
  position: absolute;
  right: 9rem;
  top: 1rem;
  max-width: 255px;
  padding: 1.08rem 1.15rem;
  border-radius: 22px;
  background: rgba(7, 16, 4, 0.95);
  color: var(--color-white);
  box-shadow: var(--shadow-card);
}

.hr-banner-note strong,
.hr-banner-note span {
  display: block;
}

.hr-banner-note strong {
  font-size: 1rem;
}

.hr-banner-note span {
  margin-top: 0.25rem;
  font-size: 0.9rem;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.74);
}

.hr-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
  gap: 2rem;
  align-items: start;
}

.hr-highlight {
  margin-top: 1.6rem;
  padding: 1.4rem 1.5rem;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(93, 177, 48, 0.12), rgba(93, 177, 48, 0.04));
  border: 1px solid rgba(93, 177, 48, 0.2);
}

.hr-highlight strong {
  display: block;
  margin-bottom: 0.45rem;
  font-size: 0.95rem;
  color: var(--color-green-deep);
}

.hr-highlight p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.8;
}

.hr-benefits {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.8rem;
}

.hr-card {
  padding: 1.35rem;
  border: 1px solid var(--color-border);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-soft);
  height: 100%;
}

.hr-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
}

.hr-card p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.7;
  font-size: 0.95rem;
}

.hr-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  align-content: start;
  row-gap: 0;
  padding: 0;
}

.hr-panel {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  margin: 0;
  padding: 0;
}

.hr-panel img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  max-width: 100%;
  margin: 0;
  padding: 0;
  vertical-align: top;
}

.hr-panel-wide {
  width: 100%;
  margin: 0;
  padding: 0;
}

@media (min-width: 761px) {
  .hr-panel-wide + .hr-panel-wide {
    margin-top: -22rem !important;
  }
}

.hr-note {
  position: absolute;
  max-width: 220px;
  padding: 0.95rem 1rem;
  border-radius: 20px;
  background: rgba(7, 16, 4, 0.95);
  color: var(--color-white);
  box-shadow: var(--shadow-card);
}

.hr-note strong,
.hr-note span {
  display: block;
}

.hr-note strong {
  font-size: 0.95rem;
}

.hr-note span {
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.72);
}

.note-payroll {
  top: 3.8rem;
  right: 1.1rem;
}

.note-attendance {
  left: 1.1rem;
  bottom: 3.8rem;
}

@media (max-width: 1180px) {
  .hr-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .hr-panel-wide + .hr-panel-wide {
    margin-top: -12rem !important;
  }

  .hr-panel img {
    width: 116%;
  }

  .hr-panel-wide:first-child img {
    transform: translateY(7%);
  }

  .hr-panel-wide:last-child img {
    transform: translateY(-7%);
  }

  .hr-note {
    position: absolute;
    max-width: 155px;
    padding: 0.72rem 0.8rem;
    border-radius: 16px;
  }

  .hr-note strong {
    font-size: 0.76rem;
  }

  .hr-note span {
    margin-top: 0.2rem;
    font-size: 0.66rem;
    line-height: 1.2;
  }

  .note-payroll {
    top: 3.1rem;
    right: 0.6rem;
  }

  .note-attendance {
    left: 0.6rem;
    bottom: 1.25rem;
  }
}

@media (max-width: 520px) {
  .hr-banner {
    margin-bottom: 1rem;
  }

  .hr-banner img {
    max-width: 300px;
  }

  .hr-banner-note {
    right: 2.4rem;
    top: 0.4rem;
    max-width: 155px;
    padding: 0.72rem 0.8rem;
    border-radius: 16px;
  }

  .hr-banner-note strong {
    font-size: 0.74rem;
  }

  .hr-banner-note span {
    font-size: 0.66rem;
    line-height: 1.2;
  }

  .hr-benefits {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: stretch;
  }

  .hr-card {
    padding: 0.9rem;
    border-radius: 18px;
  }

  .hr-card h3 {
    font-size: 0.92rem;
  }

  .hr-card p {
    font-size: 0.86rem;
    line-height: 1.5;
  }
}
</style>
