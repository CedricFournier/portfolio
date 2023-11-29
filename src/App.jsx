import '../src/assets/style/main.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './compoments/Layout';
import Home from './pages/Home';
import Signin from './pages/Signin';
import RequireAuth from './compoments/RequireAuth';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/Signin' element={<Signin />} />
        <Route element={<RequireAuth />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
