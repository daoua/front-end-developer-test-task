import React, { FC, useState } from 'react';
import { Prices, Model } from '../interfaces';
import PricePickerList from './PricePickerList';
import PricePickerFooter from './PricePickerFooter';
import {
  Wrapper,
  Form,
  Header,
} from '../styles/styled';

interface PricePickerProps {
  prices: Prices[];
  onSubmit: (model: Model) => void;
}

const PricePicker: FC<PricePickerProps> = ({ prices, onSubmit}) => {
  const [priceOptions, setPriceOptions] = useState<Prices[]>(prices);
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const currentModel = priceOptions.find(option => option.id === selectedOption);

  const handleSelectedOption = (currentRadio: number): void => {
    setSelectedOption(currentRadio);
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault()

    const ModelToBasket = {
      type: currentModel?.type,
      price: currentModel?.price,
    }

    onSubmit(ModelToBasket)
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Header>
          <span>Тип</span>
          <span>Ціна</span>
        </Header>
        <PricePickerList
          priceOptions={priceOptions}
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <PricePickerFooter currentPrice={currentModel?.price} />
      </Form>
    </Wrapper>
  )
}

export default PricePicker
