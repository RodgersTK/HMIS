import React from 'react';
import DoctorForm from '../components/DoctorForm';
import DoctorTable from '../components/DoctorTable';
import Menu from '../components/Menu';
import Header from '../components/Header';


function Doctor() {
  return (
    <div>
      <Header />
      <Menu />
      <DoctorForm />
      <DoctorTable />

    </div>
  );
}

export default Doctor;