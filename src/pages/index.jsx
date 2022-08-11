import { BrowserRouter, Route, Routes } from 'react-router-dom';
import allRoutes from '../constants/routes';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((route, index) => (
          <Route path={route.path} key={index} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
