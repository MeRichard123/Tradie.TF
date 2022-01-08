/* eslint-disable import/no-extraneous-dependencies */
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { BiHome, BiCalendar } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';
import { IoMdClose, IoIosMenu } from 'react-icons/io';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const showNav = () => {
    const nav = document.querySelector('#nav');
    nav?.classList.remove('closed');
  };
  const hideNav = () => {
    const nav = document.querySelector('#nav');
    nav?.classList.add('closed');
  };
  return (
    <main className="flex min-h-screen">
      <nav id="nav" className="z-10 absolute h-screen bg-bodyLight p-9 text-body text-center flex items-center flex-col justify-between">
        <div className="w-full">
          <button className="absolute top-5 right-5" type="button" onClick={() => hideNav()}>
            <IoMdClose size="1.5rem" />
          </button>
          <p className="font-main font-bold text-3xl mb-5">Tradie.TF</p>
          <div className="flex flex-col text-left">
            <a className="text-lg rounded-lg hover:bg-hoverDark focus:bg-hoverDark" href="/">
              <div className="my-3 flex py-1 px-10 items-center">
                <BiHome />
                <p className="ml-1">Dashboard</p>
              </div>
            </a>
            <a className="text-lg rounded-lg hover:bg-hoverDark focus:bg-hoverDark" href="/">
              <div className="my-3 flex py-1 px-10 items-center">
                <BiCalendar />
                <p className="ml-1">Calendar</p>
              </div>
            </a>
            <a className="text-lg rounded-lg hover:bg-hoverDark focus:bg-hoverDark" href="/">
              <div className="my-3 flex py-1 px-10 items-center">
                <AiOutlineTeam />
                <p className="ml-1">Teams</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-evenly text-left border-t pt-4 w-full">
          <div className="w-10 h-10 bg-body rounded-full" />
          <div className="ml-3">
            <p className="text-sm">John Lemon</p>
            <a href="/" className="text-xs underline">View Profile</a>
          </div>
        </div>
      </nav>
      <button type="button" onClick={() => showNav()} className="absolute top-10 left-10">
        <IoIosMenu size="2rem" />
      </button>
      <section className="py-7 px-11 pt-24 sm:pt-7 sm:px-32">
        <Component {...pageProps} />
      </section>
    </main>
  );
}

export default MyApp;
