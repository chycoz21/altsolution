import ContainerDashboard from './@containerDashboard'
import router from './@router'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <ContainerDashboard>
        <Routes>
          {
            router.map((element, path, index) => {
              return (
                <Route element={element} path={path} key={index} />
              )
            })
          }
        </Routes>
      </ContainerDashboard>
    </>
  )
}

export default App
