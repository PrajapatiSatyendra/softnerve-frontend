import { Dialog } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { useFormik } from "formik"
import { AddUserSchema } from '../../Schema';
import { baseUrl } from '../../baseUrl';
import { toast } from 'react-hot-toast';
// import axios from 'axios';


const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    pinCode:''
}

const AddUserModal = ({ open, setOpen, handleOpen, handleClose }) => {


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: AddUserSchema,
        onSubmit: (values, action) => {
            console.log(values);
            fetch(`${baseUrl}/patient/addPatient`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Successfully added a user ');
                    handleClose();
                    action.resetForm();
                })
        }
    })


    return (
      <div className="">
        <Dialog className="" fullWidth open={open} onClose={handleClose}>
          <div className="text-right">
            <CancelIcon onClick={handleClose} />
          </div>
          <p className="text-xl font-bold px-4">Patient Information Create</p>
          <section className="p-6">
            <form
              onSubmit={handleSubmit}
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <div className="">
                <div className="col-span-full sm:col-span-3 ">
                  <label for="fullname" className="text-sm">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Full name"
                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                  />
                  {errors.name && touched.name ? (
                    <p className="text-sm text-red-600">{errors.name}</p>
                  ) : null}
                </div>
                <div className="col-span-full sm:col-span-3 ">
                  <label for="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Email"
                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                  />
                  {errors.email && touched.email ? (
                    <p className="text-sm text-red-600">{errors.email}</p>
                  ) : null}
                </div>

                <div className="col-span-full sm:col-span-3 ">
                  <label for="phoneNumber" className="text-sm">
                    Mobile Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <p className="text-sm text-red-600">{errors.phoneNumber}</p>
                  ) : null}
                </div>

                <div className="col-span-full sm:col-span-3 ">
                  <label for="address" className="text-sm">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                  />
                  {errors.address && touched.address ? (
                    <p className="text-sm text-red-600">{errors.address}</p>
                  ) : null}
                </div>

                <div className="col-span-full sm:col-span-3 ">
                  <label for="pinCode" className="text-sm">
                    Pin Code
                  </label>
                  <input
                    id="pinCode"
                    name="pinCode"
                    value={values.pinCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    placeholder="Pin Code"
                    className="w-full p-2 rounded-md focus:ring border focus:ring-opacity-75 text-gray-900"
                  />
                  {errors.pinCode && touched.pinCode ? (
                    <p className="text-sm text-red-600">{errors.pinCode}</p>
                  ) : null}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-rose-400 p-2 px-16 rounded-sm text-black"
                >
                  Save
                </button>
                <button
                  onClick={handleClose}
                  className="mx-3 bg-zinc-100 p-2 px-14 rounded-sm text-rose-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </Dialog>
      </div>
    );
};

export default AddUserModal;