import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/sms/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 50000,
    
  },
})
