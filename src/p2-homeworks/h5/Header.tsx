import React, {useState} from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import classes from './pages/pages.module.css'


function Header() {
    const isActiveNavLink = (nav: { isActive: boolean; }) => nav.isActive ? classes.active : classes.item
    return (
        <div>
            <div className={classes.slide_lft}>
                way
                <div className={classes.slide_in}>
                    <div className={classes.contain}>
                    <NavLink className={isActiveNavLink}
                             to={PATH.PRE_JUNIOR}>preJun</NavLink>
                    <NavLink className={isActiveNavLink}
                             to={PATH.JUNIOR}>Junior</NavLink>
                    <NavLink className={isActiveNavLink}
                             to={PATH.JUNIOR_PLUS}>Junior plus</NavLink>
                    </div>
                </div>
            </div>
    </div>

    )
}

export default Header
