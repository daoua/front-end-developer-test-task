import React, { FC } from 'react';
import { Button } from '../styles/styled';

interface PricePickerFooterProps {
  children: React.ReactNode;
}

const PricePickerFooter: FC<PricePickerFooterProps> = ({ children }) => {
  return (
    <Button type="submit">
      {children}
    </Button>
  )
}

export default PricePickerFooter
