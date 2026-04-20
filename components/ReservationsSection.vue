<template>
  <section id="reservaciones" class="section-shell reservations-shell">
    <div class="container">
      <div class="reservations-layout">
        <div class="reservations-copy">
          <UiSectionHeading
            eyebrow="Modulo de reservaciones"
            title="Automatiza tus reservaciones y ofrece una experiencia moderna sin complicaciones."
            description="Un flujo claro para buscar disponibilidad, mostrar servicios, recibir datos del cliente y gestionar cada solicitud con mayor orden y menos errores."
          />

          <div class="reservations-hero">
            <div class="reservations-highlight">
              <strong>Beneficio clave</strong>
              <p>
                Automatiza tus reservaciones, reduce errores y ofrece una experiencia moderna a tus clientes,
                manteniendo un proceso agil para tu equipo.
              </p>
            </div>

            <div class="reservations-visual">
              <img src="/reservaciones/reservacion-phone.png" alt="Pantalla del modulo de reservaciones con fechas y servicios disponibles">
              <div class="reservation-note note-availability">
                <strong>Disponibilidad clara</strong>
                <span>Fechas, servicios y reserva en un solo flujo</span>
              </div>
              <div class="reservation-note note-contact">
                <strong>Proceso simple</strong>
                <span>Rapido, ordenado y facil de confirmar</span>
              </div>
            </div>
          </div>

          <div class="reservations-benefits">
            <article v-for="benefit in benefits" :key="benefit.title" class="reservations-card">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </article>
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
    description: 'Presenta tu modulo con imagenes, banners y estilos alineados a tu negocio para que la experiencia de reserva se vea mas cuidada.'
  },
  {
    title: 'Informacion de contacto visible',
    description: 'Muestra telefono, correo y datos importantes dentro del flujo para que el cliente se sienta orientado en todo momento.'
  },
  {
    title: 'Disponibilidad y gestion clara',
    description: 'Permite buscar por fechas, ver servicios disponibles y organizar cada reservacion con una vista mucho mas ordenada.'
  },
  {
    title: 'Pedidos y contacto por WhatsApp',
    description: 'Facilita una comunicacion rapida y sin fricciones para confirmar, dar seguimiento o resolver dudas de cada cliente.'
  },
  {
    title: 'Promociones y organizacion eficiente',
    description: 'Activa ofertas por dias o periodos concretos y organiza mejor tus servicios para impulsar ocupacion en momentos clave.'
  },
  {
    title: 'Proceso simple, rapido y confiable',
    description: 'Desde la seleccion de fechas hasta la solicitud final, el flujo esta pensado para reducir pasos y minimizar errores.'
  }
]
</script>

<style scoped>
.reservations-layout {
  display: grid;
  gap: 2.2rem;
  align-items: start;
}

.reservations-copy {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
}

.reservations-hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-items: center;
  justify-items: center;
}

.reservations-highlight {
  margin-top: 0.8rem;
  padding: 1.5rem 1.6rem;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(93, 177, 48, 0.12), rgba(93, 177, 48, 0.04));
  border: 1px solid rgba(93, 177, 48, 0.2);
}

.reservations-highlight strong {
  display: block;
  margin-bottom: 0.45rem;
  font-size: 0.95rem;
  color: var(--color-green-deep);
}

.reservations-highlight p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.8;
}

.reservations-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
}

.reservations-visual img {
  width: auto;
  max-width: 100%;
  height: 520px;
  display: block;
}

.reservation-note {
  position: absolute;
  max-width: 185px;
  padding: 0.82rem 0.9rem;
  border-radius: 18px;
  background: rgba(7, 16, 4, 0.95);
  color: var(--color-white);
  box-shadow: var(--shadow-card);
}

.reservation-note strong,
.reservation-note span {
  display: block;
}

.reservation-note strong {
  font-size: 0.82rem;
}

.reservation-note span {
  margin-top: 0.25rem;
  font-size: 0.72rem;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.74);
}

.note-availability {
  top: 0.35rem;
  right: 0.35rem;
}

.note-contact {
  left: 0.35rem;
  bottom: 1.2rem;
}

.reservations-benefits {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 0.8rem;
}

.reservations-card {
  padding: 1.35rem;
  border: 1px solid var(--color-border);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-soft);
  height: 100%;
}

.reservations-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
}

.reservations-card p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (min-width: 761px) {
  .reservations-layout {
    justify-items: center;
  }

  .reservations-copy {
    max-width: 960px;
  }

  .reservations-highlight {
    text-align: center;
    margin-bottom: 0;
  }

  .reservations-benefits {
    max-width: 960px;
    margin-inline: auto;
  }
}

@media (max-width: 1180px) {
  .reservations-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .reservations-hero {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .reservations-highlight,
  .reservations-visual {
    margin-top: 0.4rem;
  }
}

@media (max-width: 520px) {
  .reservations-highlight {
    padding: 1.1rem 1.1rem;
    border-radius: 20px;
    margin-top: 0.4rem;
  }

  .reservations-hero {
    width: calc(100% + 0.5rem);
    margin-inline: -0.25rem;
  }

  .reservations-visual img {
    width: 100%;
    max-width: none;
    height: 500px;
    object-fit: contain;
  }

  .reservation-note {
    max-width: 145px;
    padding: 0.7rem 0.78rem;
    border-radius: 16px;
  }

  .reservation-note strong {
    font-size: 0.72rem;
  }

  .reservation-note span {
    font-size: 0.62rem;
    line-height: 1.2;
  }

  .note-availability {
    top: 1.25rem;
    right: 1.35rem;
  }

  .note-contact {
    left: 1.35rem;
    bottom: 2rem;
  }

  .reservations-visual {
    margin-top: 0;
  }

  .reservations-benefits {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: stretch;
    margin-top: 0.55rem;
  }

  .reservations-card {
    padding: 0.9rem;
    border-radius: 18px;
  }

  .reservations-card h3 {
    font-size: 0.92rem;
  }

  .reservations-card p {
    font-size: 0.86rem;
    line-height: 1.5;
  }
}
</style>
