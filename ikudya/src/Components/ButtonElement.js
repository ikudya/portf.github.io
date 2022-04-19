import styled from "styled-components";
import {Link} from 'react-scroll'
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/md";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#b3dcec' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#6389a1' : '#010606')};
  }
`
export const BthWrapper = styled.div`
  Margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`