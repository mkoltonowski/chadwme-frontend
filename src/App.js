import './App.css';
import UserMessage from './views/userMessage/UserMessage';
import { Routes ,Route} from 'react-router-dom';
import { Navigate  } from 'react-router-dom';
function App() {
  return (

    <div className="App">
      <Routes >
        <Route path='/home' element={<UserMessage/>} />
        <Route path='*' element={<Navigate to='/home'/>} />
      </Routes>
    </div>
  );
}

export default App;
