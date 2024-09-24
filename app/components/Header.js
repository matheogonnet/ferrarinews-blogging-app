import Link from 'next/link'
import Image from 'next/image'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext'



/**
 * Renders the header component.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {

  // State variable for the user from the UserContext
  const { user, profile, logout, login } = useContext(UserContext)

  return (
    <header className="header">
      <span className="w-30">
        <Link href={`/`} className="flex-grow flex items-center">
          <Image src="/ferrari.png" className='cursor-pointer h-8 mr-5' alt="Ferrari Logo" width={30} height={25} />
          <span className="menu-title">
            Ferrari News
          </span>
        </Link>
      </span>

      <ul className="flex gap-5">
        <Link href="/articles">
          <li className="menu">
            <p>
              Articles
            </p>
          </li>
        </Link>

        <Link href="/about">
          <li className="menu">
            <p>
              About Us
            </p>
          </li>
        </Link>

        <Link href="/contacts">
          <li className="menu">
            <p>
              Contact Us
            </p>
          </li>
        </Link>

        {user && (
          <li className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50 dark:text-slate-300">
            <Link href="/profile" className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              {profile?.username}
              <OutlineUserCircleIcon />
            </Link>
          </li>
        )}

        <li className="py-1 px-2 text-slate-800 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-50">
          {user ?
            <button onClick={logout} className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6" >
              Sign out
            </button>
            :
            <button onClick={login} className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              Sign in
            </button>
          }
        </li>
      </ul>
    </header>
  )
}
