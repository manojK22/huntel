import React from "react"
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function MuiPicker(props) {
    return (
        <Stack spacing={4} sx={{ width: '250px', marginRight: '25px' }}>
            <DatePicker
                label={props.propName}
                renderInput={(params) => <TextField {...params} error={false} />}
                name={props.name}
                value={props.value}
                onChange={(date) => props.onChange(props.name, date)} >
            </DatePicker>
        </Stack>
    )
}

export default MuiPicker