// import React from 'react';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const adToLocalStorage = (id) => {
  const getItemFromLocalStorage = () => {
    const storedItem = localStorage.getItem('card');
    if (storedItem) {
      return JSON.parse(storedItem);
    } else {
      return [];
    }
  };
  const setItemToLocalStorage = () => {
    const storedItem = getItemFromLocalStorage();
    const exist = storedItem.find((item) => item === id);
    if (exist) {
      return toast.warn('!!! Already Donated', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      storedItem.push(id);
      localStorage.setItem('card', JSON.stringify(storedItem));
      return swal('Donation Success !', 'Donation Successful', 'success');
    }
  };
  setItemToLocalStorage();
};
export default adToLocalStorage;
