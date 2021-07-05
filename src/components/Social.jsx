import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';


const Social=()=>{
    return(
        <>
            <div className="icon_bar">
                <NavLink to="#" target="FaceBook" id="facebook">
                Click Here to visit
                <FacebookIcon className="facebook"/>
                </NavLink>
                <NavLink to="#" target="FaceBook" id="instagram">
                Click Here to visit
                <InstagramIcon className="instagram"/>
                </NavLink>
                <NavLink to="#" target="FaceBook" id="pinterest">
                Click Here to visit
                <PinterestIcon className="pinterest"/>
                </NavLink>
                <NavLink to="#" target="FaceBook" id="twitter">
                Click Here to visit
                <TwitterIcon className="twitter"/>
                </NavLink>
            </div>
        </>
    )
}

export default Social;