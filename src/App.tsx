import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './components/features';
import { Layout } from './components/modules';
import { ModalProvider } from './components/modules/Modal';
import Theme from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <BrowserRouter>
          <ModalProvider>
            <Home />
          </ModalProvider>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
