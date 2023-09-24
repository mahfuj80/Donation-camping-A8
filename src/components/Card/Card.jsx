import PropTypes from 'prop-types';

const Card = ({ card }) => {
  const { img, tag, tag_color, tag_bg_color, title, card_bg } = card || {};
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
