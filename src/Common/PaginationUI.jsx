import React from 'react'
import { Button, Card, Pagination  } from "flowbite-react";
const PaginationUI = ({page, onPageChange,totalPage}) => {
  return (
    <>
     <Pagination
      currentPage={page}
      onPageChange={onPageChange}   //(e)=> setPage(e)
      showIcons={true}
      totalPages={totalPage}
      
    />
    </>
  )
}

export default PaginationUI