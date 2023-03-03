import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import UpdateUserForm from "../Components/UpdateUser/UpdateUserForm";
import UsersView from "../Components/UsersView/UsersView";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

    },
    {
        path: '/usersView/:id',
        element: <UsersView></UsersView>
    },
    {
        path: '/updateUserForm/:id',
        element: <UpdateUserForm></UpdateUserForm>
    }
])