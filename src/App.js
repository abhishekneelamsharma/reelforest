import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import route from './routes/route'
import Myparticle from './components/Particles'

const App = () => { 
  const location = useLocation();
  const { pathname } = location
  console.log(pathname);
  return (
    <>

      {location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/language" && <Header />}
      {location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/language" && < Sidebar />}
      {
        route.map((ele, ind) =>
          <Routes>
            <Route path={ele.path} element={ele.element} />
          </Routes>
        )
      }
      <div className='particle-js'>
        <Myparticle/>
      </div>
    </>
  )
}

export default App