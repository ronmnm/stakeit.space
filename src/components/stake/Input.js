import React from 'react';
import styled from 'styled-components';
// import {dark} from '../../themes/theme'

const InputContainer = styled.div`
   position: relative;
   label {
      position: absolute;
      font-size: 18px;
      text-transform: uppercase;
      color: ${({theme}) => theme.darkMode ? '#a9b5c2' : '#a1a1a1'};
      font-weight: 700;
      letter-spacing: 0.5px;
      width: 60px;
      text-align: end;
      left: 260px;
      top: 28px;
      pointer-events: none;
   }
`;
const Input = styled.input`
   font-family: 'Open Sans', sans-serif;
   background-color: ${({ theme, error }) => !error ? theme.backgroundPale : theme.backgroundError}; 
   border-radius: 15px;
   height: 55px;
   line-height: 55px;
   width: 100%;
   margin: 10px auto 20px auto;
   
   padding-left: 20px;
   padding-right: 85px;
   font-size: 24px;
   font-weight: 600;
   outline: none;
   letter-spacing: 0.5px;
   color: ${({ theme }) => theme.textPrimary};
   border: 1px solid
      ${({ error, theme, duration_error }) => (error || duration_error ? 'tomato' : theme.backgroundPale)};
   &:hover {
      transition: 0.3s;
      border: 1px solid ${({ error, theme }) => (error ? 'tomato' : theme.buttonPrimary)};
   }
   &:focus {
      border: 1px solid ${({ error, theme }) => (error ? 'tomato' : theme.buttonPrimary)};
      background-color: ${({ theme, error }) => !error ? theme.independenceDark : theme.backgroundError}; 
   }
   &::placeholder {
      color: ${({theme}) => theme.darkMode ? '#a9b5c2' : '#a1a1a1'};
      letter-spacing: 0.5px;
      font-weight: 700;
      opacity: 1;
   }
   &:focus::placeholder {
      opacity: 0;
   }
`;

const InputText = ({ onChange, error, placeholder, value, name, label }) => {
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
