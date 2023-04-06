import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai" ;
import Image from 'next/image';
import deved from 'public/propic.jpeg';
import code from 'public/code.png';
import {useState} from 'react';

export default function Home() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>Vittorio Compagno Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-neutral-200 px-10 font-mono md:px-20 lg:px-40 dark: bg-slate-900 '>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-teal-400'>Cats are superior</h1>
            <ul className = 'flex items-center'>
              <li>
                  <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark: text-white'/>
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-600 to-teal-500  text-white px-4 py-2 border-none rounded-md ml-8' href="###">My Resume</a>
              </li>
            </ul>
          </nav>
          <div className= 'text-center p-10 mx-auto max-w-xl md:text-xl'>
            <h2 className=' text-5xl text-teal-700 font-medium dark:text-white '>Vittorio Compagno</h2>
            <h3 className=' text-2xl pt-5 dark:text-teal-400'>Developer</h3>
            <p className='text-medium py-5 leading-8 text-gray-800 dark:text-teal-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget pharetra dolor. Nulla hendrerit fermentum felis, id malesuada velit scelerisque sit amet. Duis sed nunc id eros iaculis condimentum vel sed nisl. Proin venenatis fringilla porttitor. Nulla rutrum elit et consequat tempus. Fusce tincidunt ut nisl sit amet pharetra. Vivamus nec imperdiet nunc. Quisque mattis dolor ut erat dictum feugiat. Nam lacinia urna maximus facilisis posuere.
            </p>
          </div>
          <div className=' text-4xl flex justify-center gap-16 p-10 py-3 text-gray-400 dark:text-teal-400'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
          </div>
          <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden'>
            <Image src={deved} alt= "That's me" fill objectFit='cover' />
          </div>
        </section>
        <section className='min-h-screen dark:text-teal-400'>
          <div className = 'mx-auto max-w-xl'>
            <h3 className=' text-3xl pt-10 pb-3 dark:text-white ' > What I do </h3>
            <p className='text-mediumpy-5 leading-8 text-gray-800 md:text-xl dark:text-teal-400'> 
            Morbi placerat turpis at nisl venenatis, eget sodales leo pretium. Vestibulum libero leo, bibendum vel condimentum sit amet, malesuada non diam. Aenean interdum volutpat libero, at pretium felis viverra vitae. Proin dictum, urna sed placerat lacinia, eros eros venenatis nunc, eu tincidunt diam massa non massa. Donec congue nulla vel mi semper fringilla cursus ut mi. Praesent sed ex rhoncus, mattis mi ut, porta magna. Etiam id accumsan mi.
            </p>
          </div>
          <div className='lg:flex gap-10 py-10'>
            <div>
             <div className='text-center shadow-xl p-10 rounded-xl my-10'>
               <div className='flex justify-center'>
               < Image src={code}  height={100} width={100} alt = 'miao'/>
               </div>
               <h3 className='pt-10 pb-2 text-lg font-medium dark:text-white '> MIAO </h3>
               <p>
                 Donec id ipsum lectus. Quisque eu justo non massa tempus laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sed suscipit eros. Maecenas hendrerit sit amet diam id hendrerit. Cras laoreet venenatis sem id cursus.
               </p>
             </div>
            </div>
            <div className='lg:flex gap-10'>
             <div className='text-center shadow-xl p-10 rounded-xl my-10'>
               <div className='flex justify-center'>
               < Image src={code}  height={100} width={100} alt = 'miao'/>
               </div>
               <h3 className='pt-10 pb-2 text-lg font-medium dark:text-white '> MIAO </h3>
               <p>
                 Donec id ipsum lectus. Quisque eu justo non massa tempus laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sed suscipit eros. Maecenas hendrerit sit amet diam id hendrerit. Cras laoreet venenatis sem id cursus.
               </p>
             </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
