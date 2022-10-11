import React, { ReactElement } from 'react'
import _ from 'lodash'

interface PaginationProps {
  itemsCount: number
  pageSize: number
  onPageChange: (
    e: React.MouseEvent<HTMLSpanElement>,
    pageIndex: number
  ) => void
  currentPage: number
}

const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage
}: PaginationProps): ReactElement => {
  const pageCount: number = Math.ceil(itemsCount / pageSize)
  let pages: number[] = []
  if (pageCount !== 1) {
    pages = _.range(1, pageCount + 1)
  }
  const setAnchorClassname = (page: number): string => {
    const headerIsActive = currentPage === page ? 'active' : ''
    const anchorClasses = ['page-link', headerIsActive]
    return anchorClasses.join(' ')
  }
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pages.map((page) => (
          <li key={`page_${page}`} className="page-item">
            {
              // button написан специально, чтобы не выбивать ошибку о href(ссылке)
            }
            <button
              type="button"
              className={setAnchorClassname(page)}
              onClick={(e) => onPageChange(e, page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
