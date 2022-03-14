import { Route, Routes } from 'react-router-dom'
import { Welcome } from '../screens/Welcome'


/**
 * 
 * @returns navigation route component
 */
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Welcome/>}/>
    </Routes>
  )
}
