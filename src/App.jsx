import '../src/assets/style/main.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './compoments/Layout';
import Home from './pages/Home';
import Signin from './pages/Signin';
import RequireAuth from './compoments/RequireAuth';
import Admin from './pages/Admin';
import Error from './pages/Error';
import Projet from './pages/Projet';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path="*" element={<Error />} />
        <Route element={<RequireAuth />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
