'use client'
import { AiOutlineMenu } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import { MenuItem } from './MenuItem';
import { Avatar } from '../Avatar.';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);


  const handleLogin = () => {
    // Functionality for the "Login" menu item
    console.log("Login clicked"); // Replace this with your desired action
  };

  const handleSignUp = () => {
    // Functionality for the "Sign Up" menu item
    console.log("Sign Up clicked"); // Replace this with your desired action
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="
            hidden md:block 
            text-sm 
            font-semibold 
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition 
            cursor-pointer"
          onClick={() => {}}>
          Rent Your Home
        </div>
        <div
          className="
            p-4
            md:py-1 
            md:px-2 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition"
          onClick={()=>{setIsOpen(true)}}>
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute  rounded-xl shadow-md w-[40vw] md:w-3/4 bg-gray-200 overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={handleLogin} label="Login" />
              <MenuItem onClick={handleSignUp} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
