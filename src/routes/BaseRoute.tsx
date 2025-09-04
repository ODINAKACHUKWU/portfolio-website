import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export const BaseRoute: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, element }, i) => (
        <Route key={i} path={path} element={element} />
      ))}
    </Routes>
  );
};
