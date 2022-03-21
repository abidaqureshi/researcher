import { AppLayout } from './containers/Layout';
import { Routes, Route } from 'react-router-dom';
import { Researchers } from './pages/researcher';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Researchers />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
