module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Specify the path to your React files
      "./public/index.html", // Include the HTML files
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4CAF50', // Custom primary color
          secondary: '#333', // Custom secondary color
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Custom font family for sans-serif
          heading: ['Poppins', 'sans-serif'], // Custom font family for headings
        },
      },
    },
    plugins: [],
  }
  