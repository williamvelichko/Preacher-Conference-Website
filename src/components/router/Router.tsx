import { lazy, Suspense } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegistrationPage from '../pages/RegistrationPage';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes = [
    { path: '/', element: <LandingPage /> },
    { path: 'register', element: <RegistrationPage /> },
  ];
  const element = useRoutes(routes);
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default Router;
