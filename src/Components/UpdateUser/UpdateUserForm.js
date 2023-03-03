import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';

const UpdateUserForm = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [user, setUser] = useState({});
    const {name,email,phoneNumber,address,pinCode, _id } = user;

    useEffect(() => {
       
        fetch(`${baseUrl}/patient/getPatientById/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.data);
            })
    }, [id])


    const handleUpdateUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;
        const pinCode = form.pinCode.value;

        if (!name || !email || !phoneNumber || !address  || !pinCode) {
            toast.error('Please enter valid text')
            return;
        }

        const updatedUserData = {
            name,
            email,
            phoneNumber,
            address,
            pinCode
        }
        const updatePatient = async () => {
            try {
                 const result= await   fetch(`${baseUrl}/patient/updatePatient/${_id}`, {
            method: 'PUT',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(updatedUserData)
            });
            
            const jsonData = await result.json();
            if (!result.ok) {
                toast.error(jsonData.message);
                throw new Error(jsonData.message);
                }
                toast.success('User Information Successfully Updated');
                setTimeout(() => {
                    navigate(`/usersView/${_id}`);
                }, 2000);
                    
            } catch (error) {
                console.log(error);
            }
           
        }
        updatePatient();    

   
    }

    return (
      <div className="w-3/4 mx-auto mt-20">
        <h4 className="my-5 font-bold">Update Patient's details</h4>
        <hr className="mb-5" />
        <form onSubmit={handleUpdateUser}>
          <div className="">
            <label for="fullname" className="text-sm font-semibold">
              Full Name
            </label>
            <span className="flex">
              <input
                id="fullname"
                type="text"
                name="fullName"
                defaultValue={name}
                placeholder="Full Name"
                className="w-full p-2 rounded-md border"
              />
            </span>

            <div className="w-full flex mt-5">
              <div className=" w-full">
                <label for="lastname" className="text-sm">
                  Email
                </label>
              </div>
              <input
                id="email"
                type="text"
                name="email"
                defaultValue={email}
                placeholder="Email"
                className="w-full p-2 rounded-md border"
              />
            </div>
            <div className="w-full flex mt-5">
              <div className=" w-full">
                <label for="phoneNumber" className="text-sm">
                  Mobile Number
                </label>
              </div>
              <input
                id="phoneNumber"
                type="number"
                name="phoneNumber"
                defaultValue={phoneNumber}
                placeholder="Mobile Number"
                className="w-full p-2 rounded-md border"
              />
            </div>
            <div className="w-full flex mt-5">
              <div className=" w-full">
                <label for="address" className="text-sm">
                  Address
                </label>
              </div>
              <input
                id="address"
                type="text"
                name="address"
                defaultValue={address}
                placeholder="Address"
                className="w-full p-2 rounded-md border"
              />
            </div>
            <div className="w-full flex mt-5">
              <div className=" w-full">
                <label for="pinCode" className="text-sm">
                  Pin Code
                </label>
              </div>
              <input
                id="pinCode"
                type="number"
                name="pinCode"
                defaultValue={pinCode}
                placeholder="Pin Code"
                className="w-full p-2 rounded-md border"
              />
            </div>
            <div className="mt-16 flex items-center justify-center">
              <Link to={`/usersView/${_id}`}>
                <button className="mx-3 bg-zinc-100 p-2 px-16 rounded-sm text-rose-400">
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="bg-rose-400 p-2 px-16 rounded-sm text-black"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default UpdateUserForm;