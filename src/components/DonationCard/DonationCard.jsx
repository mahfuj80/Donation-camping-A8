import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
  const { title } = donation || {};
  //   console.log(donation);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
