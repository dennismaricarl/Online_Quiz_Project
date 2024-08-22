import {Routes, Route} from 'react-router-dom';
import TakeAQuiz from './components/TakeAQuiz';
import HomePage from './components/HomePage';
import HTML from './categories/HTML';
import JavaScript from './categories/JavaScript';
import CSSquiz from './categories/CSSquiz';
import Advancedjs from './categories/Advancedjs';
import WomenCS from './categories/WomenCS';
import MakeAQuiz from './components/MakeAQuiz';
import YourQuiz from './categories/YourQuiz';


const App = () => {

    return (
      <div className='h-screen bg-gray-500 '>
        <Routes>
        <Route path='/' element= {<HomePage/>}></Route>
        <Route path='/takeAquiz' element={<TakeAQuiz/>}></Route>
        <Route path='/html' element={<HTML/>}> </Route>
        <Route path='/css' element={<CSSquiz/>}> </Route>
        <Route path='/javascript' element={<JavaScript/>}> </Route>
        <Route path='/advancedjs' element={<Advancedjs/>}> </Route>
        <Route path='/womenincs' element={<WomenCS/>}></Route>
        <Route path='/makeAquiz' element={<MakeAQuiz/>}></Route>
        <Route path='/yourQuiz' element={<YourQuiz/>}></Route> 
    
        </Routes>
        
      </div>
    );
  }

  
  export default App;