# Lumina Store

Tienda online moderna construida con HTML, CSS y JavaScript puro, con una experiencia visual premium inspirada en e-commerce minimalistas.

## Demo

Cuando GitHub Pages este activo, el sitio quedara disponible en:

[https://ede123456.github.io/tiendaonline.luminastore/](https://ede123456.github.io/tiendaonline.luminastore/)

## Caracteristicas

- Diseno responsive para moviles, tablets y escritorio
- Navbar elegante con menu adaptativo
- Hero principal con llamada a la accion
- Catalogo con 6 productos de ejemplo realistas
- Filtros por categoria
- Busqueda en tiempo real
- Carrito lateral funcional
- Persistencia del carrito con `localStorage`
- Actualizacion de cantidades y calculo automatico del total
- Compra rapida por WhatsApp con resumen del pedido
- Enlace visible a Instagram
- Animaciones suaves y feedback visual al agregar productos

## Estructura

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- .nojekyll
`-- README.md
```

## Tecnologias

- HTML5
- CSS3
- JavaScript Vanilla

## Uso local

1. Clona el repositorio:

```bash
git clone https://github.com/ede123456/tiendaonline.luminastore.git
```

2. Entra en la carpeta del proyecto:

```bash
cd tiendaonline.luminastore
```

3. Abre `index.html` en tu navegador.

## GitHub Pages

El proyecto ya incluye un workflow en `.github/workflows/deploy-pages.yml` para desplegar automaticamente el sitio con GitHub Actions en cada push a `master`.

Configuracion recomendada en GitHub:

- Source: `GitHub Actions`

Tambien se incluye el archivo `.nojekyll` para evitar que GitHub Pages procese el sitio con Jekyll y publicar los archivos estaticos directamente.

## Personalizacion rapida

- Edita los productos en `script.js`
- Cambia colores y estilos en `styles.css`
- Actualiza textos y estructura en `index.html`
- Sustituye el numero de WhatsApp en `script.js`
- Cambia los enlaces de Instagram y contacto en `index.html`

## Licencia

Proyecto de ejemplo para uso educativo o comercial con personalizacion libre.
