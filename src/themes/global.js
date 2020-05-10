import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   html{
      height: 100%;
   }
   body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow-y: scroll;
      font-family: 'Open Sans', sans-serif;
      background-color: ${({ theme }) => theme.body};
      color: #eee;
   }

   /* width */ 
   body::-webkit-scrollbar {
      width: 10px;
   }

   /* Track */
   body::-webkit-scrollbar-track {
      background: #222;
   }

   /* Handle */
   body::-webkit-scrollbar-thumb {
      background: #444;
      border-radius: 6px;
   }



   /* body::-webkit-scrollbar {
   width: 11px;
   } */


`;
