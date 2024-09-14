/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Removed extra period and fixed syntax
    './public/index.html',        // Correctly specify HTML path
  ],
  theme: {
    extend: {
      sans: ["Open Sans"]
    },
   
      
    
  },
  plugins: [require('@tailwindcss/forms')],
}
