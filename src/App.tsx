import { GlobalStyles } from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './contexts';
function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AppProvider>
            <AppRoutes />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </AppProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
