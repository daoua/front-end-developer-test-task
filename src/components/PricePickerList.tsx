import React, { FC } from 'react';
import { Prices } from '../interfaces';
import PricePickerItem from './PricePickerItem';
import { List } from '../styles/styled';

interface PricePickerListProps {
  priceOptions: Prices[];
  selectedOption: number;
  handleSelectedOption: (currentRadio: number) => void;
}

const PricePickerList: FC<PricePickerListProps> = (props) => {
  const { priceOptions, selectedOption, handleSelectedOption} = props;
  return (
    <List className="price-picker__list">
      {priceOptions.map(item => {
        return (
          <PricePickerItem
            key={item.id}
            item={item}
            selectedOption={selectedOption}
            handleSelectedOption={handleSelectedOption}
          />
        )})}
    </List>
  )
}

export default PricePickerList
