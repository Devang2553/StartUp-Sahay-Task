import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Profile from "../../public/avatarr.svg";
import About from "../../public/aboutus.svg";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import axiosInstance from "@/utils/axiosInstance";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DashBoard = () => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  // const userId="64081717a01e96baac023828"

  useEffect(() => {
  const accessToken = window.localStorage.getItem('token');
  if(accessToken){
    const { user } = JSON.parse(window.localStorage.getItem("token"));
    console.log(user, "user");
    axiosInstance
      .get(`/users/getData/${user?._id}`)
      .then((res) => {
        setUserData(res);
        console.log(res, "api response");
      })
      .catch((error) => console.error(error));
      // router.push('/Dashboard'); // redirect to dashboard if token exists


  }
  if (userData) {
    router.push("./privateRoute");
  }
  else{
    router.push("./DashBoard")
  }

  }, []);
    
    

  

  const signOut = () => {
    localStorage.removeItem("token");

    if (!localStorage.getItem("token")) {
      // If the token is not present, redirect the user to the sign-in page
      window.location.href = "/login";
    }
  };

  return (
    <div>
      <div>
        <nav className="fixed top-0 z-50 w-full  border-b  bg-gray-800 border-gray-700" >
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <a
                  href="https://startupsahay.com"
                  className="flex ml-2 md:mr-24"
                >
                  <Image
                    src={Logo}
                    className="h-8 w-auto mr-3 bg-white"
                    alt="startup Logo"
                    priority="low"
                  />
                </a>
              </div>
              <div className="block lg:hidden">
                <ul className="flex  text-white  gap-8 font-bold">
                  <li>Dashboard</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ml-3">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full border-2 border-slate-400"
                          src={Profile}
                          alt=""
                        />
                      </Menu.Button>
                    </div>

                    <Menu.Items className="absolute right-0  mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://startupsahay.com/contact-us"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Contact Us
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={signOut}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <div
                    className="z-50 hidden my-4 text-base list-none  divide-y  rounded shadow bg-gray-700 divide-gray-600"
                    id="dropdown-user"
                  >
                   
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </a>
                      </li>

                      <li>
                        <button
                          href="#"
                          onClick={() => router.push("/login")}
                          className="block px-4  py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div
        title="slide-bar"
          id="logo-sidebar"
          className="fixed top-0 left-0  w-64 h-screen pt-20 transition-transform -translate-x-full  border-r lg:translate-x-0 bg-gray-800 border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
            <ul className="space-y-2">
              <li>
                <a
                  href="https://startupsahay.com"
                  className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://startupsahay.com/about-us"
                  className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
                >
                  <Image
                    src={About}
                    alt="avtar"
                    className=" transition duration-75 text-gray-400 group-hover:text-white bg-gray-400 rounded-full "
                  />
                  <span className="ml-3">About Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section title="main-page" className="pt-28 bg-gray-800  h-[946px] md:h-screen min-w-min ">
        <div className="flex flex-col flex-wrap items-center w-full   justify-center mx-auto    gap-5">
          <div className=" flex flex-col text-center gap-5 pb-8 text-white">
            <h1 className="text-4xl font-normal ">Personal info</h1>
            <p>Information about you and your company</p>
          </div>
        </div>
        <div className=" basic-info flex flex-col     gap-5 border  rounded-md max-w-screen-md mx-auto p-5 bg-slate-300">
          <div>
            <h1 className="font-normal text-3xl">Basic info</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="flex  gap-36  border-b-2    border-slate-400 max-w-screen-sm pb-3">
              <h2 className="text-slate-600 ">CompanyName</h2>
              <p className="text-lg">{userData?.name}</p>
            </div>
            <div className="flex  gap-44    border-b-2 border-slate-400 max-w-screen-sm pb-3">
              <h2 className="text-slate-600">yourEmail</h2>
              <p className="text-lg  ">{userData?.email}</p>
            </div>
            <div className="flex  gap-48 border-b-2 border-slate-400 max-w-screen-sm pb-3">
              <h2 className="text-slate-600">Address</h2>
              <p className="text-lg">bla bla bla</p>
            </div>
            <div className="flex gap-44  max-w-screen-sm pb-3">
              <h2 className="text-slate-600">Phone No.</h2>
              <p className="text-lg">9999999999</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



export default DashBoard;
