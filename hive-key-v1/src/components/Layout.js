import { Outlet } from "react-router-dom";
import React from "react";
import './Layout.css'

const Layout = () =>{
    return(
        <div>
            <main>
                <Outlet/>
            </main>
            <footer>
                Copyright 2025 HiveKey. All rights reserved.
            </footer>
        </div>
    )
}

export default Layout;