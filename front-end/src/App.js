import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { DashboardView } from './views/Dashboard';
import { HomeView } from './views/Home';
import { KitchensView } from './views/Kitchens';
import { KitchenDetailView } from './views/KitchenDetail';
import { LoginView } from './views/Login';
import { NotFoundView } from './views/NotFound'
import { AdminKitchensView } from './views/AdminKitchens';
import { AdminAddKitchenView} from './views/AdminAddKitchen'
import { AdminEditKitchenView } from './views/AdminEditKitchen';

function App() {
  return(
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/kitchens' element={<KitchensView />} />
      <Route path='/kitchen/:id' element={<KitchenDetailView/>} />
      <Route path='/portal' element={<PrivateRoute><DashboardView /></PrivateRoute>}/>
      <Route path='/portal/kitchens' element={<PrivateRoute userTypes={[1]}><AdminKitchensView /></PrivateRoute>} />
      <Route path='/portal/kitchens/cadastro' element={<PrivateRoute userTypes={[1]}><AdminAddKitchenView /></PrivateRoute>} />
      <Route path='/portal/kitchens/:id' element={<PrivateRoute userTypes={[1]}><AdminEditKitchenView /></PrivateRoute>} />
      <Route path='/portal/login' element={<LoginView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  )
}

export default App;
