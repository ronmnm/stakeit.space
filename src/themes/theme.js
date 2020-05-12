
let independence = '#4d5061';
let independenceHover = '#4A4C5F';
let independenceDark = '#2f333c';
let eerieBlack = '#1a1c1e'

export const theme = (dark) => ({ 
   darkMode: dark,
   body: dark ? eerieBlack : 'white',
   // text
   textPrimary: dark ? '#F6F9FF' : '#111',
   textSecondary: dark ? '#9ea0a1' : '#5A5A5A',
   text3: dark ? '#b3b3b3' : '#C5C5C5',
   textPale: dark ? '#red' : 'grey',
   textWhiteBlue: dark ? 'white' : '#0065ff',

   // elements
   footerBackground: dark ? eerieBlack : '#f9f9f9',
   footerBorder: dark ? '#333' : '#eee',
   svgFooter: dark ? '#d8d8f6' : '#999',
   svgFooterHover: dark ? '#FFD25B' : '#FFC95B',
   addressBackground: dark ? '' : '#f9f9f9',

   backgroundPale: dark ? independence : '#f3f3f3',
   background2: dark ? independence : '#e9e9e9',
   background4: dark ? independence : '#dfdfdf',
   background3: dark ? independence : '#BDBDBD',
   backgroundError: dark ? '#301414' : '#fff8f8',

   independenceDark: dark ? independenceDark : '#f8f8f8',
   independenceDarkHover: dark ? '#23252C' : '#f8f8f8',
   backgroundPaleHover: dark ? independenceHover : '#E5E5E5',
   buttonPrimary: dark ? '#3A70FF' : '#2d80ff',
   buttonBlueHover: dark ? '#386CF7' : '#2C7CF6',
   buttonBlueText: dark ? '#d2eafc' : 'white',

   blue: '#588cff',
   lightBlue: '#128FFF',
   hoverBlue: '#0069e0',
   
   greyText: '#b3b3b3',
   darkGrey: '#303030'
});
