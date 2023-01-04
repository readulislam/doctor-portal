import React from 'react'
import { useSelector } from 'react-redux';

const BillReceipt = () => {
    const { isLoggedIn, isRegister, userInfo, userId } = useSelector(
        (state) => state.Auth
      );
  return (
    <div>

    </div>
  )
}

export default BillReceipt