import '../src/assets/style/main.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './compoments/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
