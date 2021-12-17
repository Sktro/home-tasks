import React from 'react'
import Header from './Header'
import {HashRouter, Routes} from "react-router-dom";
import {AllRoutes} from "./Routes";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                    {/*в gh-pages лучше работает HashRouter*/}
                    <AllRoutes/>
            </HashRouter>
        </div>
    )
}

export default HW5
