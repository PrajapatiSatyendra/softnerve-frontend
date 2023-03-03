import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';
import { toast } from 'react-hot-toast';


const UsersView = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/patient/getPatientById/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.data);
            })
    }, [id]);
    

     const deleteHandler = async (id) => {
       try {
         const result = await fetch(`${baseUrl}/patient/deletePatient/${id}`, {
           method: "delete",
         });
         const jsonData = await result.json();
         if (!result.ok) {
           toast.error(jsonData.message);
           throw new Error(jsonData.message);
         }
         navigate("/");
       } catch (error) {
         console.log(error);
       }
     };

    const { name,email,phoneNumber,address,pinCode, _id } = user;

    return (
      <div className="w-2/4 mx-auto mt-20">
        <h4 className="my-5 font-bold">Patient view</h4>
        <hr className="mb-5" />
        <div className="md:mx-20">
          <div className="md:mx-24">
            <span className="flex items-center my-5">
              <h3 className="font-semibold">Full Name* : </h3>{" "}
              <p className="mx-8">{name}</p>{" "}
            </span>
            <span className="flex items-center my-5">
              <h3 className="font-semibold">Email* : </h3>{" "}
              <p className="mx-8">{email}</p>{" "}
            </span>
            <span className="flex items-center my-5">
              <h3 className="font-semibold">Mobile Number* : </h3>{" "}
              <p className="mx-8">{phoneNumber}</p>{" "}
            </span>
            <span className="flex items-center my-5">
              <h3 className="font-semibold">Address* : </h3>{" "}
              <p className="mx-8">{address}</p>{" "}
            </span>
            <span className="flex items-center my-5">
              <h3 className="font-semibold">Pin Code* : </h3>{" "}
              <p className="mx-8">{pinCode}</p>{" "}
            </span>
          </div>

          <div className="mt-16">
            <Link to="/">
              <button className="mx-3 bg-zinc-100 p-2 px-5 md:px-16 rounded-sm text-rose-400">
                Cancel
              </button>
            </Link>
            <Link to={`/updateUserForm/${_id}`}>
              <button className="bg-rose-400 p-2 px-5 md:px-16 rounded-sm text-black">
                Edit
              </button>
            </Link>
            <button className="mx-3 bg-red-500 p-2 px-5 md:px-16 rounded-sm text-white" onClick={()=>deleteHandler(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
};

export default UsersView;