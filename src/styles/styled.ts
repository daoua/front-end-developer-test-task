import styled from 'styled-components';
import icon_cart from '../images/icon_cart.svg';

interface ListItemPriceProps {
  isSelectedOption: boolean;
}

export const Wrapper = styled.div`{
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  font-size: 16px;
  line-height: 19px;

  @media screen and (max-width: 370px) {
    padding: 100px 10px 0 10px;
  }
}`

export const Form = styled.form`{
  max-width: 335px;
  padding: 24px 24px 40px 24px;

  background: #FFFFFF;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  margin: 0 auto;
}`

export const Header = styled.div`{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 19px;
}`

export const List = styled.ul`{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 34px;

  color: #999;

  @media screen and (max-width: 370px) {
    font-size: 14px;
    line-height: 16px;
  }
}`

export const ListItem = styled.li`{
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 17px;
  }
}`

export const ListItemLabel = styled.label<ListItemPriceProps>`{
  padding-left: 40px;
  cursor: pointer;
  color: ${props => props.isSelectedOption && "#000"};
}`

export const ListItemInput = styled.input`{
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}`

export const Checkbox= styled.span<ListItemPriceProps>`{
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;

  border: 1px solid #999;
  border-color: ${props => props.isSelectedOption && "#6CA22C"};
  border-radius: 50%;

  cursor: pointer;

  ${({ isSelectedOption }) => isSelectedOption && `
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 8px;
    height: 8px;

    transform: translate(-50%, -50%);
    background-color: #6CA22C;
    border-radius: 50%;
  }
`}
}`

export const ListItemPrice = styled.span<ListItemPriceProps>`{
  font-weight: ${props => props.isSelectedOption && "bold"};
  color: ${props => props.isSelectedOption && "#000"};
}`

export const Footer = styled.div`{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;

  @media screen and (max-width: 370px) {
    padding: 0;
  }
}`

export const CurrentPrice = styled.span`{
  margin-right: 16px;
  font-size: 24px;
  line-height: 28px;

  @media screen and (max-width: 370px) {
    font-size: 16px;
    line-height: 18px;
  }
}`

export const Button = styled.button`{
  position: relative;
  border: none;
  background-color: #6CA22C;
  border-radius: 8px;
  width: 138px;
  padding: 16px 16px 16px 48px;

  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    top: 12px;
    left: 16px;
    display: block;
    width: 25px;
    height: 25px;

    background-image: url(${icon_cart});
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 370px) {
    padding: 10px 10px 10px 40px;

    &:after {
      top: 4px;
      left: 16px;
    }
  }
}`
