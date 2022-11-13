import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewLatest from './components/viewLatest';
import ViewAll from './components/viewAll';
import Detail from './components/detail';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ViewLatest />}></Route>
          <Route path="/viewall" element={<ViewAll />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
