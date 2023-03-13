import { useEffect, useState } from "react";
import Card from "../Card/Card";

function ReadById(){
    // let item = undefined;

    const[item, setItem] = useState();

    const id = "640f1bf8c7cf65ba80fee35c";

    async function realizarRequisicao(){

        const url = "http://localhost:3000/item/" + id; // Concatenação
        // const url = `http://localhost:3000/item/${id}`; Tamplate String
        // url = http://localhost:3000/item/63fd2d7b4cf68a3ed17dd781
        
        const response = await fetch(url);
        const data = await response.json();

        console.log("data", data);

        // item = data;
        setItem(data);

        console.log("item 22", item);
    }
    useEffect(function() {
        console.log("Executar apenas uma vez");
        realizarRequisicao();
    }, []);

    console.log("item 30", item);

    if(!item){
        return <div>Carregando...</div>;
    }

    return (
        <div className="ReadById">
            <Card item={item} />
        </div>
    );
}

export default ReadById;