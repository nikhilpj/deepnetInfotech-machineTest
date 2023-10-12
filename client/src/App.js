import Category from './pages/Category';
import Products from './pages/Products';
import AllCategory from './pages/AllCategory';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Category/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/allcategory' element={<AllCategory/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
