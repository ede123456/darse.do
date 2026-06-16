<template>
  <div>
    <h1>Política de privacidad</h1>
    <p class="legal-updated">Última actualización: 15 de junio de 2026</p>

    <p>
      Esta política describe cómo <strong>{{ empresa.razonSocial }}</strong> recopila, usa y protege
      los datos personales de quienes utilizan <strong>DarsePOS</strong> y el sitio web darse.do, en
      cumplimiento de la Ley No. 172-13 sobre Protección de Datos de Carácter Personal de la República Dominicana.
    </p>

    <h2>1. Responsable del tratamiento</h2>
    <p>
      {{ empresa.razonSocial }} — RNC: {{ empresa.rnc }}.<br>
      {{ empresa.direccion }}, {{ empresa.ciudad }}, {{ empresa.pais }}.<br>
      Contacto: <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a> · {{ empresa.telefono }}.
    </p>

    <h2>2. Datos que recopilamos</h2>
    <ul>
      <li>Datos de identificación y contacto: nombre, correo, teléfono.</li>
      <li>Datos de facturación necesarios para procesar tu suscripción.</li>
      <li>Datos de uso del sistema con fines de soporte y mejora del servicio.</li>
    </ul>
    <p>
      <strong>No almacenamos los números completos de tu tarjeta.</strong> Los pagos se procesan de
      forma segura a través de {{ empresa.procesador }}. Consulta nuestra
      <NuxtLink to="/seguridad">política de seguridad de datos</NuxtLink>.
    </p>

    <h2>3. Finalidad y base legal</h2>
    <p>
      Usamos tus datos para activar y mantener tu suscripción, brindar soporte, emitir comprobantes y
      cumplir obligaciones legales y fiscales. El tratamiento se basa en la ejecución del contrato,
      en obligaciones legales y, cuando corresponde, en tu consentimiento.
    </p>

    <h2>4. Compartir con terceros</h2>
    <p>
      Solo compartimos datos con el procesador de pagos y con proveedores de infraestructura
      necesarios para operar el servicio, bajo deberes de confidencialidad. <strong>No vendemos tus
      datos personales.</strong>
    </p>

    <h2>5. Conservación</h2>
    <p>
      Conservamos tus datos mientras mantengas una cuenta activa y durante los plazos que exija la
      normativa fiscal y legal aplicable.
    </p>

    <h2>6. Tus derechos</h2>
    <p>
      Puedes solicitar acceso, rectificación, actualización o eliminación de tus datos escribiendo a
      <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a>.
    </p>

    <h2>7. Cookies</h2>
    <p>
      El sitio puede usar cookies técnicas y de medición para su correcto funcionamiento y para
      entender cómo se usa. Puedes administrarlas desde tu navegador.
    </p>

    <h2>8. Cambios</h2>
    <p>
      Podemos actualizar esta política; publicaremos la versión vigente en esta página con su fecha
      de actualización.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'legal' })
const empresa = useEmpresa()
useSeoMeta({ title: 'Política de privacidad | DarsePOS' })
</script>
