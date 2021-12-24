import React from "react";

import {Wrapper} from "./buttom.style";
import {OverlayTrigger, Popover} from "react-bootstrap";

const Button = ({text, callback}) => (

    <div>
        <Wrapper type='link' onClick={callback}>
            {text}
        </Wrapper>
    </div>

)


export default Button;