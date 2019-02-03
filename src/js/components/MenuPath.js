import React from "react";
import { Link } from "react-router-dom";

import '../../main.css';


const MenuPath = props => {
        return(
            <div className="menu d-flex justify-content-between align-items-center bars shadow">
                <div className="p-2 small-logo transparent bring-to-front">

                </div>
                <div className="p-2 primary-gray bring-to-front">PÁGINA PRINCIPAL</div>
                <div className="previewComponent bring-to-front m-2">
                    <Link to="/perfil/">
                        <div id="image-default" className="imgPreview">
                            <img src="/imgs/icons/user_no_border.png"/>
                        </div>
                    </Link>
                </div>
                <div ref={props.pathRef} className="path align-self-center">
                </div>
                <div className="background white shadow align-self-center">

                </div>
            </div>
        );
};

export default MenuPath;
