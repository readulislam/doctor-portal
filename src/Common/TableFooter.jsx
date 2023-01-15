import React from 'react'

const TableFooter = ({children,footerWidth}) => {
  return (
    <>
    <hr />
    <div className={` ${footerWidth}    md:w-full px-4 pb-4 pt-2 bg-white flex  md:flex-row justify-between items-center`}>
        <nav class="flex  items-center justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        </nav>
        {children}
        </div>

    
    
    
    </>
  )
}

export default TableFooter