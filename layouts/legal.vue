<template>
  <div class="legal-shell">
    <header class="legal-header">
      <div class="container legal-header-row">
        <NuxtLink to="/" class="legal-brand" aria-label="DarsePOS inicio">
          <img src="/logo-symbol.svg" alt="DarsePOS" class="legal-brand-logo">
          <span>DarsePOS</span>
        </NuxtLink>
        <NuxtLink to="/" class="legal-back">← Volver al inicio</NuxtLink>
      </div>
    </header>
    <main class="legal-main">
      <article class="container legal">
        <slot />
      </article>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.legal-shell { display: flex; flex-direction: column; min-height: 100vh; }
.legal-header { position: sticky; top: 0; z-index: 50; backdrop-filter: blur(18px); background: rgba(255,255,255,.78); border-bottom: 1px solid rgba(16,16,16,.05); }
.legal-header-row { display: flex; align-items: center; justify-content: space-between; min-height: 3.45rem; }
.legal-brand { display: inline-flex; align-items: center; gap: .55rem; font-family: 'Sora', sans-serif; font-weight: 600; }
.legal-brand-logo { width: 28px; height: 28px; }
.legal-back { font-size: .9rem; color: var(--color-green-deep); }
.legal-main { flex: 1; }
</style>
