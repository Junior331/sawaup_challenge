import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './components/features';
import { ContentProvider } from './components/features/Home/userContext';
import { Layout } from './components/modules';
import { ModalProvider } from './components/modules/Modal';

import Theme from './styles/Theme';

const App = () => {
  return (
    <ContentProvider>
      <ThemeProvider theme={Theme}>
        <Layout>
          <BrowserRouter>
            <ModalProvider>
              <Home />
            </ModalProvider>
          </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </ContentProvider>
  );
};

export default App;
