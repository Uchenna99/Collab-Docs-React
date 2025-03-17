import { Route, Routes } from 'react-router-dom'
import './App.css'
import DocumentPage from './pages/DocumentPage'
import SelectionPage from './pages/SelectionPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<DocumentPage/>} />
        <Route path='/select' element={<SelectionPage/>} />
      </Routes>
    </>
  )
}

export default App;
