import BuildingTypeList from './pages/BuildingTypeList';
import Home from './pages/Home';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Fruits from './pages/Fruits';
import BuildingList from './pages/BuildingList';
import Architects from './pages/Architects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/architects" element={<Architects />} />
        <Route path="/building-list" element={<BuildingList />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/type-list" element={<BuildingTypeList />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}