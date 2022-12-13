import React from "react";
import Boules from '../assets/images/boules.png';


function Header () {
    return (
        <div className="bg-primary pb-8 border-b-8 border-r-8 border-dotted border-tertiary">
            <img src={Boules} className="w-16" />
            <span className="text-2xl text-white whitespace-nowrap font-nero w-full block text-center">Christmas Cuny</span> 
            <div className="w-full flex justify-end">
                <img src={Boules} className="w-12 mr-16 -mt-4" />
            </div>
        </div>
    )
}

export default Header;