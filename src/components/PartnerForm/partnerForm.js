import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikNeeds/FormikControl'
import firebase from '../firebase'
import { Button } from '@material-ui/core'

import './partnerForm.css'

const PartnerForm = () => {

    const checkboxOptions = [
        { key: 'BreakFast', value: 'BreakFast' },
        { key: 'Lunch', value: 'Lunch' },
        { key: 'Dinner', value: 'Dinner' }
    ]

    const initialValues = {
        name: '',
        mobile: '',
        availability: [],
        locality: '',
        pincode: '',
        city: 'Pune',
        details: '',

    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object({

        name: Yup.string().required('Name is Required'),
        mobile:
            Yup.string()
                .matches(phoneRegExp, 'Enter a valid Number')
                .length(10, 'Mobile Number should be 10 digits only')
                .required('Mobile Number is Required'),
        locality: Yup.string().required('Locality is Required'),
        pincode: Yup.string()
            .matches(phoneRegExp, 'Enter a valid Number')
            .length(6, 'PinCode should be 6 digits only')
            .required('PinCode is Required'),
        availability: Yup.array().required('Select Atleast One Slot'),

    })
    const onSubmit = (values) => {



        firebase.firestore().collection('providers').add({
            name: values['name'],
            mobile: values['mobile'],
            locality: values['locality'],
            city: values['city'],
            availability: values['availability'],
            pincode: values['pincode'],
            details: values['details']
        }).then(() => {
            alert('Response has been submitted')
            window.location.reload();
        })
            .catch((error) => {
                alert(`Error : ${error.message}`)
            })

    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => {
                return (
                    <Form className="myForm">
                        <h1>Become A Meal Provider</h1>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Name'
                            name='name'
                        />

                        <FormikControl
                            control='input'
                            type='tel'
                            label='Mobile Without Country Code'
                            name='mobile'
                        />

                        <FormikControl
                            control='input'
                            type='text'
                            label='Locality'
                            name='locality'
                        />

                        <FormikControl
                            control='input'
                            type='text'
                            label='PinCode '
                            name='pincode'
                        />

                        <FormikControl
                            control='input'
                            type='text'
                            label='City '
                            name='city'
                            value="Pune"
                            disabled
                        />

                        <FormikControl
                            control='checkbox'
                            label='Available Meals At '
                            name='availability'
                            options={checkboxOptions}
                        />

                        <FormikControl
                            rows="4"
                            columns="15"
                            control='textarea'
                            label='Details'
                            name='details'
                        />

                        <Button className="btn"
                            style={{
                                margin: "10px",
                                color: "white"
                            }}
                            variant="contained"
                            color="primary"
                            type='submit' disabled={!formik.isValid}>
                            Submit
                        </Button>


                    </Form>
                )
            }}
        </Formik>
    )
}

export default PartnerForm
