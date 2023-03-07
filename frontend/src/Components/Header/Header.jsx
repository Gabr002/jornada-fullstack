import React from "react";
import "./Header.css";

function Header(){
    return (
    <div className="Header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYlEXS6XL2RxYEpsnn3Pkp8_OWKvbz_rT-g&usqp=CAU" />
        <div className="Header__links">
            <a href="#">Home</a> 
            <a href="#">Criar</a> 
        </div>
    </div>
    );
}

export default Header;

// RFC: comandos para estruturar o boilerplate.