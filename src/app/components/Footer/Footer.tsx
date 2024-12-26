



import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex gap-6 bg-gray-200 text-black-300 p-8 '>
      <div className='flex ml-20 p-8 '>
        {/* Core Courses Section */}
        <div className='flex flex-col'>
          <h1 className='font-bold text-2xl text-black-400 ml-8'>Core Courses</h1>
          <ul className='ml-12'>
            <li>
              <Link href='#'>
                Programming Fundamentals
              </Link>
            </li>
            <br/>
            <li>
              <Link href='#'>
                Web2 Using Next.js
              </Link>
            </li>
            <br/>
            <li>
              <Link href='#'>
                Earn as you learn
              </Link>
            </li>
          </ul>
        </div>

        {/* Advanced Courses Section */}
        <div className='flex flex-col ml-16'>
          <h1 className='font-bold text-2xl text-black-400 ml-8'>Advanced Courses</h1>
          <ul className='ml-12'>
            <li>
              <Link href='#'>
                Advanced Programming Fundamentals
              </Link>
            </li>
            <br/>
            <li>
                
              <Link href='#'>
                Advanced Web2 Using Next.js
              </Link>
            </li>
            <br/>
            <li>
              <Link href='#'>
                Earn as you learn (Advanced)
              </Link>
            </li>
            <br/>
            <li>
              <Link href='#'>
                Advanced Programming Fundamentals
              </Link>
            </li>
            <br/>
            <li>
              <Link href='#'>
                Advanced Programming Fundamentals
              </Link>
            </li>
            <br/>
            <li>
              <Link href='#'>
                Advanced Programming Fundamentals
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className='flex flex-col ml-16'>
          <h1  className='font-bold text-2xl text-black-400 ml-8'>Social Links</h1>
          <br/>
          <br/>
          <ul className='ml-15 flex gap-6'>
          <li>
  {/* Facebook */}
  <Link href="https://www.facebook.com" passHref>
   
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 320 512"
        className="h-5 w-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: '#1877F2' }} // Facebook blue
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>
  
  </Link>
</li>

<li>
  {/* Instagram */}
  <Link href="https://www.instagram.com" passHref>
 
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        className="h-5 w-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: '#E4405F' }} // Instagram pink
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.1c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.2-36.2-93.5s-57.8-34.5-93.5-36.2C310.7 16 297.4 16 224 16s-86.7 0-122.9 2.6c-35.7 1.7-67.2 9.9-93.5 36.2s-34.5 57.8-36.2 93.5C16 165.3 16 178.6 16 252s0 86.7 2.6 122.9c1.7 35.7 9.9 67.2 36.2 93.5s57.8 34.5 93.5 36.2c35.7 1.7 49 2.6 122.9 2.6s86.7 0 122.9-2.6c35.7-1.7 67.2-9.9 93.5-36.2s34.5-57.8 36.2-93.5c1.7-35.7 2.6-49 2.6-122.9s0-86.7-2.6-122.9zm-48.6 242.1c-7.8 19.7-23 35-42.6 42.6-29.5 11.7-99.5 9-132.9 9s-103.4 2.6-132.9-9c-19.7-7.8-35-23-42.6-42.6-11.7-29.5-9-99.5-9-132.9s-2.6-103.4 9-132.9c7.8-19.7 23-35 42.6-42.6 29.5-11.7 99.5-9 132.9-9s103.4-2.6 132.9 9c19.7 7.8 35 23 42.6 42.6 11.7 29.5 9 99.5 9 132.9s2.6 103.4-9 132.9z"></path>
      </svg>
   
  </Link>
</li>

<li>
  {/* Twitter */}
  <Link href="https://www.twitter.com" passHref>
    
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="h-5 w-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: '#1DA1F2' }} // Twitter blue
      >
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001v-1.299c14.182 7.797 30.355 12.67 47.431 13.32-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-58.29 47.431-105.72 105.72-105.72 30.355 0 57.797 12.67 77.005 33.137 24.04-4.548 46.456-13.32 66.599-25.34-7.797 24.366-24.366 44.833-46.132 57.797 21.366-2.273 41.509-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
      </svg>
   
  </Link>
</li>




<li>
  {/* GitHub */}
  <Link href="https://www.github.com" passHref>
 
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        className="h-5 w-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: '#181717' }} // GitHub black
      >
        <path d="M511.6 76C273.6 76 77 273 77 512.2 77 728.2 223.5 905 418 962.7c30.4 5.6 41.5-13.2 41.5-29.3v-103c-169.2 35.4-202.2-80.7-202.2-80.7-27.6-70.6-67.2-89.4-67.2-89.4-54.7-38.3 4.1-37.6 4.1-37.6 60.3 4.4 92 61.9 92 61.9 53.7 91.9 140.9 65.3 175.3 50 5.4-38.9 21-65.3 38.1-80.3-135.1-15.3-276.9-67.6-276.9-300.7 0-66.4 23.7-120.7 62.5-163.3-6.3-15.4-27.1-77.4 5.9-161.3 0 0 51-16.4 167 62.2 48.4-13.6 100.4-20.4 152.1-20.6 51.7.2 103.8 7 152.3 20.6 116.1-78.6 167.1-62.2 167.1-62.2 33.1 83.9 12.3 145.9 6 161.3 38.8 42.6 62.4 96.9 62.4 163.3 0 233.6-142.1 284.9-277.6 299.7 21.6 18.9 41.2 56.4 41.2 114v168.8c0 16.2 10.9 35.1 42.1 29.2 193.8-58.1 340.6-234 340.6-450.2C947 273.2 750 76 511.6 76z"></path>
      </svg>
   
  </Link>
</li>

<li>
  {/* YouTube */}
  <Link href="https://www.youtube.com" passHref>
    
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        className="h-5 w-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: '#FF0000' }} // YouTube red
      >
        <path d="M941.1 246.1c-11.3-42.6-44.7-76-87.2-87.3C794 144 512 144 512 144s-282 0-341.9 14.8c-42.5 11.3-75.9 44.7-87.2 87.3C67 306.1 67 512 67 512s0 205.9 15 265.9c11.3 42.6 44.7 76 87.2 87.3 59.9 14.8 341.9 14.8 341.9 14.8s282 0 341.9-14.8c42.5-11.3 75.9-44.7 87.2-87.3 15-60 15-265.9 15-265.9s0-205.9-15-265.9zM432 666.5V357.5l231.7 154.5L432 666.5z"></path>
      </svg>
  
  </Link>
</li>

<li>
  {/* TikTok */}
  <Link href="https://www.tiktok.com" passHref>
  
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        className="h-5 w-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: '#000000' }} // TikTok black
      >
        <path d="M733.5 0H1024v290.5h-67.8c-112.1 0-207.3-57.6-261.6-144v396.7c0 131.8-106.8 238.6-238.6 238.6-96.5 0-180.1-56.1-218.5-137.5C136 922.7 67 854.2 67 769.7c0-94.2 67.3-173.6 156.7-194.2v79.7c-45.3 16.6-78.1 59.9-78.1 111.7 0 65.3 53 118.3 118.3 118.3s118.3-53 118.3-118.3V0h193.8c9.9 111.1 106.4 198 221.5 198.7V0z"></path>
      </svg>
  
</Link>
</li>




             
          </ul>


          <a className="mt-4 flex items-center py-1 text-main underline" target="_blank" href="mailto:education@governorsindh.com"><div className="mr-3 h-6 w-6"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="h-6 w-6 text-main" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
          </svg></div>education@governorsindh.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
