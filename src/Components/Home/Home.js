import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../baseUrl';
import AddUserModal from '../AddUserModal/AddUserModal';
import Users from '../UsersList/Users';


const Home = () => {

    const [open, setOpen] = useState(false);
    const [usersData, setUsersData] = useState([]);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {

        fetch(`${baseUrl}/patient/getPatients`)
            .then(res => res.json())
            .then(data => {
                setUsersData(data.data)
                 console.log(data);
            });

    }, [open]);







    return (
        <div className=' w-full md:w-3/4 mx-2 md:mx-auto mt-20 '>
            <h4 className='my-5 font-bold'>Patient List</h4>
            <hr className='mb-5' />
            <div className='flex items-center justify-end'>
                
                <div>
                    <button onClick={handleOpen} className='bg-rose-400 mr-2 p-2 rounded-lg text-black'>Add Patient</button>
                </div>
            </div>
            {/* Modal */}

            <div>

                    <Users
                        usersData={usersData}
                    >
                    </Users>
                    
            </div>



            <div>
                <AddUserModal
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                ></AddUserModal>
            </div>

        </div>
    );
};

export default Home;