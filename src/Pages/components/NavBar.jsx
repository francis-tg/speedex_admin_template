import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa6"
import { activeEl } from '../lib/ActiveSidebar'
function NavBar() {
  return (
      <div className="nav-bar">
          <div className='left-item'>
            <FaBars className='toggle-icon' onClick={()=>activeEl(".sidebar","active")}/>  
              <div className='search-bar'>
              <input type="search" placeholder='Rechercher ici ...' />
          </div>
          </div>

          <div className='right-item'>
               <Link className='btn btn-danger'>Déconnexion</Link>
          </div>
    </div>
  )
}

export default NavBar