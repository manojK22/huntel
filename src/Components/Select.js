import { Box, TextField, MenuItem, FormHelperText } from '@mui/material'
import React, { useState } from 'react'

function Select(props) {
    const [country, setCountry] = useState('')
    const handleChange = (event) => {
        setCountry(event.target.value)
    }

    return (
        <Box width="250px" >
            <TextField
                label={props.name}
                select
                value={country}
                onChange={handleChange}
                fullWidth >
                {props.values.map((valuex,index) => <MenuItem key={index}  value={valuex}>{valuex}</MenuItem>)}
            </TextField>
            <FormHelperText>Choose a Room Type</FormHelperText>
        </Box >
    )
}

export default Select
