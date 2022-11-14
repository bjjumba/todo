
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Search from './Components/Search'
import Edit from './Components/Edit'



function App() {

  return (
    <div className="App">
      <h2>TO DO LIST</h2>
        <NavBar/>
        <Routes>
           <Route path="/" element={<Home/>} exact/>
           <Route path="/search" elememt={<Search/>}/>
           <Route path="/edit" elememt={<Edit/>} />
        </Routes>
        
    </div>
  )
}

export default App
