import { Routes, Route } from 'react-router-dom';
import './App.css';
import JobRegistrationForm from './Components/JobRegistrationForm';
import ViewFormData from './Views/ViewFormData';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<JobRegistrationForm />} />
        <Route exact path='/view/details' element={<ViewFormData />} />
      </Routes>
    </>
  );
}

export default App;
