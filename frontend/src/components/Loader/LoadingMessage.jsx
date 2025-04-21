import React from 'react';

const LoadingMessage = () => {
    return (
      <div className="flex place-items-center justify-center align-items-center h-screen text-3xl">
        <p>L</p>
        <p className='border-2 border-dashed rounded-lg border-blue-600 animate-spin'>o</p>
        <p>ading..</p>
      </div>
    );
};

export default LoadingMessage;