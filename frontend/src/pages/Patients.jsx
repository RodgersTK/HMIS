import React from 'react';
import PatientForm from '../components/PatientForm';
import Menu from '../components/Menu';
import Header from '../components/Header';


function Patients() {
  return (
    <div>
      <Header />
      <Menu />
      <PatientForm />

    </div>
  );
}

export default Patients;