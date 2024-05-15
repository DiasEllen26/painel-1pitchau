"use client"

function Categoria({params}: {params: { id: string}} ) {
    return (
        <h1>Parametro {params.id}</h1>
    )
}

export default Categoria;