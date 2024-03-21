import React from 'react'
import Nav from './Nav/Nav'
import OhmImage from "../../../../../assets/ohm1.png"

const TarInCigrette10Outlet = ({ children }) => {
    return (
        <div className="bg-dashmain py-5">
            <div className='w-11/12 m-auto '>
                <div className="top h-60 uppercase flex items-center justify-between bg-overviewWhite rounded-lg">
                    <div className="left pl-10">
                        <p className="text-dark50 font-medium text-2xl">Physics</p>
                        <div className="font-bold text-5xl w-3/3" style={{
                            background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}>DEMONSTRATION OF THE PRESENCE OF TAR IN CIGARETTE SMOKE</div>
                    </div>

                    <div className="right p-5">
                        <img src={OhmImage} alt="" />
                    </div>
                </div>

                <div className=" bg-overviewWhite rounded-lg mt-6">
                    <Nav />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default TarInCigrette10Outlet