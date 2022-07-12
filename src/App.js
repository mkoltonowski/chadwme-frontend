import './App.css';
import VMenu from './components/VMenu/VMenu';
import UserMessage from './views/userMessage/UserMessage';
import { Routes ,Route} from 'react-router-dom';
import { Navigate} from 'react-router-dom';
import HomeView from './views/homeView/HomeView';
import {MenuContextProvider} from './context/MenuContext';
import Header from './components/Header/Header';

function App() {

  const MenuLocations = [
    {path: '/home', linkName: 'Strona główna'},
    {path: '/userMessages', linkName: 'Wiadomości'},
  ];


  return (
    
    <div className="App">
      <Routes >
        <Route path='/userMessages' element={<UserMessage/>} />
        <Route path='/home' element={<HomeView/>} />
        <Route path='/notFound' element={<HomeView/>} />
        <Route path='*' element={<Navigate to='/notFound'/>} />
      </Routes>
        <MenuContextProvider>
          <VMenu toggleStatus={false}/>
          <Header locations={MenuLocations} />
        </MenuContextProvider>
    </div>
    
  );
}

export default App;
