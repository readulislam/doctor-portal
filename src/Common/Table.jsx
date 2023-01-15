import React from 'react'
import { doctorHeading } from '../Utils/mockData'
import PaginationUI from './PaginationUI'
import TableFooter from './TableFooter'
 export const heading = ['Name',' Contact Number','Time','Date','Action']

const Table = ({ children,props,footerWidth}) => {
    const {TableHeader,TableRowData,page, setPage,totalPage} = props;
    console.log(totalPage)
  return (
    <>
    
<div className="relative shadow-sm sm:rounded-xl overflow-x-auto   ">
    {children}
  <div className='min-h-[300px] bg-white'>
  <table className="w-full text-sm    text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-green-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input disabled id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
              <TableHeader/>
                
                
            </tr>
        </thead>
        <tbody>
           <TableRowData/>
        </tbody>
       
    </table>
  </div>
    {totalPage>1 &&  <TableFooter footerWidth={footerWidth}>
        <PaginationUI totalPage={totalPage} page={page} onPageChange={(e)=>setPage(e)}/>
      </TableFooter>}
   
    
</div>

    
    
    
    </>
  )
}

export default Table