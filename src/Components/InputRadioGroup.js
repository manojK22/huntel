import React from 'react'
import {RadioGroup,FormControlLabel, Radio} from '@mui/material' 
function InputRadioGroup() {
  return (
    <RadioGroup
    row
    name="row-radio-buttons-group"
  >
    <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
    <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
    <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
    <FormControlLabel value="Bitcoin" control={<Radio />} label="BitCoin" />
   
  </RadioGroup>
  )
}

export default InputRadioGroup