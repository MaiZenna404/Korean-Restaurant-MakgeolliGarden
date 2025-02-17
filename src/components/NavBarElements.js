import React from 'react'
import { TfiHome } from "react-icons/tfi"; // icône pour Accueil
import { MdRestaurantMenu } from "react-icons/md"; // icône pour le menu
import { IoInformationCircleOutline } from "react-icons/io5"; // icône pour le about us
import { PiBowlFood } from "react-icons/pi"; // icône pour Gallery
//import { CiMail } from "react-icons/ci"; // icône pour le Contacts Us
import { RiAdminFill } from "react-icons/ri";; // icône pour le Staff Portal

export const NavBarElements = [
    {
        name: 'Homepage',
        path: '/homepage', //path à reporter dans le fichier index.js pour utiliser react-router-dom
        icon: <TfiHome />,
        elementClass: 'nav-links'
    },
    {
        name: 'About Us',
        path: '/aboutus',
        icon: <IoInformationCircleOutline />,
        elementClass: 'nav-links'
    },
    {
        name: 'Menu',
        path: '/menu',
        icon: <MdRestaurantMenu />,
        elementClass: 'nav-links'
    },
    {
        name: 'Gallery',
        path: '/gallerypage',
        icon: <PiBowlFood />,
        elementClass: 'nav-links'
    },
   /* {
        name: 'Contacts',
        path: '/contacts-and-infos',
        icon: <CiMail />,
        elementClass: 'nav-links'
    },*/
    {
        name: 'Staff Portal',
        path: '/staffportal',
        icon: <RiAdminFill />,
        elementClass: 'nav-links'
    }
]