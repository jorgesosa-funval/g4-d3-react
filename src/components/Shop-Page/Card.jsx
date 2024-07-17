import { useEffect, useState } from "react"
import { CardList } from "./CardList"
import { CardItem } from "./CardItem"

// https://api.escuelajs.co/api/v1/products no muestra imagenes 
// https://fakestoreapi.com/products/ - api de productos solo tienen 20

export const Card = () => {
    const [data, setData] = useState([])

    async function getData() {
        const rs = await fetch(' https://fakestoreapi.com/products')
        const rsJson = await rs.json()

        const filterProducts = rsJson.map(prod => ({
            id: prod?.id,
            title: prod?.title,
            price: prod?.price,
            img: prod?.image,

        }))
        setData(filterProducts)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <CardList>
                {data &&
                    data.slice(0, 20).map(prod => <CardItem key={prod.id} prod={prod} />)
                }
            </CardList>
        </>
    )
}