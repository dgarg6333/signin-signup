import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-purple-800 text-white py-6 md:px-36 px-12'>
      <div className='container mx-auto flex justify-between items-center'>
        <h2 className='text-3xl font-semibold'>Qna</h2>
        <div className='flex space-x-6'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebookF className='text-white hover:text-blue-600' size={24} />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='text-white hover:text-blue-400' size={24} />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-white hover:text-pink-500' size={24} />
          </a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn className='text-white hover:text-blue-700' size={24} />
          </a>
        </div>
      </div>
      <p className='text-sm text-center mt-4'>
        &copy; {new Date().getFullYear()} Qna. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;