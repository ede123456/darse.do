# DarsePOS

## Ejecutar el proyecto

```powershell
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Formulario de contacto

El formulario ya esta conectado a una API interna de Nuxt y envia correos a `info@darse.do`.

Antes de usarlo en produccion, crea un archivo `.env` basado en `.env.example` y completa estos valores:

```env
NUXT_SMTP_HOST=
NUXT_SMTP_PORT=587
NUXT_SMTP_USER=
NUXT_SMTP_PASS=
NUXT_SMTP_SECURE=false
NUXT_CONTACT_TO_EMAIL=info@darse.do
NUXT_CONTACT_FROM_EMAIL=
```

Notas:

- `NUXT_CONTACT_TO_EMAIL` ya apunta a `info@darse.do`.
- `NUXT_CONTACT_FROM_EMAIL` debe ser un correo valido permitido por tu servidor SMTP.
- Si el SMTP no esta configurado, el formulario mostrara un mensaje indicando que falta la configuracion del servidor.
