import React, {useState} from "react"
import Substakes from "./substakes/substakes"
import ActionHistory from "./action-history/action-history"
import {connect} from "react-redux"
import styled from "styled-components"

const ManageBottomWrapper = styled.div`
  display: grid;
  grid-area: list;
  grid-template-rows: 80px auto;
  /* margin-top: 20px; */
  .nav_manage_bottom {
    display: grid;
    /* height: 50px; */
    grid-template-columns: repeat(2, 150px);
    justify-content: center;
    column-gap: 10px;
    align-items: center;

    .my_nav_item {
      cursor: pointer;
      text-align: center;
      /* text-transform: uppercase; */
      letter-spacing: 0.5px;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 0;
      color: ${({ theme }) => theme.textPrimary};
      &:hover {
        color: ${({ theme }) => (theme.darkMode ? "#cccccc" : "#888")};
      }
    }
    .active {
      color: ${({ theme }) => theme.textWhiteBlue};
      background-color: ${({ theme }) => theme.backgroundPale};
      border-radius: 8px;
      &:hover {
        color: ${({ theme }) => theme.textWhiteBlue};
      }
    }
    .disable {
      color: ${({ theme }) => theme.background4};
      pointer-events: none;
      cursor: default;
    }
  }
`

const ManageBottom = ({ substakeList, prolongStake, divideStake }) => {
  const [listState, setListState] = useState("active")
  const [historyState, setHistoryState] = useState("")

  const substakeClick = () => {
    setListState("active")
    setHistoryState("")
  }
  const historyClick = () => {
    setHistoryState("active")
    setListState("")
  }
  return (
    <ManageBottomWrapper>
      <div className="nav_manage_bottom">
        <span onClick={substakeClick} className={`my_nav_item ${listState}`}>
          Substake List
        </span>
        <span onClick={historyClick} className={`my_nav_item ${historyState}`}>
          Action History
        </span>
      </div>

      {listState ? (
        <Substakes substakeList={substakeList} prolongStake={prolongStake} divideStake={divideStake} />
      ) : (
        <ActionHistory />
      )}
    </ManageBottomWrapper>
  )
}
const mapStateToProps = ({ user }) => ({
  substakeList: user.manage.substakeList,
  prolongStake: 1,
  divideStake: 1,
})
export default connect(mapStateToProps)(ManageBottom)
