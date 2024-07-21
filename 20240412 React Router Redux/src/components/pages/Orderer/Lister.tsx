import { OrderThing } from "../../../models/orderThing";
import ColorOrderItem from "./ColorOrderItem";

interface Props {

}

const list: OrderThing[] = [
    {
        id: 1,
        name: 'Красный',
        color: 'red',
    },
    {
        id: 2,
        name: 'Желтый',
        color: 'yellow',
    },
    {
        id: 3,
        name: 'Зеленый',
        color: 'green',
    },
    {
        id: 4,
        name: 'Синий',
        color: 'blue',
    },

    {
        id: 5,
        name: 'Циан',
        color: 'cyan',
    },
    {
        id: 6,
        name: 'Пурпурный',
        color: 'purple',
    },
]

const OrdererLister = (props: Props) => {
    const css = {
        padding: '10px',
    };
    return <div style={css}>
        {list.map(x => <ColorOrderItem item={x} key={`oi_${x.id}`} />)}
    </div >;
};

export default OrdererLister;