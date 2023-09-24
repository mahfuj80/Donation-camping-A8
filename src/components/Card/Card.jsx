import PropTypes from 'prop-types';

const Card = ({ card }) => {
  const { img, tag, tag_color, tag_bg_color, title, card_bg } = card || {};
  return (
    <div className="mx-auto">
      <div>
        <img src={img} alt="Card_image" />
        <p className={tag_color}>{tag}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
