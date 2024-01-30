import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

export default function WishList({ wishes, setWishes }) {
  const onCompletedChange = (checked, i) => {
    const tempWishes = [...wishes];
    tempWishes[i].completed = checked;
    setWishes(tempWishes);
  };
  return (
    <ul className="wish-list">
      {wishes.map((wish, i) => (
        <WishItem
          key={wish.id}
          wish={wish}
          onCompletedChange={(checked) => {
            onCompletedChange(checked, i);
          }}
        />
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
