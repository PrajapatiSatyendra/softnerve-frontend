import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Users = ({ usersData }) => {
 

 


    return (
      <div className="w-full mx-auto overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden xl:overflow-x-hidden">
        <table className="w-full">
          <thead className=" font-semibold text-gray-600 border-b border-b-rose-400">
            <tr>
              <th className="px-6 py-4 text-start">Full Name</th>

              <th className="px-6 py-4 text-start">Email</th>

              <th className="px-6 py-4 text-start">Phone Number</th>

              <th className="px-6 py-4 text-start">Address</th>

              <th className="px-6 py-4 text-start">Pin Code</th>
              <th className="px-6 py-4 text-start">Details View</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-secondary">
            {usersData?.map((user, i) => (
              <tr key={i} className="whitespace-nowrap text-gray-700">
                <td className="px-6 py-4 text-start ">{user.name}</td>
                <td className="px-6 py-4 text-start ">{user.email}</td>
                <td className="px-6 py-4 text-start ">{user.phoneNumber}</td>
                <td className="px-6 py-4 text-start ">{user.address}</td>
                <td className="px-6 py-4 text-start ">{user.pinCode}</td>
                <td className="px-6 py-4 text-start">
                  <Link to={`/usersView/${user._id}`}>
                    <button className="text-rose-400 px-8 py-1 rounded-lg bg-zinc-100">
                      Details
                    </button>
                  </Link>
                </td>
                
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    );
};

export default Users;