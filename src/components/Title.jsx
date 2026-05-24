import React from 'react'

export const Title = ({ title, desc }) => {
  return (
        <>
            <h2 className='mt-32 text-3xl font-medium sm:text-5xl'>
                {title}
            </h2>
            <p className='max-w-lg mb-6 text-center text-gray-500 dark:text-white/75'>
                {desc}
            </p>
        </>
    )
}
  
