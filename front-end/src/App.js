import { Route, Routes } from 'react-router-dom';
import { HomeView } from './views/Home';
import { KitchensView } from './views/Kitchens';
import { KitchenDetailView } from './views/KtchenDetail';
import { NotFoundView } from './views/NotFound'

function App() {
  return(
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/kitchens' element={<KitchensView />} />
      <Route path='/kitchens/' element={<KitchenDetailView/>} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  )
}

export default App;
