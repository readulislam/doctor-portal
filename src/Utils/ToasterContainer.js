import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterContainer = () => {
    return (
        <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={8}
//   containerClassName=""
  containerStyle={{
    top: 20,
    
  }}
  toastOptions={{
    // Define default options
    className: '',
    duration: 4000,
    style: {
      background: '#363636',
      color: '#fff',
      padding: '16px',
    },
    // Default options for specific types
    success: {
      duration: 4000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    );
};

export default ToasterContainer;