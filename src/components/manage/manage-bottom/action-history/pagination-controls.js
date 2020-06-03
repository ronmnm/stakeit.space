import React from "react"
import styled from "styled-components"
import SvgArrow from "../../../../static/arrow"

const sizze = "35px"
const PaginationControlsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: min-content;
  margin: 0 auto;
  height: ${sizze};
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select:none;
  user-select:none;
  -o-user-select:none;
  .rotate {
    padding-left: 0;
    svg {
      transform: rotate(180deg);
    }
  }
  .pagination_controls_button {
    background-color: ${({ theme }) => theme.independenceDark};
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding-left: 1px;
    width: ${sizze};
    
    svg {
      fill: ${({ theme }) => theme.textSecondary};
    }
    &:hover {
      background-color: ${({ theme }) => theme.backgroundPale};
      cursor: pointer;
      svg{
        fill: ${({ theme }) => theme.textPrimary};
      }
    }
  }
  .pagination_controls_item_wrapper {
    display: grid;
    grid-auto-flow: column;
    margin: 0 20px;
    background-color: ${({ theme }) => theme.independenceDark};
    border-radius: 8px;

    .pagination_controls_item {
      display: inline-block;
      height: ${sizze};
      line-height: ${sizze};
      text-align: center;
      width: ${sizze};
      color: ${({ theme }) => theme.textSecondary};
      font-weight: 600;
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.textPrimary};
      }
    }
    .page_active {
      /* font-weight: 700; */
      color: white;
      background-color: ${({ theme }) => theme.buttonPrimary};
      border-radius: 8px;
      &:hover {
        color: white;
      }
    }
  }
`
export default function PaginationControls({ pagesCount, currentPage, setCurrentPage }) {
  return (
    <PaginationControlsStyled>
      <div className="pagination_controls_button rotate" onClick={currentPage > 1 ? () => setCurrentPage(currentPage - 1) : null}>
        <SvgArrow />
      </div>
      <div className="pagination_controls_item_wrapper">
        {[...Array(pagesCount + 1).keys()].splice(1).map(p => {
          return (
            <span
              onClick={() => setCurrentPage(p)}
              key={p}
              className={`pagination_controls_item ${p === currentPage ? "page_active" : null}`}>
              {p}
            </span>
          )
        })}
      </div>
      <div className="pagination_controls_button" onClick={pagesCount > currentPage ? () => setCurrentPage(currentPage + 1) : null}>
        <SvgArrow />
      </div>
    </PaginationControlsStyled>
  )
}
