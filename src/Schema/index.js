import * as Yup from "yup";

export const AddUserSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter Patient Name"),
  email: Yup.string().required("Please Enter Email"),
  phoneNumber: Yup.number().required("Please Enter Phone Number"),
  address: Yup.string().required("Please Enter Address"),
  pinCode: Yup.number().required("Please Enter Pin Code"),
});