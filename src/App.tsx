import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './components/features';
import { Layout } from './components/modules';
import Theme from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
