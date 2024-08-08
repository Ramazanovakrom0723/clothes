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
        className="w-[50px] h-[50px] bg-[#F2F2F2]  rounded-sm flex items-center justify-center"
        onClick={showModal}
      >
        <PersonOutlineIcon className='text-black text-[30px]' />
      </button>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        onClose={closeModal}
        footer={[
          <button
            key="ok"
            className="px-14 py-2 font-bold bg-green-400 hover:bg-green-600  rounded-md"
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