import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './Component/Content';
import Home from './Component/Home';
import Creator from './Component/Creator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Content />
      <Routes>
        <Route path="/" element={<Home />}>/</Route>
        <Route path="/add" element={<Creator />}>/</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
