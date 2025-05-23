import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import "./app.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminMain from "./pages/AdminMain";
import User from "./components/admin/user/User";
import Dashboard from "./components/admin/global/Dashboard";
import Doctor from "./components/admin/doctor/Doctor";
import Post from "./components/admin/post/Post";
import UserAdd from "./components/admin/user/UserAdd";
import DoctorAdd from "./components/admin/doctor/DoctorAdd";
import UserUpdate from "./components/admin/user/UserUpdate";
import PostAdd from "./components/admin/post/PostAdd";
import AuthOTP from "./pages/AuthOTP";
import DoctorUpdate from "./components/admin/doctor/DoctorUpdate";
import Appointment from "./components/admin/appointment/Appointment";
import UserProfile from "./components/admin/user/UserProfile";
import AppointmentAdd from "./components/admin/appointment/AppointmentAdd";
import AppointmentDoctor from "./components/admin/appointment/AppointmentDoctor";
import Footer from "./components/global/Footer";
import Notification from "./components/admin/notification/Notification";
import AppointmentAdmin from "./components/admin/appointment/AppoointmentAdmin";
import FormData from "./components/admin/form/FormData";
import Chat from "./components/admin/chat/Chat";
import DoctorChat from "./components/admin/chat/DoctorChat";
import EsewaSuccess from "./components/admin/appointment/EsewaSuccess";
import VerifyOtp from "./pages/Verifyotp";
import ForgetPassword from "./components/ForgetPassword";
import VerifyOtpAndReset from "./components/VerifyOtpAndReset";

const App = () => {
  // User Layout with Navbar
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const AdminLayout = () => {
    return (
      <>
        <AdminMain />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/verify-otp",
      element: <VerifyOtp />,
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
    {
      path: "/verify-otp-reset",
      element: <VerifyOtpAndReset />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "adduser",
          element: <UserAdd />,
        },
        {
          path: "updateuser/:id",
          element: <UserUpdate />,
        },
        {
          path: "updatedoctor/:id",
          element: <DoctorUpdate />,
        },
        {
          path: "doctor",
          element: <Doctor />,
        },
        {
          path: "adddoctor",
          element: <DoctorAdd />,
        },
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "form-data",
          element: <FormData />,
        },
        {
          path: "addpost",
          element: <PostAdd />,
        },
        {
          path: "appointment",
          element: <AppointmentAdmin />,
        },
      ],
    },
    {
      path: "/user",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <UserProfile />,
        },
        {
          path: "userappointment",
          element: <Appointment />,
        },
        {
          path: "addappointment",
          element: <AppointmentAdd />,
        },
        {
          path: "success",
          element: <EsewaSuccess />,
        },
        {
          path: "chat-doctor",
          element: <Chat />,
        },
      ],
    },
    {
      path: "/doctor",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <UserProfile />,
        },
        {
          path: "allappointment",
          element: <AppointmentDoctor />,
        },
        {
          path: "chat-user",
          element: <DoctorChat />,
        },
      ],
    },
  ]);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="App font-heading w-full max-w-[343px]  md:max-w-[704px] lg:max-w-[1240px] ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
