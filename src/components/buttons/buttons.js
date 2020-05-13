import styled, { css } from 'styled-components';

export const Button = styled.div`
   color: ${({ theme }) => theme.textPrimary};
   background-color: ${({ theme }) => theme.background4};
   text-align: center;
   line-height: 30px;
   height: 30px;
   border-radius: 8px;
   border: none;
   font-family: 'Lato', sans-serif;
   &:hover {
      transition: 0.2s;
      cursor: pointer;
      background-color: ${({ theme }) => theme.backgroundPaleHover};
      color: ${({ theme }) => theme.textPrimary};
      box-shadow: ${({ theme }) => (theme.darkMode ? '0 5px 15px #111' : null)};
   }

   ${({ disabled }) =>
      disabled &&
      css`
         background-color: ${({ theme }) => theme.independenceDark};
         color: ${({ theme }) => theme.textSecondary};
         &:hover {
            cursor: default;
            pointer-events: none;
            background-color: ${({ theme }) => theme.independenceDark};
            color: ${({ theme }) => theme.textSecondary};
            box-shadow: none;
         }
      `}
`;

const blueButton = css`
   background-color: ${({ theme }) => theme.buttonPrimary};
   color: white;
   &:hover {
      background-color: ${({ theme }) => theme.buttonBlueHover};
   }
   svg {
      height: 22px;
      width: 22px;
      margin-top: 8px;
   }
`;

export const ModalButton = styled.button`
   background-color: ${({ theme }) => theme.background2};
   color: ${({ theme }) => theme.textPrimary};
   height: 40px;
   width: 100%;
   line-height: 40px;
   font-size: 14px;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   transition: 0.1s;
   font-family: Lato, sans-serif;
   &:hover {
      background-color: ${({ theme }) => theme.backgroundPaleHover};
   }
   &:focus {
      outline: none;
   }
   ${props => (props.blue ? blueButton : null)}
`;
