import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg  '>
        <Layout className='py-8 flex items-center justify-between '>
            <span>
                {new Date().getFullYear()} &copy; All Rights Reserved.
            </span>
            <div className='flex items-center'>Built with<span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>by Sneha Sahu</div>
        </Layout>
    </footer>
  )
}

export default Footer