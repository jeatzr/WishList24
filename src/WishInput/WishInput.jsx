import React from 'react';

export default function WishInput() {
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New Wish:</legend>
      <input
        type="text"
        placeholder="My new Wish"
      />
    </fieldset>
  );
}
