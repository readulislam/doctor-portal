import { isEmpty } from 'lodash';
import React from 'react'

const SelectInput = ({ onchangeHandler,name,title, children,labelName}) => {
  return (<>
  
  <div class="relative">
  <label >
     <span class="block uppercase text-gray-500 text-xs font-semibold mb-2" >{labelName}</span>
     <select className="border-none px-3 py-2.5 placeholder-blueGray-300 text-gray-700 bg-white rounded text-md shadow appearance-none focus:outline-none focus:ring-0  focus:border-cyan-200   w-full ease-linear active:outline-none " name={name} onChange={onchangeHandler}>
    <option >choose</option>
    {children}
    </select>
    </label>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"></svg>
        </div>
      </div>


 
  
  
 
   
{/* 
as children
{!isEmpty(data) &&
                    data.map(({ id, name }) => {
                      return (
                        <option key={id} value={id}>
                          {(name)}
                        </option>
                      );
                    })}

*/}
  
    </>
    
    )
}

export default SelectInput