import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const { id, img, tag, tag_color, tag_bg_color, title, card_bg } = card || {};
  const tagStyle = {
    color: tag_color,
    background: tag_bg_color,
  };

  return (
    <Link to={`/card-details/${id}`}>
      <div
        className="mx-auto rounded-lg w-full flex flex-col"
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
          className="text-left rounded text-xl font-bold ml-6 pb-6"
          style={{ color: tag_color }}
        >
          {title}
        </h1>
      </div>
    </Link>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
