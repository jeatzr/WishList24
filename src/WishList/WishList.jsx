import React from 'react';
import PropTypes from 'prop-types';

export default function WishList({ wishes, setWishes }) {
  return (
    <ul className="wish-list">
      {wishes.map((wish, i) => (
        <li
          key={wish.id}
          className={`
            wish-list__item
            ${wish.completed ? 'wish-list__item--done' : ''}
            `}
        >
          <input
            type="checkbox"
            checked={wish.completed}
            id={wish.id}
            onChange={(e) => {
              const tempWishes = [...wishes];
              tempWishes[i].completed = e.target.checked;
              setWishes(tempWishes);
            }}
          />
          <label htmlFor={wish.id}>{wish.text}</label>

        </li>
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  })),
  setWishes: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  setWishes: () => { },
};
