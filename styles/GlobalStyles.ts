import { createGlobalStyle } from 'styled-components';
import { theme } from './styles';

export const SweetAlertSyle = createGlobalStyle`
  .next-smrt-theme{
    & .swal-title {
      font-weight: 100;
      font-family: 'Oswald', serif;
      color: ${theme.palette.text.primary}; 
    }
    & .swal-text {
      font-weight: 100;
      font-family: 'Oswald', serif;
      color: ${theme.palette.text.primary}; 
    }
   & .swal-icon--success:after, .swal-icon--success:before {
     background: transparent;
   }
   & .swal-icon--success__hide-corners{
    background: transparent; 
   }
    & button {
      background-color: ${theme.palette.secondary.main};
      color: ${theme.palette.getContrastText(theme.palette.secondary.main)};
    }
  }
`;
