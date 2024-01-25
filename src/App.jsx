import React from 'react';
import './App.css';

const wishes = [
  {
    id: 0,
    text: 'Travel to the moon',
    completed: false,
  },
  {
    id: 1,
    text: 'Travel to Barcelona',
    completed: true,
  },
  {
    id: 2,
    text: 'Eat a hamburger',
    completed: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <h1>My Wishlist</h1>
      <fieldset className="wish-input">
        <legend className="wish-input__label">New Wish:</legend>
        <input
          type="text"
          placeholder="My new Wish"
        />
      </fieldset>
      <ul className="wish-list">
        {wishes.map((wish) => (
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
            />
            <label htmlFor={wish.id}>{wish.text}</label>

          </li>
        ))}
      </ul>

    </div>
  );
}
