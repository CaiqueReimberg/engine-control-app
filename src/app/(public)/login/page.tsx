'use client';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginComponent from "./components/login.component";

export default function LoginPage () {
  return (
    <div className="mt-24 h-max">
      <LoginComponent />
      <ToastContainer />
    </div>
  )
}
 