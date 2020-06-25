import styled from 'styled-components';
import {shade} from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';


export const Container = styled.div `

  height: 100vh; /* Caber tudo na tela */
  display:flex;
  align-items: stretch;  /* Estica ao maximo que puder */

`;

export const Content = styled.div `

  display: flex;
  flex-direction: column; /* Coluna ->  a logo com o formulario */
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;


  form{
    margin: 80px;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }

    a{
      color: #f4ede8;
      display:block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover{
        color: ${shade(0.2,'#f4ede8')};
      }
    }
  }

    /* QUero estilizar as ancoras que está dentro apenas do content e não de outros niveis */
  > a{
    color: #F4EDE8;
      display:block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      display: flex;
      align-items: center;

      svg{
        margin-right: 16px;
      }

      &:hover{
        color: ${shade(0.2, '#F4EDE8')};
      }
  }
`;

export const Background = styled.div `
  flex: 1; /* Ocupa todo o espaço, menos o 700px -> ele é flexivel */
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
