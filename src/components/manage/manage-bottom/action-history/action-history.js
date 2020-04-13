import React, {useEffect} from 'react'

const ActionHistory = () => {
   useEffect(() => {
      window.scrollTo(0, window.pageYOffset);
   }, []);
   return (
      <div>
         <div style={{textAlign: 'center'}}>In development...</div>

      </div>
   );
};
export default ActionHistory;