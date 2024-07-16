
import MainLayout from './components/layout/Main'
import ProtectedRoutes from './components/layout/ProtectedRoutes'

function App() {

  return (
    <>
      <ProtectedRoutes>

      <MainLayout />
      </ProtectedRoutes>
      
    </>
  )
}

export default App
