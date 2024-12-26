



import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="flex items-center justify-between bg-blue-900">
      {/* Logo */}
      <div className="flex items-center gap-24">
        <div className='mt-2'>
          <Image 
            src='/image/govlogo.jpg'
            alt='Government Logo' 
            width={60} 
            height={60} 
            className="ml-12 mt-2"
          />
        </div>
        <h1 className="text-white text-2xl font-bold text-center">
          Tuition-Free Education Program On Latest Technology
        </h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex font-bold gap-12 text-white mr-24">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Apply">Apply</Link></li>
          <li><Link href="/result">Result</Link></li>
          <li><Link href="/job">Job</Link></li> {/* Link to the Job page */}
          <li><Link href="/Courses">Courses</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
