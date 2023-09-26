import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
  const {
    title,
    img,
    tag,
    donation: donationAmount,
    card_bg,
    tag_color,
    tag_bg_color,
  } = donation || {};
  //   console.log(donation);
  return (
    <div className="rounded-lg" style={{ background: card_bg }}>
      <div className="flex gap-4">
        <img className="w-[40%] rounded-xl" src={img} alt="banner" />
        <div className=" flex flex-col gap-2 py-5">
          <p
            className=" py-1 px-2 w-fit rounded text-sm"
            style={{ background: tag_bg_color, color: tag_color }}
          >
            {tag}
          </p>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="font-bold" style={{ color: tag_color }}>
            ${donationAmount}
          </p>
          <button
            className="block text-left text-white w-fit px-2 py-1 rounded font-normal text-sm"
            style={{ background: tag_color }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
