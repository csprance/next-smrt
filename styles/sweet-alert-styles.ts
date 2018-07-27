import { injectGlobal } from 'styled-components';
import { darkGray, orange, white } from './colors';

export const injectSweetAlertStyles = () => {
  injectGlobal`
  .mis-theme-swal{
    background-color: ${darkGray};
    & .swal-title {
      font-weight: 100;
      font-family: 'Oswald', serif;
      color: ${white}; 
    }
    & .swal-text {
      font-weight: 100;
      font-family: 'Oswald', serif;
      color: ${white}; 
    }
   & .swal-icon--success:after, .swal-icon--success:before {
     background: transparent;
   }
   & .swal-icon--success__hide-corners{
    background: transparent; 
   }
    & button {
      background-color: ${orange};
      color: ${white};
    }
  }
`;
};
