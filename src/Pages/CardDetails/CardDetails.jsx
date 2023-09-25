import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const cards = useLoaderData();
  const [detailCard, setDetailCard] = useState();
  useEffect(() => {
    const card = cards.find((card) => card.id === idInt);
    setDetailCard(card);
  }, [cards, idInt]);
  const { img, title, donation, description, tag_color } = detailCard || {};

  return (
    <>
      <div className="relative">
        <div className="relative">
          <img className="w-full h-[60vh] rounded-lg" src={img} alt="image" />
          <div className="absolute h-20 bg-black rounded-lg rounded-t-none w-full bottom-0 opacity-50 z-10"></div>
        </div>
        <p
          className=" w-fit px-3 py-2 rounded-lg mt-6 ml-4 text-white z-40 absolute bottom-5"
          style={{ backgroundColor: tag_color }}
        >
          Donate${donation}
        </p>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default CardDetails;
