import React from 'react'
import _ from 'lodash'

interface PaginationProps {
  itemsCount: number
  pageSize: number
  onPageChange: (e: React.MouseEvent<HTMLSpanElement>, pageIndex: number) => void
  currentPage: number
}

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }: PaginationProps) => {
  const pageCount: number = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null
  const pages: Array<number> = _.range(1, pageCount + 1)

  const setAnchorClassname = (page: number): string => {
    const headerIsActive = currentPage === page ? 'active' : ''
    const anchorClasses = ['page-link', headerIsActive]
    return anchorClasses.join(' ')
  }
  return (
    <>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li key={`page_${page}`} className="page-item">
              <a className={setAnchorClassname(page)} onClick={(e) => onPageChange(e, page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Pagination
