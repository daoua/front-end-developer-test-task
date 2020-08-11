import React, { FC } from 'react';
import { Prices } from '../interfaces';
import {
  ListItem,
  ListItemPrice,
  ListItemLabel,
  ListItemInput,
  Checkbox,
} from '../styles/styled';

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

  let isSelectedOption = item.id === selectedOption;

  return (
    <ListItem>
      <ListItemLabel
        htmlFor={`item${item.id}`}
        isSelectedOption={isSelectedOption}
      >
        <ListItemInput
          id={`item${item.id}`}
          type="radio"
          value={item.id}
          checked={item.id === selectedOption}
          onChange={handleActiveRadio}
        />
        <Checkbox isSelectedOption={isSelectedOption} />
        {item.type}
      </ListItemLabel>
      <ListItemPrice isSelectedOption={isSelectedOption}>
        {item.price}
      </ListItemPrice>
    </ListItem>
  )
}

export default PricePickerItem
