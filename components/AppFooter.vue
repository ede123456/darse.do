<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <img loading="lazy" decoding="async" src="/logo-darse.svg" alt="DARSE sistema de innovacion" class="footer-logo">
        <p class="footer-copy">
          DarsePOS ofrece soluciones rapidas, simples y poderosas para facturacion, ventas y gestion empresarial.
        </p>
        <address class="footer-address">
          <strong>{{ empresa.razonSocial }}</strong><br>
          {{ empresa.direccion }}<br>
          {{ empresa.ciudad }}, {{ empresa.pais }}<br>
          RNC: {{ empresa.rnc }}
        </address>
      </div>

      <div class="footer-links">
        <strong>Enlaces</strong>
        <a href="/#inicio">Inicio</a>
        <a href="/#planes">Planes</a>
        <a href="/#contacto">Contacto</a>
      </div>

      <div class="footer-links">
        <strong>Legales</strong>
        <NuxtLink to="/devoluciones">Devoluciones y reembolsos</NuxtLink>
        <NuxtLink to="/entrega">Politica de entrega</NuxtLink>
        <NuxtLink to="/privacidad">Politica de privacidad</NuxtLink>
        <NuxtLink to="/seguridad">Seguridad de datos</NuxtLink>
        <NuxtLink to="/terminos">Terminos y condiciones</NuxtLink>
      </div>

      <div class="footer-links">
        <strong>Servicio al cliente</strong>
        <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a>
        <a :href="`tel:${empresa.telefonoIntl.replace(/\s/g, '')}`">{{ empresa.telefono }}</a>
        <a :href="empresa.whatsapp" target="_blank" rel="noreferrer">WhatsApp</a>
        <span class="footer-hours">{{ empresa.horario }}</span>
      </div>
    </div>

    <div class="footer-pay">
      <div class="container footer-pay-row">
        <div class="pay-brands">
          <span class="pay-label">Pagos aceptados</span>
          <span class="pay-chip"><img loading="lazy" decoding="async" src="/pagos/visa.svg" alt="Visa" class="pay-visa"></span>
          <span class="pay-chip"><img loading="lazy" decoding="async" src="/pagos/mastercard.svg" alt="Mastercard" class="pay-mc"></span>
          <span class="pay-chip"><img loading="lazy" decoding="async" src="/pagos/amex.svg" alt="American Express" class="pay-amex"></span>
          <span class="pay-chip"><img loading="lazy" decoding="async" src="/pagos/discover.svg" alt="Discover" class="pay-discover"></span>
          <span class="pay-chip"><img loading="lazy" decoding="async" src="/pagos/diners.svg" alt="Diners Club" class="pay-diners"></span>
          <span class="pay-chip"><img loading="lazy" decoding="async" src="/pagos/jcb.svg" alt="JCB" class="pay-jcb"></span>
        </div>
        <p class="pay-currency">
          Todos los precios estan expresados en <strong>{{ empresa.moneda }}</strong>, {{ empresa.monedaNombre }}.
        </p>
      </div>
      <div class="container footer-3ds">
        <span class="ds-label">Compra protegida con autenticacion 3D Secure:</span>
        <span class="ds-chip"><img loading="lazy" decoding="async" src="/pagos/verified-by-visa.svg" alt="Verified by Visa" class="ds-visa"></span>
        <span class="ds-chip"><img loading="lazy" decoding="async" src="/pagos/mastercard-idcheck.svg" alt="Mastercard ID Check" class="ds-mc"></span>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ year }} {{ empresa.razonSocial }}. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const empresa = useEmpresa()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer { margin-top: 2rem; background: #071004; color: var(--color-white); }
.footer-grid { display: grid; grid-template-columns: minmax(0,1.4fr) repeat(3, minmax(0,.6fr)); gap: 2rem; padding: 3rem 0; }
.footer-logo { width: 184px; filter: brightness(1.08); }
.footer-copy { max-width: 420px; color: rgba(255,255,255,.74); line-height: 1.8; }
.footer-address { margin-top: 1.1rem; font-style: normal; color: rgba(255,255,255,.62); line-height: 1.7; font-size: .88rem; }
.footer-address strong { color: rgba(255,255,255,.85); }
.footer-links { display: grid; gap: .75rem; align-content: start; text-align: left; justify-items: start; }
.footer-links strong { color: var(--color-green); }
.footer-links a { color: rgba(255,255,255,.78); }
.footer-links a:hover { color: var(--color-white); }
.footer-hours { color: rgba(255,255,255,.55); font-size: .82rem; line-height: 1.5; }

.footer-pay { border-top: 1px solid rgba(255,255,255,.08); }
.footer-pay-row { display: flex; align-items: center; justify-content: space-between; gap: 1.25rem; padding: 1.25rem 0; flex-wrap: wrap; }
.pay-brands { display: flex; align-items: center; gap: .6rem; }
.pay-label { color: rgba(255,255,255,.6); font-size: .82rem; margin-right: .25rem; }
.pay-chip { display: inline-flex; align-items: center; justify-content: center; height: 34px; padding: 0 10px; background: var(--color-white); border-radius: 7px; }
.pay-chip img { width: auto; }
.pay-visa { height: 16px; }
.pay-mc { height: 26px; }
.pay-amex { height: 26px; }
.pay-discover { height: 13px; }
.pay-diners { height: 22px; }
.pay-jcb { height: 22px; }
.pay-brands { flex-wrap: wrap; }
.pay-currency { margin: 0; color: rgba(255,255,255,.7); font-size: .9rem; }
.pay-currency strong { color: var(--color-white); }

.footer-3ds { display: flex; align-items: center; gap: .75rem; flex-wrap: wrap; padding: 0 0 1.25rem; }
.ds-label { color: rgba(255,255,255,.6); font-size: .82rem; }
.ds-chip { display: inline-flex; align-items: center; justify-content: center; padding: 6px 10px; background: var(--color-white); border-radius: 7px; }
.ds-visa { height: 26px; width: auto; }
.ds-mc { height: 38px; width: auto; }

.footer-bottom { border-top: 1px solid rgba(255,255,255,.08); }
.footer-bottom p { margin: 0; padding: 1rem 0 1.4rem; color: rgba(255,255,255,.6); }

@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-pay-row { align-items: flex-start; }
}
</style>
