<template>
  <div>
    <AppNavbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <CatalogSection />
      <ReservationsSection />
      <HumanResourcesSection />
      <OrderTrackingSection />
      <PlansSection />
      <ContactSection />
      <SuccessStoriesSection />
    </main>
    <AppFooter />
    <a
      href="https://wa.me/18294708000"
      class="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M19.11 17.36c-.27-.13-1.58-.78-1.83-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.31-.79-.7-1.32-1.56-1.48-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22s.96 2.58 1.09 2.76c.13.18 1.88 2.88 4.56 4.03.64.27 1.15.44 1.54.56.65.21 1.24.18 1.7.11.52-.08 1.58-.64 1.8-1.25.22-.62.22-1.14.16-1.25-.07-.11-.25-.18-.52-.31Z"/>
        <path fill="currentColor" d="M16.03 3.2c-7.08 0-12.82 5.74-12.82 12.82 0 2.27.59 4.48 1.72 6.43L3 29.8l7.56-1.88a12.76 12.76 0 0 0 5.47 1.23h.01c7.08 0 12.82-5.74 12.82-12.82 0-3.43-1.34-6.66-3.77-9.08A12.73 12.73 0 0 0 16.03 3.2Zm0 23.49h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.49 1.12 1.2-4.37-.25-.45a10.64 10.64 0 0 1-1.61-5.62c0-5.88 4.78-10.66 10.66-10.66 2.84 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.53c0 5.88-4.79 10.66-10.66 10.66Z"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'DarsePOS | Sistema de facturacion para todos',
  description: 'Sistema de facturacion para todo tipo de negocio, con planes estandar y personalizados.',
  ogTitle: 'DarsePOS',
  ogDescription: 'Planes de suscripcion rapidos, simples y poderosos para emprendedores y pequenas empresas.',
  ogType: 'website'
})

onMounted(() => {
  const items = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.18 })

  items.forEach((item) => observer.observe(item))
})
</script>
