<template>
  <div>
    <h1>Política de entrega</h1>
    <p class="legal-updated">Última actualización: 15 de junio de 2026</p>

    <p>
      <strong>DarsePOS</strong> es un <strong>servicio digital</strong>: no se envían bienes físicos.
      La "entrega" consiste en la activación del acceso al sistema una vez confirmado el pago.
    </p>

    <h2>1. Activación del servicio</h2>
    <p>
      Tras confirmarse el pago con tu tarjeta Visa o Mastercard, el acceso a tu cuenta se activa de
      forma <strong>automática e inmediata</strong>. En casos excepcionales, la activación puede
      tomar hasta <strong>24 horas hábiles</strong>.
    </p>

    <h2>2. Cómo recibes el acceso</h2>
    <ul>
      <li>Credenciales y confirmación enviadas al correo registrado en tu compra.</li>
      <li>Acceso a la plataforma web y a las aplicaciones de escritorio (Windows, Mac, Linux) y móviles (iOS, Android).</li>
    </ul>

    <h2>3. Costos de envío</h2>
    <p>Al tratarse de un producto digital, <strong>no existen costos de envío ni de entrega física</strong>.</p>

    <h2>4. Si no recibes el acceso</h2>
    <p>
      Si luego del pago no recibes el acceso en el plazo indicado, escríbenos a
      <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a> o llámanos al
      <a :href="`tel:${empresa.telefonoIntl.replace(/\s/g, '')}`">{{ empresa.telefono }}</a> y lo
      resolveremos de inmediato.
    </p>

    <h2>5. Cobertura</h2>
    <p>
      El servicio está disponible para clientes en {{ empresa.pais }} y donde la legislación aplicable lo permita.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'legal' })
const empresa = useEmpresa()
useSeoMeta({ title: 'Política de entrega | DarsePOS' })
</script>
