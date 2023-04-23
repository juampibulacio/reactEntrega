import React from "react";
import "./loader.css";
import Flex from "../Flex/Flex";

function Loader () {
    return (
        <Flex>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </Flex>
    )
}

export default Loader;