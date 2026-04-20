<template>
  <section id="casos-exito" class="section-shell success-shell">
    <div class="container">
      <div class="success-heading">
        <UiSectionHeading
          eyebrow="Casos de exito"
          title="Empresas que ya operan con DARSEPRO."
          description="Negocios de distintos sectores confian en nuestro sistema para ordenar su facturacion, control interno y crecimiento."
        />
      </div>

      <div class="success-visual reveal">
        <img src="/casos-exito.png" alt="Logos de empresas que utilizan DARSEPRO">
      </div>
    </div>
  </section>
</template>

<style scoped>
.success-heading {
  max-width: 760px;
  margin-inline: auto;
}

.success-visual {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.success-visual img {
  width: 100%;
  max-width: 760px;
  height: auto;
  display: block;
}

@media (min-width: 761px) {
  .success-heading :deep(.reveal) {
    opacity: 1;
    transform: none;
    text-align: center;
  }

  .success-heading :deep(.section-copy) {
    margin-inline: auto;
  }
}

@media (max-width: 520px) {
  .success-visual {
    margin-top: 1.2rem;
  }
}
</style>
