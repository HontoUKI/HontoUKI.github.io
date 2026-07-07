import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site served at the domain root (https://hontouki.github.io) → base '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 5175 },
});
