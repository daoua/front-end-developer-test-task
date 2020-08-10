import React, { FC, useState } from 'react';
import { Prices, Model } from '../interfaces';
import PricePickerList from './PricePickerList';
import PricePickerFooter from './PricePickerFooter';
import {
  Wrapper,
  Form,
  Header,
  Heading
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
    <Wrapper className="price-picker__wrapper">
      <Form className="price-picker" onSubmit={handleSubmit}>
        <Header className="price-picker__heading-wrapper">
          <Heading className="price-picker__type-heading">Тип</Heading>
          <Heading className="price-picker__price-heading">Ціна</Heading>
        </Header>
        <PricePickerList
          priceOptions={priceOptions}
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <PricePickerFooter currentPrice={currentModel?.type} />
      </Form>
    </Wrapper>
  )
}

export default PricePicker
