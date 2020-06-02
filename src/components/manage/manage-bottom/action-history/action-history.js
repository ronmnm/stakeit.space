import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import BigNumber from "bignumber.js"
import PaginationControls from "./pagination-controls"

let ActionHistoryStyled = styled.div`
  /* background-color: darkkhaki; */
  .titles {
    height: 30px;
    /* border-bottom: 1px solid #333; */
    margin-bottom: 6px;
    span {
      text-align: center;
      color: ${({ theme }) => theme.textSecondary};
      font-size: 12px;
    }
  }
  .history_list_item,
  .titles {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
  }
  .events_list_wrapper {
    /* border: 1px solid ${({ theme }) => (theme.darkMode ? theme.independenceDark : theme.addressBackground)}; */
    border-radius: 7px;
    padding: 5px;
    margin-bottom: 20px;
    .history_list_item {
      border-bottom: 1px solid #333;
      margin: 10px 0;
      
      span {
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 13px;
        color: ${({ theme }) => theme.textPrimary};
        .txn_hash_link {
          color: ${({ theme }) => theme.textBlue};
          &:hover {
            color: ${({ theme }) => theme.textBlueHover};
            transition: 0.2s;
          }
        }
      }
    }
  }

`

const ActionHistory = ({ loading, actionHistoryList }) => {
  let [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    window.scrollTo(0, window.pageYOffset)
  }, [])

  if (loading) return <div>Loading ...</div>
  if (actionHistoryList.length === 0) return <div style={{textAlign: 'center', color: 'grey'}}>No actions to display.</div>

  let pageSize = 10
  let pagesCount = Math.ceil(actionHistoryList.length / pageSize)


  let actionHistoryListOnePage = actionHistoryList.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  function pickEventTitle(item) {
    switch (item.event) {
      case "Prolonged":
        return `Prolonged substake for ${item.returnValues.periods}`
      case "WindDownSet":
        return `Wind-down ${item.returnValues.windDown ? "enabled" : "disabled"}`
      case "ReStakeSet":
        return `Re-stake ${item.returnValues.reStake ? "enabled" : "disabled"}`
      case "Withdrawn":
        return `Withdrawn ${new BigNumber(item.returnValues.value).dividedBy(10 ** 18).toFixed(0)}`
      default:
        break
    }
  }

  return (
    <ActionHistoryStyled>
      <div className="titles">
        <span>Timestamp</span>
        <span>Action</span>
        <span>Block #</span>
        <span>Txn Hash</span>
      </div>
      
      <div className="events_list_wrapper">
        {actionHistoryListOnePage.map(item => (
          <div className="history_list_item" key={item.timestamp}>
            <span>{new Date(+item.timestamp * 1000).toLocaleString()}</span>
            <span>{pickEventTitle(item)}</span>
            <span>{item.blockNumber}</span>
            <span>
              <a className="txn_hash_link" href={item.link} target="_blank">
                {item.transactionHash.slice(0, 15)}...
              </a>
            </span>
          </div>
        ))}
      </div>
      <PaginationControls setCurrentPage={setCurrentPage} pagesCount={pagesCount} currentPage={currentPage} />
    </ActionHistoryStyled>
  )
}

let mapStateToProps = ({ user }) => ({
  loading: user.isActionHistoryDataLoading,
  actionHistoryList: user.actionHistory,
})
export default connect(mapStateToProps)(ActionHistory)
