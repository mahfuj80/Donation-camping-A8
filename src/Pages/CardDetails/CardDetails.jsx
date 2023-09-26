import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import adToLocalStorage from '../../utilities/adToLocalStorage';
// import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
  const { dId } = useParams();
  const idInt = parseInt(dId);
  const cards = useLoaderData();
  const [detailCard, setDetailCard] = useState();
  useEffect(() => {
    const card = cards.find((card) => card.id === idInt);
    setDetailCard(card);
  }, [cards, idInt]);
  const { id, img, title, donation, description, tag_color } = detailCard || {};

  return (
    <>
      <div className=" mt-6 px-4 mb-20">
        <div className="relative">
          <div className="relative">
            <img className="w-full rounded-3xl" src={img} alt="image" />
            <div className="absolute h-24 bg-black rounded-3xl rounded-t-none w-full bottom-0 opacity-50 z-10"></div>
          </div>
          <p
            onClick={() => adToLocalStorage(id)}
            className=" w-fit px-3 py-2 rounded-lg mt-6 ml-9 z-10 text-white absolute bottom-7 cursor-pointer"
            style={{ backgroundColor: tag_color }}
          >
            Donate${donation}
          </p>
          <ToastContainer />
        </div>
        <h2 className="text-3xl my-4 font-bold">{title}</h2>
        <p className="text-[#0B0B0BB2]">{description}</p>
      </div>
    </>
  );
};

export default CardDetails;
