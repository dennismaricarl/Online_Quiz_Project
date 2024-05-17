import {Routes, Route} from 'react-router-dom';
import TakeAQuiz from './components/TakeAQuiz';
import HomePage from './components/HomePage';
import HTML from './categories/HTML';
import JavaScript from './categories/JavaScript';
import CSSquiz from './categories/CSSquiz';
import Advancedjs from './categories/Advancedjs';
import WomenCS from './categories/WomenCS';


const App = () => {

    return (
      <div className="App">
        <Routes>
        <Route path='/' element= {<HomePage/>}></Route>
        <Route path='/takeAquiz' element={<TakeAQuiz/>}></Route>
        <Route path='/html' element={<HTML/>}> </Route>
        <Route path='/css' element={<CSSquiz/>}> </Route>
        <Route path='/javascript' element={<JavaScript/>}> </Route>
        <Route path='/Advancedjs' element={<Advancedjs/>}> </Route>
        <Route path='/women' element={<WomenCS/>}></Route>
    
        </Routes>
      </div>
    );
  }

  
  export default App;