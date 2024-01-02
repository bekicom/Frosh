import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';
import 'global/style.css';
import Header from 'components/header';
import Footer from 'components/footer';

function App() {
  return (
    <div className="app-container">
      <div className="space-top-container">
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
