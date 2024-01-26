import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
export default function TouristTable({
  singleTourist,
  idx,
  handleDelete,
  closeModal,
  isOpen,
  handleChangeRole,
  handleMakeAdmin,
  handleMakeGuide,
}) {
  const buttonDisabled = singleTourist?.role === "Admin";

  return (
    <tr className="relative">
      <td>{idx + 1}</td>
      <td>{singleTourist?.name}</td>
      <td
        className="cursor-pointer"
        onClick={() => handleChangeRole(singleTourist._id)}
      >
        {singleTourist?.role}
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                      >
                        Cancel
                      </Dialog.Title>
                      <div className="mt-2 flex items-center justify-around">
                        <p
                          onClick={() => handleMakeAdmin(singleTourist._id)}
                          className="text-sm text-gray-500 cursor-pointer "
                        >
                          Make Admin
                        </p>
                        <p
                          onClick={() => handleMakeGuide(singleTourist._id)}
                          className="text-sm cursor-pointer text-gray-500"
                        >
                          Make Guide
                        </p>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      </td>
      <td>{singleTourist?.email} </td>

      <th>
        <button
          disabled={buttonDisabled}
          onClick={() => handleDelete(singleTourist?._id)}
          className={`px-4 py-2 rounded-md bg-red-400 text-slate-950 ${
            buttonDisabled ? "bg-red-900" : "bg-red-400"
          }`}
        >
          Remove
        </button>
      </th>
    </tr>
  );
}
/* 

{isOpen ? (
          <div className="absolute sm:top-[50%] p-12 sm:left-[50%]  rounded-lg sm:w-[300px] h-[70px]  bg-slate-900 shadow-2xl shadow-sky-950 flex items-center justify-between  ">
            <button className="bg-green-900 rounded-lg text-xs px-4 py-2 mr-2">
              make Admin
            </button>
            <button
              //   onClick={handleMakeGuide()}
              className="bg-blue-900 rounded-lg text-xs px-4 py-2"
            >
              make Guide
            </button>
            <div className="bg-red-600 mr-2 rounded-lg cursor-pointer text-white px-4 py-2 text-xs">
              <button onClick={() => setIsOpen(false)}>Cancel</button> 
              </div>
              </div>
            ) : (
              singleTourist?.role
            )}

*/
