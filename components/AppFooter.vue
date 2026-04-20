<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <img src="/logo-darse.svg" alt="DARSE sistema de innovacion" class="footer-logo">
        <p class="footer-copy">
          DarsePOS ofrece soluciones rapidas, simples y poderosas para facturacion, ventas y gestion empresarial.
        </p>
      </div>
      <div class="footer-links">
        <strong>Enlaces</strong>
        <a href="#inicio">Inicio</a>
        <a href="#planes">Planes</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div class="footer-links">
        <strong>Redes</strong>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© 2026 DARSE sistema de innovacion. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { margin-top: 2rem; background: #071004; color: var(--color-white); }
.footer-grid { display: grid; grid-template-columns: minmax(0,1.2fr) repeat(2, minmax(0,.5fr)); gap: 2rem; padding: 3rem 0; }
.footer-logo { width: 184px; filter: brightness(1.08); }
.footer-copy { max-width: 420px; color: rgba(255,255,255,.74); line-height: 1.8; }
.footer-links { display: grid; gap: .75rem; text-align: left; justify-items: start; }
.footer-links strong { color: var(--color-green); }
.footer-links a { color: rgba(255,255,255,.78); }
.footer-bottom { border-top: 1px solid rgba(255,255,255,.08); }
.footer-bottom p { margin: 0; padding: 1rem 0 1.4rem; color: rgba(255,255,255,.6); }
@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr; } }
</style>
