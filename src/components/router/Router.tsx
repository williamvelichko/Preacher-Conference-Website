import { Suspense } from 'react';
import { useRoutes, HashRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegistrationPage from '../pages/RegistrationPage';
import SchedulePage from '../pages/SchedulePage';
// import SpeakersPage from '../pages/SpeakersPage';
import NavBar from '../smaller-components/NavBar';
import Footer from '../smaller-components/Footer';
import ScrollToTop from './ScrollToTop';
import Loader from '../smaller-components/Loader';

const Loading = () => <Loader />;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <NavBar />
      <div className="mt-16">{children}</div>
      <Footer />
    </div>
  );
};

export const Router = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <InnerRouter />
      </Layout>
    </HashRouter>
  );
};

const InnerRouter = () => {
  const routes = [
    { path: '/', element: <LandingPage /> },
    { path: '/register', element: <RegistrationPage /> },
    { path: '/schedule', element: <SchedulePage /> },
    // { path: '/speakers', element: <SpeakersPage /> },
  ];
  const element = useRoutes(routes);
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default Router;
