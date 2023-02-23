import React from 'react'
import ManageAvailabilitiesView from './ManageAvailabilitiesView'

const ManageAvailabilities = () => {
  return (
    <>
    <p className='text-xl font-semibold uppercase pb-2'>Set your availability</p>
    <p className='text-sm'>Choose a schedule below to edit or create a new one that you can apply to your </p>
    <ManageAvailabilitiesView/>
    </>
  )
}

export default ManageAvailabilities