<template>
  <section id="inicio" class="hero section-shell">
    <div class="container hero-wrap">
      <div class="hero-gallery reveal">
        <div class="device-shell shell-phone">
          <img class="device device-phone" src="/hero-design/hero-phone-new.png" alt="Vista movil del panel de ganancias">
        </div>
        <div class="device-shell shell-tablet">
          <img class="device device-tablet" src="/hero-design/hero-tablet-new.png" alt="Vista de punto de venta en tablet">
        </div>
      </div>
      <p class="hero-product-name reveal">DarsePro v7</p>

      <div class="hero-copy reveal">
        <p class="eyebrow">Sistema de facturacion para todos</p>
        <h1>Rapido, simple y poderoso para vender mejor.</h1>
        <p class="hero-text">
          Todo tu negocio conectado en una experiencia clara, moderna y pensada para moverse contigo.
        </p>
        <div class="hero-actions">
          <a href="#planes" class="btn btn-primary">Ver planes</a>
          <a href="#contacto" class="btn btn-secondary">Solicitar asesoria</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 1.2rem;
}

.hero-wrap {
  display: grid;
  gap: 2.2rem;
}

.hero-gallery {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
  max-width: 520px;
  margin: 0 auto;
  padding: 0.25rem 0 0.15rem;
  overflow: visible;
}

.device-shell {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.device {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 12px rgba(0, 0, 0, 0.12));
}

.device-phone {
  width: 110%;
}

.shell-phone {
  z-index: 4;
  width: 50%;
  margin-right: -14%;
  transform: translateY(0);
}

.shell-tablet {
  z-index: 3;
  width: 50%;
  margin-left: -4%;
  transform: translateY(0);
}

.device-tablet {
  width: 110%;
}

.hero-copy {
  display: grid;
  justify-items: center;
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
}

.hero-product-name {
  margin: -4.8rem auto 0;
  font-family: 'Sora', sans-serif;
  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--color-text);
  text-align: center;
}

.hero-copy h1 {
  margin: 0;
  font-family: 'Sora', sans-serif;
  font-size: clamp(2.8rem, 5vw, 5rem);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.05em;
  max-width: 10ch;
}

.hero-text {
  margin: 1rem 0 0;
  max-width: 560px;
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

@media (min-width: 981px) {
  .hero-gallery {
    min-height: 580px;
    max-width: 820px;
    transform: translate(-1.4rem, -1.8rem);
  }

  .shell-phone {
    width: 58%;
    margin-right: -17%;
  }

  .shell-tablet {
    width: 58%;
    margin-left: -6%;
  }

  .device-phone {
    width: 126%;
  }

  .device-tablet {
    width: 126%;
  }
}

@media (max-width: 980px) {
  .hero-gallery {
    min-height: 360px;
    max-width: 500px;
  }

  .device {
    width: 100%;
    max-width: none;
  }

  .device-phone {
    width: 110%;
  }

  .device-tablet {
    width: 110%;
  }

  .shell-phone {
    width: 40%;
    margin-right: -13%;
    transform: translateY(0);
  }

  .shell-tablet {
    width: 60%;
    margin-left: -3%;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .hero-product-name {
    margin-top: -3.5rem;
    font-size: clamp(1.6rem, 8vw, 2.2rem);
  }

  .hero-copy h1 { max-width: 100%; }

  .hero-gallery {
    min-height: 370px;
    max-width: 100%;
    padding-inline: 0;
    justify-content: center;
    transform: translate(-2.2rem, -1.8rem);
  }

  .device {
    width: 134%;
  }

  .device-phone {
    width: 144%;
  }

  .device-tablet {
    width: 142%;
  }

  .shell-phone {
    width: 54%;
    margin-right: -6%;
    transform: none;
  }

  .shell-tablet {
    width: 54%;
    transform: none;
  }
}

@media (max-width: 420px) {
  .hero-product-name {
    margin-top: -3.7rem;
  }

  .hero-gallery {
    min-height: 330px;
    justify-content: center;
    transform: translate(-1.8rem, -1.5rem);
  }

  .device {
    width: 130%;
  }

  .device-phone {
    width: 140%;
  }

  .device-tablet {
    width: 138%;
  }

  .shell-phone {
    width: 54%;
    margin-right: -6%;
    transform: none;
  }

  .shell-tablet {
    width: 54%;
    transform: none;
  }
}
</style>
