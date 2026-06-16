<template>
  <div>
    <h1>Política de devoluciones, reembolsos y cancelaciones</h1>
    <p class="legal-updated">Última actualización: 15 de junio de 2026</p>

    <p>
      En <strong>{{ empresa.razonSocial }}</strong> queremos que conozcas con claridad tus derechos
      y responsabilidades como cliente y tarjetahabiente antes de realizar cualquier compra.
      <strong>DarsePOS</strong> es un servicio de software por suscripción (SaaS) para facturación,
      ventas y gestión empresarial; es un <strong>producto digital de acceso inmediato</strong>,
      por lo que esta política se adapta a esa naturaleza.
    </p>

    <h2>1. Cancelaciones</h2>
    <p>
      Puedes cancelar tu suscripción en cualquier momento desde tu cuenta o escribiéndonos a
      <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a>. La cancelación detiene las
      renovaciones futuras; el servicio permanece activo hasta el final del período que ya pagaste y
      no se realizan cobros posteriores.
    </p>

    <h2>2. Reembolsos</h2>
    <ul>
      <li>
        <strong>Garantía de {{ empresa.diasReembolso }} días:</strong> si solicitas el reembolso
        dentro de los primeros {{ empresa.diasReembolso }} días naturales posteriores a tu
        <strong>primera</strong> suscripción, te devolvemos el 100% del monto pagado.
      </li>
      <li>
        <strong>Cargos por error o duplicados:</strong> cualquier cobro incorrecto, duplicado o no
        autorizado se reembolsa en su totalidad.
      </li>
      <li>
        <strong>Períodos ya iniciados:</strong> una vez vencido el plazo de garantía, las
        mensualidades o anualidades de períodos ya iniciados no son reembolsables, salvo lo que
        disponga la Ley No. 358-05 de Protección de los Derechos del Consumidor.
      </li>
    </ul>

    <h2>3. Cómo solicitar un reembolso o cancelación</h2>
    <p>
      Escríbenos a <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a> o llámanos al
      <a :href="`tel:${empresa.telefonoIntl.replace(/\s/g, '')}`">{{ empresa.telefono }}</a> indicando:
      nombre del titular de la cuenta, correo registrado y motivo de la solicitud.
    </p>

    <h2>4. Plazos de procesamiento</h2>
    <p>
      Los reembolsos aprobados se acreditan al <strong>mismo método de pago</strong> utilizado
      (tarjeta Visa o Mastercard) en un plazo aproximado de {{ empresa.diasAcreditacion }}, según los
      tiempos de tu banco emisor.
    </p>

    <h2>5. Contacto</h2>
    <p>
      Servicio al cliente: <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a> ·
      <a :href="`tel:${empresa.telefonoIntl.replace(/\s/g, '')}`">{{ empresa.telefono }}</a>.
      Horario: {{ empresa.horario }}.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'legal' })
const empresa = useEmpresa()
useSeoMeta({ title: 'Devoluciones y reembolsos | DarsePOS' })
</script>
