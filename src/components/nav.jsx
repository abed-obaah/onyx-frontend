'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../assets/logo/Logo full.png";
import { Link } from 'react-router-dom';


export default function Nav() {
    return(
            <header className="bg-white p-3">
                <div><img src={Logo} alt="" /></div>
            </header>
    )
}