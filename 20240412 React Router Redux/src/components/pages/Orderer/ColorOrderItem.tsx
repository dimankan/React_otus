
import { OrderThing } from "../../../models/orderThing";
import { useDispatch } from 'react-redux';
import { OrderActions } from "../../../stateManagement/orderReducer";
import { orderCheck } from "../../../stateManagement/slice";

interface Props {
    display?: string,
    item: OrderThing;
}
const ColorOrderItem = (props:Props) => {

    const { item, display } = props;
    const css = {
        display: display || 'block',
        padding: `10px`,
        margin: '10px',
        width: '200px',
        border: `2px solid ${item.color}`,
    };

    const dispatch = useDispatch();



    const onClick = (e: any) => {
        // при помощи dispatch сигнализируем redux
        // что нужно расчитать state
        dispatch({
            type: 'FANCY_ORDER_CHECK',
            payload: item,
        });
    };



    return <div style={css}>
        <input type={'checkbox'} onChange={onClick} />
        <span>{item.name}</span>
    </div>;
};
export default ColorOrderItem;