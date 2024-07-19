import { CardList } from "./CardList";
import { CardItem } from "./CardItem";

export const Card = ({ data }) => {
    return (
        <>
            <CardList>
                {data &&
                    data.slice(0, 20).map(prod => <CardItem key={prod.id} prod={prod} />)
                }
            </CardList>
        </>
    );
};