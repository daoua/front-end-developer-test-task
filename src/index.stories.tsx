import React, { FC, useState, useEffect } from 'react';
import PricePicker from './components/PricePicker'
import { Model } from './interfaces';
import { prices } from './api/data';

import './styles/reset.css'

const PriceOption: FC = () => {
  const [chosenModel, setChosenModel] = useState<Model>({
    type: '',
    price: '',
  })
  console.log(chosenModel) // here would be chosenModel

  const onSubmit = (model: Model) => setChosenModel(model);

  return (
    <PricePicker prices={prices} onSubmit={onSubmit} />
  )
}

export { PriceOption }

export default {
  title: 'Common/PricePicker',
}
