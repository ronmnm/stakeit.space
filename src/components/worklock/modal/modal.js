import React, { useState, forwardRef, useImperativeHandle } from "react";
import styled, { keyframes } from 'styled-components'

import ReactDOM from "react-dom";

const ModalWrapper = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 99;
`;
const fadeIn = keyframes`
   0% {opacity:0;}
   100% {opacity:1;}
`;
const ModalBackdrop = styled.div`
   animation: .3s ${fadeIn} ease;
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 100;
   background-color: rgba(0, 0, 0, 0.5);
`;
const ModalWindow = styled.div`
   position: relative;
   top: 40%;
   left: 50%;
   transform: translate(-50%, -50%);
   height: 350px;
   width: 450px;
   background-color: #303030;
   z-index: 101;
   box-shadow: 0 0 50px black;
   border-radius: 15px;
`;


const Modal = forwardRef( (props, ref) => {
   const [display, setDisplay] = useState(false);

   useImperativeHandle(ref, () => {
      return {
         openMod: () => open(),
         closeMod: () => close()
      }
   })

   const open = () => {
      setDisplay(true);
   };

   const close = () => {
      setDisplay(false);
   };

   if (display) {
      return ReactDOM.createPortal(
         <ModalWrapper>
            <ModalBackdrop onClick={close} />

            <ModalWindow>{props.children}</ModalWindow>
         </ModalWrapper>,

         document.getElementById("modal_root")
      );
   } else {
      return null;
   }
});

export default Modal;
