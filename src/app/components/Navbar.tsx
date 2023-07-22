'use client';
import {useState, useEffect} from 'react';
import {FaToriiGate, FaTimes, FaBars, FaShoppingCart} from 'react-icons/fa';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import Button from '../micro/btnCart';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function Navbar(){
const [navOpen, setNavOpen] = useState(false);
const [isDdOpen, setDdOpen] = useState(false);
const router = useRouter();
const {openCart, cartQuantity} = useShoppingCart();

useEffect(()=>{
  loadLate();
}, [])

  /*dark mode*/
function loadLate(){
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }    
});
}
/*END-dark mode*/

  function handleDropDown(){
    setDdOpen(!isDdOpen);
  };

  function signin() {
    console.log('Yes');
  }

  function toggleNavOpen() {
    setNavOpen((prevState) => !prevState);
  }
  {/* bg-[#31475f] */}
  return (
    <nav className='mb-4 px-8 py-5 bg-white md:flex md:items-center md:justify-between dark:bg-gray-700 dark:text-white'>
      <div className='flex justify-between items-center'>
        <Link href='/' className='block py-2 px-4 hover:bg-gray-100'>
          <span className='text-xl font-[Poppins] cursor-pointer'>
            <FaToriiGate className=' text-blue-500' />
          </span>
        </Link>
        <span
          className='mt-2 mr-2 cursor-pointer block md:hidden'
          onClick={() => toggleNavOpen()}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </span>
      </div>
      <ul
        className={`transition-all ease-in duration-500 w-full  bg-white md:flex md:items-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 dark:bg-gray-700 dark:text-gray-400 ${
          navOpen
            ? 'flex-col text-right z-[1] relative p-7 top-[30px]'
            : 'z-[-1] absolute left-0 py-4 pl-7 top-[-400px]'
        }`}
      >
        <li className='ml-4 my-6 md:my-0'><Link href='/pages/store/' className='block py-2 px-4 hover:bg-gray-100'>Store</Link></li>
        <li className='ml-4 my-6 md:my-0'><Link href='/pages/about/' className='text-sm hover:text-blue-500 duration-500'>ABOUT</Link></li>
        <li className='ml-4 my-6 md:my-0'>
          <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"><svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg><svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
        </li>
        { cartQuantity > 0 && <li className='ml-4 my-6 md:my-0'><Button quantity={cartQuantity} onClick={()=>openCart()}><FaShoppingCart /></Button></li>}
      </ul>
    </nav>
  );
}