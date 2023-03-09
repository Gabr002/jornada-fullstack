import "./ReadAll.css"
import Card from "../Card/Card";
import {  useEffect,  useState } from "react";

// Mock: Itens (exatamente a mesma estrutura que o Back traria)
const itensMock = [
  {
    "_id": "63fd2d7b4cf68a3ed17dd781",
    "nome": "Filipe Ret",
    "imagemURL": "https://www.tupi.fm/wp-content/uploads/2022/07/ret.jpg",
    "tags": [
      "Status: Cantor",
      "Origem: Brasileira"
    ]
  },
  {
    "_id": "6400d4059946791cb8d1f1b9",
    "nome": "L7nnon",
    "imagemURL": "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/11/L7NNON-1.jpg",
    "tags": [
      "Status: Cantor",
      "Origem: Brasileira"
    ]
  },
  {
    "_id": "6400d4179946791cb8d1f1ba",
    "nome": "30praum",
    "imagemURL": "https://rapforte.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-21.18.02.jpeg",
    "tags": [
      "Status: Cantores",
      "Origem: Brasileira"
    ]
  },
  {
    "_id": "6400d4919946791cb8d1f1bb",
    "nome": "Lil Gabi",
    "imagemURL": "https://colunadofla.com/wp-content/uploads/2021/12/Gabigol-faz-show-durante-ferias.jpg",
    "tags": [
      "Status: Cantor",
      "Origem: Brasileira"
    ]
  },
  {
    "_id": "6400d4a29946791cb8d1f1bc",
    "nome": "Lucas Alves",
    "imagemURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCOZIAwqaTAj9Ba2VpYoM0NY8V2fu3djqIpNEV2gPkzyCSqpEPW-xJvgEP0w5ZWMqqnw&usqp=CAU",
    "tags": [
      "Status: Músico",
      "Origem: Brasileira"
    ]
  }
];

// Quando quero transformar uma lista de registros em uma nova lista, com os registros modificados, posso usar o operador "map".

/* 
- Para cada item da lista, exibe um card do Rick Sanchez
- Pegar a informação de cada item e enviar para o componente <Card />
- A informação recebida no card deve ser exibida no console.log
- Pegar cada parte da informação recebida e colocá-la nos elementos de HTML
*/

// const numero = 2;

// Sintaxe de concatenação de váriaveis dentro do JSX
// { VARIAVEL }
// Concatenação = Unir de forma lógica

// console.log(itens);

// Na verdade as chaves representam que qualquer código JavaScript pode ser inserido dentro delas.
function ReadAll(){
  // useState retorna 2 coisas:
  // 1: O valor do estado
  // 2: a função que atualiza o estado
  // const estadoItens = useState([]);
  // const itens = estadoItens[0]; 
  // const atualizarItens = estadoItens[1];
    const [itens, setItens] = useState([]);

  // Realizar requisição para o backend obtendo a lista de itens
    async function realizarRequisicao(){ 
      // const url = "http://localhost:3000/item";
      const url = "https://ocean-jornada-fullstack-fev-23.onrender.com";
      const response = await fetch(url);
      const data = await response.json();

      setItens(data); 

    }

    // useEffect
    // 1: Uma função que será executada
    // 2: Uma linha de dependências
    // console.log("Antes de chamar a função `realizarRequisição()`.");
    useEffect(function(){
      realizarRequisicao();
    }, []);
    // console.log("Após de chamar a função `realizarRequisição()`.");
    // console.log(67, itens);

    return ( 
        <div className="ReadAll">
            {itens.map(function(item){
              return <Card key={'card-' + item._id} item={item} />;
            })}
        </div>
    );
}
export default ReadAll;