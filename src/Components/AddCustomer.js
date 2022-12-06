import React from 'react'
import MuiPicker from './MuiPicker';
import { Card, TextField, Autocomplete, FormGroup, FormControlLabel, Switch, Checkbox } from '@mui/material';
import './MuiPicker.css'
import Select from './Select'
import InputTextField from "./InputTextField"
import InputRadioGroup from "./InputRadioGroup";
import DisplayErrorMessage from "./DisplayErrorMessage"
import { useFormik } from 'formik';
import * as yup from "yup";

const autoTags = [
    "manoj",
    "2",
    "Hotel",
    "haha"
]


function AddCustomer({ setReservations, setForm, reservations }) {

    const formik = useFormik({
        initialValues: {
            dateOfArr: '',
            dateOfDep: '',
            roomSize: '',
            roomQty: '',
            fName: '',
            lName: '',
            email: '',
            phNum: '',
            stName: '',
            stNum: '',
            zip: '',
            prov: '',
            city: '',
            extras: '',
            personalNote: '',
            tags: ['manoj'],
            remCheck: '',
            letterCheck: '',
            confirmCheck: ''
        },
        validationSchema: yup.object().shape({
            dateOfArr: yup.string().required("sai jeevan balla"),
            dateOfDep: yup.string().required(),
            roomSize: yup.string(),
            roomQty: yup.number().min(1).max(5).required(),
            fName: yup.string().test('len', 'upTo 25 characters', val => val && val.length <= 25),
            lName: yup.string().test('len', 'upTo 25 characters', val => val && val.length <= 50),
            email: yup.string().email().required(),
            phNum: yup.number(),

        }),
        onSubmit: value => {
            setReservations([...reservations, { ...value, firstName: value.fName, lastName: value.lName, email: value.email, }])
            setForm(false)
        },
    });

    const defaultInputProps = (property, onChange) => ({
        onChange: onChange || formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values[property],
        name: property,
    });

    const defaultErrorProps = (property) => ({
        touched: formik.touched[property],
        error: formik.errors[property],
    });

    const defaultButtonProps = () => ({
        // disabled: formik.isSubmitting || !formik.isValid || !formik.dirty,
        onClick: formik.handleSubmit,
        type: "submit",
    });

    return (

        <div>
            <Card className="Card">
                <form className='Grid-cont' onSubmit={formik.handleSubmit} >
                    <div>
                        <MuiPicker {...defaultInputProps('dateOfArr', formik.setFieldValue)} propName="Date Of Arrival" />
                        <DisplayErrorMessage {...defaultErrorProps('dateOfArr')} />
                    </div>
                    <div >
                        <MuiPicker {...defaultInputProps('dateOfDep', formik.setFieldValue)} propName="Date Of Departure" />
                        <DisplayErrorMessage {...defaultErrorProps('dateOfDep')} />
                    </div>
                    <div className=" new-row">
                        <Select propName="Room Size" values={["Small", "Medium", "Large"]} {...defaultInputProps('roomSize')}></Select>
                        <DisplayErrorMessage {...defaultErrorProps('roomSize')} />

                    </div>
                    <div>
                        <InputTextField propName="Room Quantity" helperText="Maximun: 5" {...defaultInputProps('roomQty')}></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('roomQty')} />
                    </div>
                    <div className=" new-row">
                        <InputTextField {...defaultInputProps('fName')} propName="First Name" helperText={`${formik.values.fName.length}/25`}></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('fName')} />
                    </div>
                    <div className=" new-row">
                        <InputTextField {...defaultInputProps('lName')} propName="Last Name" helperText={`${formik.values.lName.length}/50`}></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('lName')} />

                    </div>
                    <div className=" new-row">
                        <InputTextField {...defaultInputProps('email')} propName="E-mail" helperText={null} />
                        <DisplayErrorMessage {...defaultErrorProps('email')} />
                    </div>
                    <div className=" new-row">
                        <InputTextField {...defaultInputProps('phNum')} propName="Phone Number" helperText="Add your country code first"></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('phNum')} />
                    </div>
                    <div className=" new-row">
                        <InputTextField  {...defaultInputProps('stName')} propName="Street Name" helperText=""></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('stName')} />
                    </div>
                    <div>
                        <InputTextField {...defaultInputProps('stNum')} propName="Street Number" helperText=""></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('stNum')} />
                    </div>
                    <div className=" new-row">
                        <InputTextField {...defaultInputProps('zip')} propName="Zip" helperText=""></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('zip')} />
                    </div>
                    <div>
                        <InputTextField {...defaultInputProps('prov')} propName="State" helperText="AutoComplete"></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('prov')} />
                    </div>
                    <div>
                        <InputTextField {...defaultInputProps('city')} propName="City" helperText=""></InputTextField>
                        <DisplayErrorMessage {...defaultErrorProps('city')} />
                    </div>
                    <div className=" new-row">
                        <Select {...defaultInputProps('extras')} propName="Extras" values={["BreakFast", "TV", "WiFi", "Laundry", "Kitchen"]}></Select>
                        <DisplayErrorMessage {...defaultErrorProps('extras')} />
                    </div>
                    <div className=" new-row" style={{ width: "500px" }}>
                        <InputRadioGroup {...defaultInputProps('payment')}></InputRadioGroup>
                        <DisplayErrorMessage {...defaultErrorProps('payment')} />
                    </div>
                    <div className=" new-row">
                        <TextField
                            {...defaultInputProps('personalNote')}
                            id="outlined-multiline-static"
                            label="Personal Note"
                            multiline
                            rows={2}
                        />
                        <DisplayErrorMessage {...defaultErrorProps('personalNote')} />
                    </div>
                    <div className=" new-row">
                        <Autocomplete
                            name="tags"
                            multiple
                            limitTags={2}
                            id="multiple-limit-tags"
                            defaultValue={formik.values.tags}
                            options={autoTags}
                            getOptionLabel={option => option}
                            renderInput={(params) => (
                                <TextField {...params} label="limitTags" placeholder="Favorites" />
                            )}
                            sx={{ width: '500px' }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <DisplayErrorMessage {...defaultErrorProps('tags')} />
                    </div>
                    <div className=" new-row" style={{ width: "500px" }}>
                        <FormGroup>
                            <FormControlLabel {...defaultInputProps('remCheck')} control={<Switch defaultChecked />} label="Send me a Remainder" />
                            <FormControlLabel  {...defaultInputProps('letterCheck')} control={<Switch />} label="Subscribe to newsletter" />
                            <FormControlLabel  {...defaultInputProps('confirmCheck')} control={<Checkbox defaultChecked />} label="I confirm the information above" />
                        </FormGroup> </div>
                    <button {...defaultButtonProps()} >Submit</button>
                </form>

            </Card>
        </div >

    )
}

export default AddCustomer