import React, { FC } from 'react';

interface PricePickerFooterProps {
  imagePath: string;
  children: React.ReactNode;
}

const PricePickerFooter: FC<PricePickerFooterProps> = ({ imagePath, children }) => {
  return (
    <button type="submit" className="price-picker__button">
      {children}
    </button>
  )
}

export default PricePickerFooter
