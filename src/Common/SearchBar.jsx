import React, { useEffect, useState } from 'react';



function SearchBar({data,selectedMenu,setSelectedMenu}) {
  const defaultData = data[0]
 
    const [open,setOpen] = useState(false);
   
    useEffect(()=>{
      setSelectedMenu(defaultData)
       },[defaultData,setSelectedMenu])
  return (
    <>
    <div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 justify-between pb-4">
        <div>
            <button
            
            
            onClick={()=>{setOpen(!open)}}
           className="inline-flex items-center relative text-gray-500 w-64 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <svg className="w-4 h-4 mr-2 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
              {selectedMenu}
                <svg className="w-3 h-3 absolute right-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {/*  Dropdown menu  */}
           <div  className={` ${open ? 'block':'hidden'} z-10 w-64 absolute bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}  >
                {/* style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);" */}
                  <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" >
                  {data.map(menu =><>
                  
                  
                    <li onClick={()=>{setOpen(false); setSelectedMenu(menu)}}>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <label>
                            <input id="filter-radio-example-1" type="radio"  name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <span for="filter-radio-example-1" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{menu}</span></label>
                        </div>
                    </li>
                  </>)}
                   
                </ul>
            </div>
        </div>
        {/* search */}
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-52 md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>
    </div>
    
    
    </>
  )
}

export default SearchBar