import React, { useState } from "react";
import Substakes from "./substakes/substakes";
import ActionHistory from "./action-history/action-history";


const ManageBottom = ({ substakeList, prolongStake, divideStake }) => {
   const [listState, setListState] = useState("active");
   const [historyState, setHistoryState] = useState("");

   const substakeClick = (e) => {
      e.preventDefault();
      setListState("active");
      setHistoryState("");
   };
   const historyClick = (e) => {
      e.preventDefault();
      setHistoryState("active");
      setListState("");
   };
   return (
      <div className="substake_list">
         <div className="nav_manage_bottom">
            <span
               onClick={substakeClick}
               className={`my_nav_item ${listState}`}>
               Substake List
            </span>
            <span
               onClick={historyClick}
               className={`my_nav_item ${historyState}`}>
               Action History
            </span>
         </div>

         {listState ? (
            <Substakes substakeList={substakeList} prolongStake={prolongStake} divideStake={divideStake} />
         ) : (
            <ActionHistory />
         )}
      </div>
   );
};
export default ManageBottom;
