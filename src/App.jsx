import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './utils/auth/AuthContext';
import Layout from './Components/AppLayout/Layout';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout content="landing" />} />
          <Route path="/dashboard" element={<ProtectedContent content="dashboard" />} />
          <Route path="/landing" element={<Layout content="landing" />} />
          {/* Ensure all necessary routes are covered */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const ProtectedContent = ({ content }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Layout content={content} /> : <Navigate to="/landing" />;
};

export default App;