import React, { FC } from 'react';
import { Prices } from '../interfaces';
import PricePickerItem from './PricePickerItem';
import {
  Wrapper,
  Form,
  Header,
  Heading
} from '../styles/styled';

interface PricePickerListProps {
  priceOptions: Prices[];
  selectedOption: number;
  handleSelectedOption: (currentRadio: number) => void;
}

const PricePickerList: FC<PricePickerListProps> = (props) => {
  const { priceOptions, selectedOption, handleSelectedOption} = props;
  return (
    <ul className="price-picker__list">
      {priceOptions.map(item => {
        return (
          <PricePickerItem
            item={item}
            selectedOption={selectedOption}
            handleSelectedOption={handleSelectedOption}
          />
        )})}
    </ul>
  )
}

export default PricePickerList
