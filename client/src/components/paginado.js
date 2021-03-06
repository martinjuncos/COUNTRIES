import React from "react";


export default function PaginadoPi ({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = []

    for (let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++) {     //divido todas las recetas por las recetas que hay
        pageNumbers.push(i)                                        //en cada pag. y redondeo el resultado.
    }   // voy integrando el array con el resultado del for

    return (

        <nav>
            <ul  >
                { pageNumbers &&
                pageNumbers.map(number =>( 

                    <li className="number" key={number}>
                    <a onClick={() => paginado(number)}> {number} </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

// termino renderizando y mapeando el arreglo, solicitando que me devuelva cada numero del paginado