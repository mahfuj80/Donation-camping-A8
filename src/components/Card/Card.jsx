import PropTypes from 'prop-types';

const Card = ({ card }) => {
  const { img, tag, tag_color, tag_bg_color, title, card_bg } = card || {};
  const tagStyle = {
    color: tag_color,
    background: tag_bg_color,
  };

  return (
    <div
      className="mx-auto rounded-lg cursor-pointer w-full"
      style={{ background: card_bg }}
    >
      <img className="w-full" src={img} alt="Card_image" />
      <p
        className="text-left font-medium w-fit px-3 ml-5 py-1 rounded text-base my-4"
        style={tagStyle}
      >
        {tag}
      </p>
      <h1
        className="text-left rounded text-xl font-bold ml-6 mb-6"
        style={{ color: tag_color }}
      >
        {title}
      </h1>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
