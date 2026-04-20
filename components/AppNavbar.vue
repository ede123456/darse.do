<template>
  <header class="header">
    <nav ref="navElement" class="container navbar">
      <a href="#inicio" class="brand" aria-label="DARSE inicio">
        <img src="/logo-symbol.svg" alt="DARSE simbolo" class="brand-logo">
      </a>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Abrir menu"
        @click="isOpen = !isOpen"
      >
        <span />
        <span />
      </button>

      <div class="nav-links" :class="{ open: isOpen }">
        <a href="#inicio" @click="isOpen = false">Inicio</a>
        <a href="#catalogo-digital" @click="isOpen = false">Catalogo digital</a>
        <a href="#reservaciones" @click="isOpen = false">Reservaciones</a>
        <a href="#rrhh" @click="isOpen = false">RRHH</a>
        <a href="#seguimiento-pedidos" @click="isOpen = false">Pedidos</a>
        <a href="#planes" @click="isOpen = false">Planes</a>
        <a href="#contacto" @click="isOpen = false">Contacto</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const navElement = ref<HTMLElement | null>(null)

const closeMenuOnOutsideClick = (event: MouseEvent | TouchEvent) => {
  if (!isOpen.value || !navElement.value) return

  const target = event.target
  if (target instanceof Node && !navElement.value.contains(target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenuOnOutsideClick)
  document.addEventListener('touchstart', closeMenuOnOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenuOnOutsideClick)
  document.removeEventListener('touchstart', closeMenuOnOutsideClick)
})
</script>

<style scoped>
.header { position: sticky; top: 0; z-index: 50; backdrop-filter: blur(18px); background: rgba(255,255,255,.72); border-bottom: 1px solid rgba(16,16,16,.04); }
.navbar { display: flex; align-items: center; justify-content: space-between; gap: 0.9rem; min-height: 3.45rem; }
.brand-logo { width: 30px; height: 30px; }
.nav-links { display: flex; align-items: center; gap: 0.9rem; }
.nav-links a:not(.nav-cta) { position: relative; font-size: 0.88rem; font-weight: 400; color: rgba(16,16,16,.8); }
.nav-links a:not(.nav-cta)::after { content: ''; position: absolute; left: 0; bottom: -0.35rem; width: 100%; height: 1px; background: var(--color-green); transform: scaleX(0); transition: transform .25s ease; }
.nav-links a:not(.nav-cta):hover::after, .nav-links a:not(.nav-cta):focus-visible::after { transform: scaleX(1); }
.nav-toggle { display: none; width: 2.5rem; height: 2.5rem; padding: 0; border: 1px solid rgba(93,177,48,.16); border-radius: 999px; background: var(--color-white); }
.nav-toggle span { display: block; width: 1rem; height: 2px; margin: .32rem auto; background: var(--color-text); }
@media (max-width: 840px) {
  .brand-logo { width: 30px; height: 30px; }
  .nav-toggle { display: block; }
  .nav-links { position: absolute; top: calc(100% + .75rem); left: 1rem; right: 1rem; display: grid; gap: 1rem; padding: 1.25rem; border: 1px solid rgba(16,16,16,.06); border-radius: 24px; background: rgba(255,255,255,.98); box-shadow: var(--shadow-soft); opacity: 0; pointer-events: none; transform: translateY(-8px); transition: opacity .2s ease, transform .2s ease; }
  .nav-links.open { opacity: 1; pointer-events: auto; transform: translateY(0); }
}
</style>
