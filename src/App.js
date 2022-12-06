import React, { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import AddCustomer from './Components/AddCustomer';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import data from './reservations.json';


function App() {
  const [reservations, setReservations] = useState(data)
  const [form, setForm] = useState(false)

  console.log(reservations)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App" style={{backgroundColor:"#f2f2f2", height: "100vh"}}>
        {!form ? <Button style={{
             width: "90%",
             marginTop: "10px",
             marginLeft: "auto",
             marginRight: "auto",

        }} variant="contained" onClick={() => setForm(val => !val)} startIcon={<AddIcon />}  >
          ADD CUSTOMER
        </Button> : null}
        {form ? <AddCustomer setForm={setForm} setReservations={setReservations} reservations={reservations} /> : <Search setReservations={setReservations} reservations={reservations} />}
      </div>
    </LocalizationProvider>
  );
}

export default App;
