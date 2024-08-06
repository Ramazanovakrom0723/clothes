// 'use client'

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
// import Typography from '@mui/material/Typography';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from 'yup'; // Import Yup for validation
// import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
// import { login } from '../../service/signIn';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   maxWidth: 400,
//   bgcolor: 'background.paper',
//   border: '1px solid #000',
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 2,
// };

// // Validation schema
// const SignInValidationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });

// const KeepMountedModal = ({ open, handleClose }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
//     try {
//       const response = await login(values);
//       if (response.status === 200) {
//         // Handle success (e.g., close modal, redirect)
//       }
//     } catch (error) {
//       // Handle error (e.g., show error message)
//       setErrors({ general: 'An error occurred. Please try again.' });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Modal
//       keepMounted
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="keep-mounted-modal-title"
//       aria-describedby="keep-mounted-modal-description"
//     >
//       <Box sx={style}>
//         <Typography id="keep-mounted-modal-title" className='text-[#000]' variant="h4" component="h2" sx={{ mb: 2 }}>
//           Вход в аккаунт
//         </Typography>
//         <Typography id="keep-mounted-modal-description" className='text-[#000]' sx={{ mb: 3 }}>
//           Если Вы не зарегистрированы, нажмите кнопку <span className='text-[#FBD029] cursor-pointer'>"Регистрация"</span>
//         </Typography>
//         <Formik
//           initialValues={{
//             email: 'xasannosirov094@gmail.com',
//             password: 'Sehtols@01',
//           }}
//           validationSchema={SignInValidationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className='flex flex-col gap-4'>
//               <Field
//                 as={TextField}
//                 fullWidth
//                 label="Email"
//                 variant="outlined"
//                 type="email"
//                 name="email"
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Email />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{ mb: 2 }}
//               />
//               <ErrorMessage name="email" component="div" className="text-red-600" />
//               <Field
//                 as={TextField}
//                 fullWidth
//                 type={showPassword ? "text" : "password"}
//                 label="Password"
//                 variant="outlined"
//                 name="password"
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Lock />
//                     </InputAdornment>
//                   ),
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPassword(!showPassword)}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{ mb: 2 }}
//               />
//               <ErrorMessage name="password" component="div" className="text-red-600" />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={isSubmitting}
//                 sx={{
//                   backgroundColor: '#FBD029',
//                   color: 'black',
//                   '&:hover': {
//                     backgroundColor: '#FBD029',
//                   },
//                   height: '40px',
//                   borderRadius: '5px',
//                   fontSize: '0.875rem',
//                 }}
//               >
//                 Войти
//               </Button>
//               <div className='flex justify-center sm:justify-start mt-2'>
//                 <p className="cursor-pointer text-[#917BFF]">Забыли пароль!</p>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </Modal>
//   );
// }

// export default KeepMountedModal;




"use client";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import React, { useState } from "react";
import { Input, Modal } from "antd";
import { login } from "../../service/auth.service";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Login = async (values) => {
    try {
      console.log("Login values:", values);
      const response = await login(values);
      console.log("Login response:", response);
      if (response && response.status === 200) {
        handleClick();
        closeModal();
        console.log("Modal yopilsin");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const showModal = () => {
    console.log("Modalni ochish");
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const values = { email, password };
    await Login(values);
  };

  const closeModal = () => {
    console.log("Yopilsin");
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <button
        className="w-[46px] h-[46px] bg-[#F2F2F2] hover:bg-yellow-300 rounded-sm flex items-center justify-center"
        onClick={showModal}
      >
        <PersonOutlineIcon/>
        
        {/* <Image src={User} alt="image" /> */}
      </button>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        onClose={closeModal}
        footer={[
          <button
            key="ok"
            className="custom-ok-button flex justify-start ml-7 px-14 py-2 font-semibold bg-yellow-300 hover:bg-yellow-500 transition-all border rounded-md"
            onClick={handleOk}
          >
            Войти
          </button>
        ]}
        className="p-[25px]"
      >
        <form
          className="p-[25px] flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleOk();
          }}
        >
          <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
          <p className="w-[270px] text-[12px]">
            Если Вы не зарегистрированы, нажмите кнопку
          </p>
          <Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="p-3"
          />
          <Input.Password
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="p-3"
          />
        </form>
      </Modal>
      
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Login successful!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Index;