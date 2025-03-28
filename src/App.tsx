import { Route, Routes } from 'react-router-dom'
import './App.css'
import DocumentPage from './pages/DocumentPage'
import SelectionPage from './pages/SelectionPage';
import { Toaster } from 'sonner';
// import Signup from './pages/Signup';
// import Login from './pages/Login';

function App() {

  return (
    <>
    <Toaster/>
      <Routes>
        <Route path='/' element={<DocumentPage/>} />
        <Route path='/select' element={<SelectionPage/>} />
        {/* <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} /> */}
      </Routes>
    </>
  )
}

export default App;
