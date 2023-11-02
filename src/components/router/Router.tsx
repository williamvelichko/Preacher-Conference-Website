import { lazy, Suspense } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegistrationPage from '../pages/RegistrationPage';
import SchedulePage from '../pages/SchedulePage';
import SpeakersPage from '../pages/SpeakersPage';
import NavBar from '../smaller-components/NavBar';
import Footer from '../smaller-components/Footer';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <InnerRouter />
      </Layout>
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes = [
    { path: '/', element: <LandingPage /> },
    { path: '/register', element: <RegistrationPage /> },
    { path: '/schedule', element: <SchedulePage /> },
    { path: '/speakers', element: <SpeakersPage /> },
  ];
  const element = useRoutes(routes);
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default Router;
