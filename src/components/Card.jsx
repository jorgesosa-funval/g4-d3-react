import { useEffect, useState } from "react"
import { CardList } from "./CardList"
import { CardItem } from "./CardItem"


export const Card = () => {
  const [data, setData] = useState([])

    async function getData() {
      const rs = await fetch('https://api.escuelajs.co/api/v1/products')
      const rsJson = await rs.json()

      const filterProducts = rsJson.map(prod => ({
        id: prod?.id,
        title: prod?.title,
        price: prod?.price,
        img: prod?.images[0],
        img2: prod?.category.image,
      }))
        setData(filterProducts)
    }
    
    useEffect(() => {
      getData()
    }, [])


  return (

<>
    <CardList >
       {data && 
            data.slice(0,20).map(prod => <CardItem key={prod.id} prod={prod}/>)
       }      
    </CardList>
</>
  )
}


