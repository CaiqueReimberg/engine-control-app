'use client';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RegisterComponent from "./components/register.component";

export default function RegisterPage () {
  return (
    <div className="mt-24 h-max">
      <RegisterComponent />
      <ToastContainer />
    </div>
  )
}
 