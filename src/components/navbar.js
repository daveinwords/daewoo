import React from 'react'
import { Link } from 'gatsby'
import '../css/navbar.css'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

const { buttonProps, itemProps, isOpen } = useDropdownMenu

const navbar = () => {
  return (
    <div className='nav-main'>
      <Link to="/"> 
        <img src="http://daewoomex.com/wp-content/uploads/2022/07/logo.png" alt="logo" width={130} />
      </Link>
      <Link to="/about" className="nav-link">
        Conócenos
      </Link>
      <Link to="/products" className="nav-link">
        Productos
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/contacto" className="nav-link">
        Contacto
      </Link>
    </div>
  )
}

export default navbar