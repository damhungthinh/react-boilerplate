import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Menu } from '../components/Shop/Menu'
import 'antd/dist/antd.css'

export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}
