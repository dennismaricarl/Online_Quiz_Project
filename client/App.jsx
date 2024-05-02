import {Routes, Route} from 'react-router-dom';
import TakeAQuiz from './components/TakeAQuiz';
import HomePage from './components/HomePage';

const App = () => {

    return (
      <div className="App">
        <Routes>
        <Route path='/' element= {<HomePage/>}></Route>
        <Route path='/takeAquiz' element={<TakeAQuiz/>}></Route>
        </Routes>
      </div>
    );
  }

  
  export default App;