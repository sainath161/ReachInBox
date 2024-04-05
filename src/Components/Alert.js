import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteThread, getEmailList } from "../Redux/Action";

const Alert = ({ isOpen, onClose }) => {
  const curThreadId = useSelector((store) => store.curThreadId);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  // Check if the token is available
  if (!token) {
    // Handle case where token is not available
    console.error("Token is not available.");
    return null;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleDelete = () => {
    // Dispatch deleteThread action to delete the thread
    dispatch(deleteThread(curThreadId, config))
      .then(() => {
        // Dispatch getEmailList action to fetch updated email list
        dispatch(getEmailList(config));
        onClose(); // Close the alert modal
      })
      .catch((error) => {
        // Handle error if deleteThread or getEmailList fails
        console.error("Error deleting thread:", error);
        onClose(); // Close the alert modal even if an error occurs
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="bg-gradient-to-b from-[#141517] to-[#232528] p-8 flex flex-col items-center justify-center  rounded-lg w-1/3">
        <h2 className="text-lg text-white font-bold mb-4">Are you sure ?</h2>
        <br />
        <p className="text-[#E8E8E8] mb-4">
          Your selected email will be deleted.
        </p>
        <br />
        <div className="flex justify-center">
          <button
            className="bg-black text-white px-4 py-2 rounded mr-4"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-gradient-to-b from-[#FA5252] to-[#A91919] text-white px-4 py-2 rounded "
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
