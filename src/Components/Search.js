import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';
import './Search.css'

function Search(props) {
    let [Search, setSearch] = useState('')

    const handleDelete = (index) => {
        props.reservations.splice(index, 1)
        props.setReservations([...props.reservations])
    }

    return (
        <div style={{
            margin: '20px'
        }}>

            <TextField style={{
                backgroundColor: "white"
            }} value={Search} onChange={(e) => setSearch(e.target.value)} className="Search-Bar" id="outlined-basic" label="First Name" variant="outlined" />
            <Button variant="contained" size="medium"
                style={{
                    marginLeft: "50px",
                    marginTop: "8px"
                }}>
                Search by FIRST NAME
            </Button>

            <Card className='Card'>
                <form className='Grid-cont'>
                    <h3>First Name</h3>
                    <h3>Last Name</h3>
                    <h3>E-Mail</h3>
                    <h3>Delete</h3>
                </form>
                <hr class="solid" />
                {props.reservations.filter((user) => Search.length ? user.firstName.includes(Search) : user).map((user, index) =>
                    <form className='Grid-cont'>
                        <h3>{user.firstName}</h3>
                        <h3>{user.lastName}</h3>
                        <h3>{user.email}</h3>
                        <Button variant="outlined" color="error" style={{ margin: "15px" }} onClick={() => handleDelete(index)}>
                            Delete
                        </Button>
                    </form>
                )}
            </Card>

        </div >

    )
}

export default Search