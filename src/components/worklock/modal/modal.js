import React, { useState, forwardRef, useImperativeHandle } from "react";

import s from "./modal.module.css";
import ReactDOM from "react-dom";

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
         <div className={s.modal_wrapper}>
            <div onClick={close} className={s.modal_backdrop} />

            <div className={s.modal_window}>{props.children}</div>
         </div>,

         document.getElementById("modal_root")
      );
   } else {
      return null;
   }
});

export default Modal;
