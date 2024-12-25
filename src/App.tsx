import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import RepositoryScreen from './pages/RepositoryScreen';
import SignIn from './pages/Signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RepositoryScreen />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}