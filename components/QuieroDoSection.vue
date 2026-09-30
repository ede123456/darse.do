<!-- Quiero.do: la app de pedidos, transporte y servicios a domicilio. En esta
     pagina se vende al negocio (publica su catalogo y entrega), no al cliente
     final, por eso el primer bloque es "para tu negocio". -->
<template>
  <section id="quierodo" class="section-shell quiero-shell">
    <div class="container">
      <div class="quiero reveal">
        <div>
          <span class="marca-q">QUIERO.DO</span>
          <h2>Y cuando hay que llevarlo a la puerta, esta Quiero.do.</h2>
          <p class="quiero-lead">
            Nuestra app de pedidos, transporte y servicios a domicilio en Republica Dominicana.
            Tu negocio publica su catalogo y los clientes de tu zona compran con pago contra entrega,
            sin pagarle comision a una plataforma de afuera.
          </p>

          <div class="q-cols">
            <article class="q-col">
              <b>Para tu negocio</b>
              <ul>
                <li>Publica tu catalogo y recibe pedidos de tu zona.</li>
                <li>Entrega con tu repartidor o con los conductores de la plataforma.</li>
                <li>Los pedidos entran a tu Darse Pro y se facturan ahi mismo.</li>
              </ul>
            </article>
            <article class="q-col">
              <b>Para tus clientes</b>
              <ul>
                <li><strong>Quiero transporte:</strong> viaja, envia o recoge paquetes.</li>
                <li><strong>Quiero comprar:</strong> catalogo de los comercios de la zona.</li>
                <li><strong>Quiero un flete:</strong> los conductores compiten por su precio.</li>
                <li><strong>Quiero servicio:</strong> electricistas, plomeros y tecnicos.</li>
              </ul>
            </article>
          </div>

          <div class="q-acciones">
            <a class="btn btn-claro" href="https://quiero.do" target="_blank" rel="noopener">Publicar mi negocio</a>
            <a class="btn btn-borde" href="https://quiero.do" target="_blank" rel="noopener">Ver la app &rarr;</a>
          </div>
        </div>

        <div class="q-foto">
          <img loading="lazy" decoding="async" src="/apps/quierodo-telefono.jpg" alt="Quiero.do en el telefono">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quiero-shell { padding-top: 0.8rem; }

.quiero {
  position: relative; overflow: hidden; color: #fff;
  background: linear-gradient(135deg, #1b1b1b 0%, #2a2118 100%);
  border-radius: var(--radius-xl); padding: 2.3rem;
  display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 2rem; align-items: center;
}
.quiero::after {
  content: ''; position: absolute; inset: -60px -80px auto auto; width: 320px; height: 320px;
  border-radius: 50%; background: radial-gradient(circle, rgba(255, 193, 120, .28), transparent 65%);
}

.marca-q {
  display: inline-flex; align-items: center; gap: 0.6rem; background: #fff; color: #111;
  border-radius: 12px; padding: 0.45rem 0.8rem; font-family: 'Sora', sans-serif; font-weight: 700; font-size: 0.95rem;
}
.quiero h2 { font-family: 'Sora', sans-serif; font-size: 1.85rem; max-width: 20ch; margin: 1rem 0 0; letter-spacing: -0.02em; }
.quiero-lead { color: rgba(255, 255, 255, .76); line-height: 1.6; margin: 0.8rem 0 0; }

.q-cols { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.4rem; }
.q-col { background: rgba(255, 255, 255, .07); border: 1px solid rgba(255, 255, 255, .13); border-radius: var(--radius-lg); padding: 1.05rem; }
.q-col b { font-size: 0.94rem; }
.q-col ul { list-style: none; margin: 0.6rem 0 0; padding: 0; display: grid; gap: 0.4rem; }
.q-col li { position: relative; padding-left: 1rem; font-size: 0.84rem; color: rgba(255, 255, 255, .75); line-height: 1.4; }
.q-col li::before { content: ''; position: absolute; left: 0; top: 0.5rem; width: 6px; height: 6px; border-radius: 50%; background: #ffb96b; }
.q-col strong { color: #fff; }

.q-acciones { position: relative; z-index: 2; display: flex; gap: 0.7rem; flex-wrap: wrap; margin-top: 1.3rem; }
.btn-claro { background: #fff; color: #111; border-color: transparent; }
.btn-borde { background: transparent; color: #fff; border-color: rgba(255, 255, 255, .35); }

.q-foto {
  position: relative; z-index: 2; justify-self: center; max-width: 230px;
  border-radius: 28px; overflow: hidden; border: 7px solid #fff; box-shadow: var(--shadow-soft);
}

@media (max-width: 1000px) {
  .quiero { grid-template-columns: 1fr; }
}
@media (max-width: 620px) {
  .quiero { padding: 1.4rem; }
  .q-cols { grid-template-columns: 1fr; }
}
</style>
