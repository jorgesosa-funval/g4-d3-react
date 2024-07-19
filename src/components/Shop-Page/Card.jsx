import { CardList } from "./CardList"
import { CardItem } from "./CardItem"

export const Card = ({ products }) => {
  return (
    <>
      <CardList>
        {products &&
          products.slice(0, 20).map(prod => (
            <CardItem 
              key={prod.id} 
              title={prod.title}
              price={prod.price}
              img={prod.image || prod.img}  // Use 'image' or 'img' depending on your API response
            />
          ))
        }
      </CardList>
    </>
  )
}