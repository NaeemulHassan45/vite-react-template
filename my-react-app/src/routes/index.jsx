import Landing from '@/pages/Landing';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default Routing;
