import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route to='/' element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
