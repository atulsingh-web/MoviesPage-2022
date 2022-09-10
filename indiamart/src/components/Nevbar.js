import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nevbar.css";

function Nevbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-Dark bg-dark">
                <div class="container-fluid">
                    {/* <a href="index.html"> */}
                    <a class="nav-item" href="index.js">Refresh<img  src="images/newlogo.jpg" alt="#" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to="/Contact" className={"nav-link active"} style={{color:'red'}} >MOVIES.ONE </NavLink>

                            </li>


                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nevbar;
