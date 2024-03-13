
import './App.css';

import HomeLogin from './Pages/HomeLogin';
import React from 'react';
import HomeRegister from './Pages/HomeRegister';
import ChooseSport from './Pages/ChooseSport';
import FootballPage from './Pages/FootballPage';
import TennisPage from './Pages/TennisPage';
import HandballPage from './Pages/HandballPage';
import BascketPage from './Pages/BascketPage';
import AccountInfo from './Pages/AccountPage';
import InvitePage from './Pages/InvitesPage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FieldsPage from './Pages/FieldsPage';
import FieldPageConfirmation from './Pages/FieldPageConfirmation';
import AdminPage from './Pages/AdminPage';
import AdminPageFields from './Pages/AdminPageFields';
import AddFieldPage from './Pages/AddFieldPage';
import EmployeePage from './Pages/EmployeePage';

function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path="/" element={<HomeLogin />} /> 
        <Route path="/adminPage/users" element={<AdminPage />} />
        <Route path="/adminPage/fields" element={<AdminPageFields />} />
        <Route path="/adminPage/addFields" element={<AddFieldPage />} />
        <Route path="/employeePage" element={<EmployeePage />} />
        <Route path="/homeregister" element={<HomeRegister />} />
        <Route path="/chooseSport" element={<ChooseSport />} />
        <Route path='/chooseSport/football' element={<FootballPage />} />
        <Route path='/chooseSport/tennis' element={<TennisPage />} />
        <Route path='/chooseSport/handball' element={<HandballPage />} />
        <Route path='/chooseSport/bascket' element={<BascketPage />} />
        <Route path='/chooseSport/accountInfo' element={<AccountInfo />} />
        <Route path='/chooseSport/invite' element={<InvitePage />} />
        <Route path='/chooseSport/football/field/:id' element={<FieldsPage />} />
        <Route path='/chooseSport/tennis/field/:id' element={<FieldsPage />} />
        <Route path='/chooseSport/handball/field/:id' element={<FieldsPage />} />
        <Route path='/chooseSport/bascket/field/:id' element={<FieldsPage />} />
        <Route path='/chooseSport/football/field/:id/confirmation' element={<FieldPageConfirmation />} />
        <Route path='/chooseSport/tennis/field/:id/confirmation' element={<FieldPageConfirmation />} />
        <Route path='/chooseSport/handball/field/:id/confirmation' element={<FieldPageConfirmation />} />
        <Route path='/chooseSport/bascket/field/:id/confirmation' element={<FieldPageConfirmation />} />
      </Routes>
      <div className="App">
      </div>
    </Router>

    </div>

  );
}

export default App;
