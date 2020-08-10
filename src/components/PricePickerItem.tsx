import React, { FC, useState } from 'react';
import { Prices } from '../interfaces';

interface PricePickerItemProps {
  item: Prices;
  selectedOption: number;
  handleSelectedOption: (currentRadio: number) => void;
}

const PricePickerItem: FC<PricePickerItemProps> = (props) => {
  const { item, selectedOption, handleSelectedOption} = props;
  
  const handleActiveRadio = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;

    handleSelectedOption(Number(value));
  }

  return (
    <li key={item.id} className="price-picker__item">
      <label htmlFor={`item${item.id}`} className="price-picker__label">
        <input
          id={`item${item.id}`}
          type="radio"
          className="price-picker__input"
          value={item.id}
          checked={item.id === selectedOption}
          onChange={handleActiveRadio}
        />
        {item.type}
      </label>
      <span className="price-picker__price">{item.price}</span>
    </li>
  )
}

export default PricePickerItem
