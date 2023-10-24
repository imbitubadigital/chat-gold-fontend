import { createGlobalStyle, keyframes } from 'styled-components';

export function rotationBuilder() {
  const rotation = keyframes`
        0% {
             transform: rotate(0deg);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
            opacity: .9
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }`;
  return rotation;
}
export const GlobalStyles = createGlobalStyle`
        *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        @media(max-width: 1366px){
            html {
                font-size: 80.75%;
                }
        }
        @media(max-width: 1080px){
            html {
                font-size: 79.75%;
                }
        }
        @media(max-width: 720px){
            html {
                font-size: 78%;
                }
        }
        :focus{
            outline: 0;
        }
        body, input-security, select, textarea, button {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 1rem;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            background: #f1f5f9;


        }
        button, a {
            cursor: pointer;
        }
        a{
            color: inherit;
            text-decoration: none;
        }
        .menu-active{
          background: ${(props) => props.theme.colors.yellow700};
          color: ${(props) => props.theme.colors.white}!important;

         }
        .spinner {
            animation: ${rotationBuilder()} 1.8s linear infinite;
        }
  :root {
    .green-background {
      background-color: ${(props) => props.theme.colors.green100};
    }
    .yellow-background {
      background-color: ${(props) => props.theme.colors.yellow200};

    }
    .red-background {
      background-color: ${(props) => props.theme.colors.red200};
    }
    .Toastify__close-button > svg {
      color: ${(props) => props.theme.colors.gray700};
    }


  --toastify-color-info: #3498db;
  --toastify-color-success: ${(props) => props.theme.colors.green900};
  --toastify-color-warning: ${(props) => props.theme.colors.yellow950};
  --toastify-color-error: ${(props) => props.theme.colors.red900};
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: ${(props) => props.theme.colors.green900};
  --toastify-icon-color-warning: ${(props) => props.theme.colors.yellow950};
  --toastify-icon-color-error: ${(props) => props.theme.colors.red900};

  --toastify-toast-width: 320px;
  --toastify-toast-background: ${(props) => props.theme.colors.gray700};
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: 'Poppins', sans-serif;
  --toastify-z-index: 9999;

  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: ${(props) => props.theme.colors.gray700};

  //Used only for colored theme
  --toastify-text-color-info: ${(props) => props.theme.colors.gray700};
  --toastify-text-color-success: ${(props) => props.theme.colors.gray700};
  --toastify-text-color-warning: ${(props) => props.theme.colors.gray700};
  --toastify-text-color-error: ${(props) => props.theme.colors.gray700};

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

}

`;
