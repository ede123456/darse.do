<template>
  <div>
    <h1>Términos y condiciones</h1>
    <p class="legal-updated">Última actualización: 15 de junio de 2026</p>

    <p>
      Estos términos rigen el uso de <strong>DarsePOS</strong>, propiedad de
      <strong>{{ empresa.razonSocial }}</strong>. Al contratar o utilizar el servicio, aceptas estas condiciones.
    </p>

    <h2>1. Descripción del servicio</h2>
    <p>
      DarsePOS es un software por suscripción para facturación, ventas y gestión empresarial,
      ofrecido en planes estándar y personalizados.
    </p>

    <h2>2. Cuenta y responsabilidades</h2>
    <p>
      Eres responsable de la veracidad de los datos de tu cuenta y de mantener la confidencialidad de
      tus credenciales de acceso.
    </p>

    <h2>3. Precios, moneda y facturación</h2>
    <ul>
      <li>Todos los precios están expresados en <strong>{{ empresa.moneda }}</strong> ({{ empresa.monedaNombre }}).</li>
      <li>Los precios pueden estar sujetos al ITBIS y demás impuestos aplicables según la ley dominicana.</li>
      <li>Las suscripciones se renuevan automáticamente al final de cada período, salvo cancelación.</li>
    </ul>
    <p>
      Consulta la <NuxtLink to="/devoluciones">política de devoluciones, reembolsos y cancelaciones</NuxtLink>.
    </p>

    <h2>4. Uso aceptable</h2>
    <p>
      No está permitido usar el servicio para fines ilícitos, ni intentar vulnerar su seguridad o la
      de otros usuarios.
    </p>

    <h2>5. Propiedad intelectual</h2>
    <p>
      El software, la marca y los contenidos de DarsePOS son propiedad de {{ empresa.razonSocial }} y
      están protegidos por la ley.
    </p>

    <h2>6. Disponibilidad y soporte</h2>
    <p>
      Procuramos la mayor disponibilidad del servicio. El soporte se brinda en el horario indicado en
      la sección de contacto.
    </p>

    <h2>7. Limitación de responsabilidad</h2>
    <p>
      El servicio se ofrece "tal cual". No respondemos por daños indirectos derivados del uso o de la
      imposibilidad de uso del servicio, dentro de los límites permitidos por la ley.
    </p>

    <h2>8. Ley aplicable</h2>
    <p>
      Estos términos se rigen por las leyes de la República Dominicana, y cualquier controversia se
      someterá a los tribunales competentes del país.
    </p>

    <h2>9. Contacto</h2>
    <p>
      {{ empresa.razonSocial }} — {{ empresa.direccion }}, {{ empresa.ciudad }}, {{ empresa.pais }}.<br>
      <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a> ·
      <a :href="`tel:${empresa.telefonoIntl.replace(/\s/g, '')}`">{{ empresa.telefono }}</a>.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'legal' })
const empresa = useEmpresa()
useSeoMeta({ title: 'Términos y condiciones | DarsePOS' })
</script>
