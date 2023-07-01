import React from 'react'
import { Link } from 'react-router-dom'
import {IoCog, IoHome, IoList, IoPerson} from "react-icons/io5"
import { FaTimes } from 'react-icons/fa'
import { activeEl } from '../lib/ActiveSidebar'
function SideBar() {
  return (
      <div className='sidebar'>
          <FaTimes className='toggle-icon' onClick={()=>activeEl(".sidebar","active")}/>
          <div className='sidebar-brand'><h2>SPEEDEX</h2>
            
          </div>
          <hr />
          <ul>
              <li>
                  <Link to={"/"}><IoHome className='icon'/> Acceuil</Link>
              </li>
               <li>
                  <Link to={"/users"}><IoPerson className='icon'/>Utilistateurs</Link>
              </li>
              <li>
                  <Link to={"/articles"}><IoList className='icon'/>Articles</Link>
              </li>
              <li>
                  <Link to={"/settings"}><IoCog className='icon'/>paramètres</Link>
              </li>
          </ul>
    </div>
  )
}

export default SideBar