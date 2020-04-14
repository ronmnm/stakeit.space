import React from 'react';
import styled from 'styled-components';
import {colors} from '../../constants/colors'

const InputContainer = styled.div`
   position: relative;
   label {
      position: absolute;
      font-size: 18px;
      text-transform: uppercase;
      color: ${colors.greyText};
      width: 60px;
      text-align: end;
      left: 260px;
      top: 28px;
      pointer-events: none;
   }
`;
const Input = styled.input`
   font-family: 'Open Sans', sans-serif;
   background-color: ${colors.darkGrey};
   border-radius: 10px;
   height: 55px;
   line-height: 55px;
   width: 100%;
   margin: 10px auto 20px auto;
   color: ${colors.whiteText};
   padding-left: 20px;
   font-size: 24px;
   font-weight: 300;
   outline: none;
   letter-spacing: 0.5px;
   transition: 0.3s;
   border: 1px solid ${(props) => (props.error || props.duration_error ? 'tomato' : '#1f1f1f')};
   &:hover {
      border: 1px solid ${(props) => (props.error ? 'tomato' : colors.blue)};
   }
   &:focus {
      border: 1px solid ${(props) => (props.error ? 'tomato' : colors.blue)};
      background-color: #111;
   }
   &::placeholder {
      color: ${colors.greyText};
      letter-spacing: 0.5px;
      font-weight: 500;
      opacity: 1;
   }
   &:focus::placeholder {
      opacity: 0;
   }
`;

const InputText = ({onChange, error, placeholder, value, name, label}) => {
   return (
      <InputContainer>
         <label htmlFor="days">{label}</label>
         <Input
            error={error}
            onChange={onChange}
            value={value || ''}
            placeholder={placeholder}
            autoComplete="off"
            type="text"
            name={name}
         />
      </InputContainer>
   );
};
export default InputText;
