import { HelmetProvider } from 'react-helmet-async';
import Main from '~/components/root/Main';
import Footer from '../smaller-components/Footer';
export const App = () => {
  return (
    <HelmetProvider>
      <Main />
    </HelmetProvider>
  );
};
