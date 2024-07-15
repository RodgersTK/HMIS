import React from 'react';
import Menu from '../components/Menu';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentTable from '../components/AppointmentTable';
import Header from '../components/Header';


function Appointment() {
  return (
    <div>
      <Header />
      <Menu />
      <AppointmentForm />
      <AppointmentTable />

    </div>
  );
}

export default Appointment;