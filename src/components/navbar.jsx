
import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light"  style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5'}}>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav col-lg-12 col-12 navbuttons " >
                <li class="home nav-item d-none d-lg-block d-xl-block vertical-center">
                    <a role="menuitem"  style={{padding: '2%'}}>
                        <img class="logo" src={require('./images/logo.png')} alt="logo"style={{width: '90%', height: 60}}/></a>
                </li>
                <li class="nav-item navbuttons" >
                <Link class="nav-link" to="/">Home <span class="sr-only"></span></Link>
                </li>
                <li class="nav-item navbuttons">
                <Link class="nav-link" to="/stats">Statistics<span class="sr-only"></span></Link>
                </li>

                <li class="nav-item navbuttons">
                <Link class="nav-link" to="/texteditor">Editor<span class="sr-only"></span></Link>
                </li>
{/*               
                <li class="nav-item navbuttons">
                    <a class="nav-link" href="#">About Us</a>
                </li>

                <li class="nav-item navbuttons">
                    <a class="nav-link" href="#">Contact Us</a>
                </li> */}
{/* 
                <form class="d-flex navbuttons1"style={{width:'70%'}}>
                    <input class="form-control me-2 " type="search" placeholder="Search here" style={{marginLeft:'70%'}}
                        aria-label="Search"  />
                    <i class="fa fa-search"
                        style={{fontsize:'28px',color:'rgb(0, 0, 0)',position:'relative',left:'-5%' ,top: '23%'}}></i>
                </form> */}


                <li class="nav-item navbuttons">
                <Link class="nav-link" to="/signup">Sign Up<span class="sr-only"></span></Link>
                </li>

                <li class="nav-item navbuttons">
                <Link class="nav-link" to="/login">Login<span class="sr-only"></span></Link>
                </li>

                <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Editor Settings</a>
                        <div class="dropdown-menu">
                          
                            <Link class="dropdown-item" to="/displaymessages">Display Messages<span class="sr-only"></span></Link>   
                        <Link class="dropdown-item" to="/displayfiles">Display All Files<span class="sr-only"></span></Link>   
                        </div>
                    </div>
                <li class="nav-item navbuttons">
             
                </li>

            </ul>
        </div>
    </nav>

  )
}

export default Navbar