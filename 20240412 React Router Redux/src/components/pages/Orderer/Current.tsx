import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { OrderThing } from "../../../models/orderThing";
import ColorOrderItem from "./ColorOrderItem";

interface Props {

}

const CurrentLister = () => {


    // при помощи useSelector можем получить текущий стейт
    const orderedList = useSelector((gs:any) => gs.order.list);

    return <>
        {orderedList.map((x: OrderThing) => {
            return <div style={{ display: 'inline' }}>
                <ColorOrderItem key={`Oi_${x.id}`} item={x} display="inline" />
            </div>
        })}
    </>;
};

export default CurrentLister;