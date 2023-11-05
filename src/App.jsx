import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {routes} from './router/NavRouter'
import CarritoContext from './context/CarritoContext';

const App = () => {

  return(
    <>
    <Router>
      <CarritoContext>
      <NavBar/>
      <Routes>
        <Route /* element={<Layout />} */>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      <Footer/>
      </CarritoContext>
    </Router>
    
    </>   
  );
};

export default App;
