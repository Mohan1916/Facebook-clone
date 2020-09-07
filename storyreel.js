import React from 'react'
import "./storyreel.css"
import Story from './Story'
import Photo from "./person.png"

function Storyreel() {
    return (
        <div className="storyreel">
            <Story
            image="https://images.unsplash.com/photo-1515052302123-4371a1d69b36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            profileSrc={Photo}
            title="Mohan Kumar" />

            <Story
            image="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80"
            profileSrc="https://www.pngfind.com/pngs/m/157-1575552_nos-logo-logo-nos-logo-nos-logo-pubg.png"
            title="Qazi tech" />

            <Story
            image="https://images.unsplash.com/photo-1587573578181-f3342274f4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
            profileSrc="https://i2-prod.mirror.co.uk/incoming/article10153495.ece/ALTERNATES/s1200c/Roman-Reigns-0320.jpg"
            title="Roman" />

            <Story 
            image="https://images.unsplash.com/photo-1578653883821-89a75dcbf391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80"
            profileSrc="https://www.kindpng.com/picc/m/3-37072_avenger-hd-png-logo-avenger-logo-wallpaper-hd.png"
            title="Caption" />

            <Story
            image="https://images.unsplash.com/photo-1513061780970-4f34b3f350dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
            profileSrc="https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg"
            title="Jeff bezos" />

        </div>
    )
}

export default Storyreel
