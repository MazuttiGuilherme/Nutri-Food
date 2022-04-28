import { Route, Routes } from 'react-router-dom';
import { DashboardView } from './views/Dashboard';
import { HomeView } from './views/Home';
import { KitchensView } from './views/Kitchens';
import { KitchenDetailView } from './views/KtchenDetail';
import { LoginView } from './views/Login';
import { NotFoundView } from './views/NotFound'

function App() {
  return(
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/kitchens' element={<KitchensView />} />
      <Route path='/kitchen/:id' element={<KitchenDetailView/>} />
      <Route path='/portal' element={<DashboardView />}/>
      <Route path='/portal/login' element={<LoginView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  )
}

export default App;
