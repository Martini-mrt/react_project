import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Аналог __dirname в ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  server: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, './ssl/localhost.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, './ssl/localhost.crt')),
    // },
    host: true, // 👈 разрешает доступ по IP
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://cinemaguide.skillbox.cc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // '/translate': {
      //   target: 'https://translate.googleapis.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/translate/, '/translate'),
      // },
    },
  },
});


// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://cinemaguide.skillbox.cc',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });

