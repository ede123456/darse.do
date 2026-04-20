<template>
  <section id="contacto" class="section-shell">
    <div class="container contact-grid">
      <div class="contact-copy reveal">
        <p class="eyebrow">Contacto</p>
        <h2 class="section-title">Conversemos sobre una operacion mas simple y ordenada.</h2>
        <p class="section-copy">
          Si necesitas mas usuarios o funcionalidades no contempladas en los planes estandar,
          te ayudamos a definir una propuesta personalizada para tu empresa.
        </p>
        <div class="contact-cards">
          <article><strong>Email</strong><span>info@darse.do</span></article>
          <article><strong>Telefono</strong><span>829-470-8000</span></article>
          <article><strong>Enfoque</strong><span>Solucion para todo tipo de negocio</span></article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
.contact-copy { max-width: 760px; }
.contact-cards { display: grid; gap: 1rem; margin-top: 2rem; }
.contact-cards article { padding: 1.25rem 1.4rem; border-radius: 22px; border: 1px solid var(--color-border); background: rgba(255,255,255,.75); }
.contact-cards strong, .contact-cards span { display: block; }
.contact-cards span { margin-top: .35rem; color: var(--color-muted); }

@media (min-width: 761px) {
  .contact-copy {
    margin-inline: auto;
    text-align: center;
  }

  .contact-copy :deep(.section-copy) {
    margin-inline: auto;
  }

  .contact-cards {
    max-width: 760px;
    margin-inline: auto;
  }
}
</style>
