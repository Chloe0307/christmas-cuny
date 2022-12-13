/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    colors : {
      primary: " #095228",
      secondary : "#7d2e31",
      tertiary : '#da554c',
      greyDark : '#8c917d',
      greyLight : '#d7c7ba',
      greyBG : '#e8e3e0',
      white : '#ffffff',
    },
    space : {
      0 : '0px',
      4 : '4px',
      6 : '6px',
      8 : '8px',
      12 : '12px',
      16 : '16px',
      20 : '20px',
      24 : '24px',
      32 : '32px',
      40 : '40px',
      48 : '48px',
      56 : '56px',
      60 : '60px',
    },
    fontSize : {
      xs : '12px',
      s : '16px', 
      m : '24px',
      l : '32px',
      xl : '36px',
      '2xl' : '40px',
    },
    borderRadius : {
      xs : '2px',
      s : '4px',
      m : '6px',
    },
    fontFamily : {
      nero : 'Nerko One', 
    },
    extend: {},
  },
  plugins: [],
}
