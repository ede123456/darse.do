<template>
  <div>
    <h1>Políticas de seguridad</h1>
    <p class="legal-updated">Última actualización: 15 de junio de 2026</p>

    <div class="ds-badges">
      <img src="/pagos/verified-by-visa.svg" alt="Verified by Visa">
      <img src="/pagos/mastercard-idcheck.svg" alt="Mastercard ID Check">
    </div>
    <p>
      Las transacciones con tarjeta están protegidas con autenticación <strong>3D Secure</strong>
      (<strong>Verified by Visa</strong> y <strong>Mastercard ID Check</strong>), una capa adicional
      que verifica la identidad del tarjetahabiente al momento del pago para prevenir el uso no autorizado.
    </p>

    <h2>Website</h2>
    <p>
      Tomamos todas las medidas y precauciones razonables para proteger tu información personal y
      seguimos las mejores prácticas de la industria para asegurar que tu información no sea utilizada
      de manera inapropiada, alterada o destruida.
    </p>
    <p>
      La conexión donde se ingresan los datos de pago está cifrada mediante la tecnología de capa de
      puertos seguros o <strong>Secure Sockets Layer (SSL)</strong>. La información de tu tarjeta es
      procesada y protegida por nuestro proveedor de pagos (<strong>AZUL</strong>) con cifrado
      <strong>AES-256</strong>, conforme a todos los requerimientos del <strong>PCI-DSS</strong>.
      <strong>{{ empresa.razonSocial }} no almacena los números completos de tu tarjeta.</strong>
    </p>

    <h2>Pagos</h2>
    <p>
      Los métodos de pago utilizados por <strong>{{ empresa.razonSocial }}</strong> son servicios de
      terceros. Estos servicios de terceros (<strong>AZUL</strong>) cumplen con todos los estándares de
      seguridad y cifrado para mantener tu información segura. Solo utilizarán la información necesaria
      para completar el proceso requerido. También recomendamos leer las Políticas de Privacidad de
      estos proveedores, para entender mejor cómo manejan la información suministrada.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'legal' })
const empresa = useEmpresa()
useSeoMeta({ title: 'Políticas de seguridad | DarsePOS' })
</script>
