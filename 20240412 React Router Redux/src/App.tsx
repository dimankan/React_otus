import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Page1 from './components/pages/Page 1/Page1';
import Page2 from './components/pages/Page 2/Page2';
import Home from './components/pages/Home/Home';
import OrdererMain from './components/pages/Orderer';


import { PageWithParams } from './components/pages/Page 2/Page2Specific';



import ApeList from './components/pages/Ape/ApeList';
import Ape300 from './components/pages/Ape/Ape';
// import Thunk from './components/pages/ThunkDemo/Thunk';
import apeRoutings, { routes } from './components/pages/Ape/routes';
import Ape from './components/pages/Ape/Ape';



const LazyPage2 = React.lazy(() => import('./components/pages/Page 2/Page2'));
function App() {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <Link to={'/page1'}>страница 1</Link>
          </li>
          <li>
            <Link to={'/page2'}>страница 2</Link>
          </li>
          <li>
            <Link to={'/orderer'}>Цветные кнопки</Link>
          </li>
          <li>
            <Link to={'/ape'}>Пользователи</Link>
          </li>
          <li>
            <Link to={'/funky'}>Funky</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* localhost:3000/page1 */}
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={
          <React.Suspense fallback={<span>............................</span>}>
            <LazyPage2 />
          </React.Suspense>} />

        <Route path="page2/:id/:fancy?" element={<PageWithParams />} />
        <Route path="orderer" element={<OrdererMain />} />
        <Route path="ape">
          <Route index element={<ApeList />} />,
          <Route path=":username" element={<Ape />} />,
          <Route path=":username/edit" element={<Ape />} />
          {/* {routes} */}

        </Route>

        <Route path="*" element={<span>404</span>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
