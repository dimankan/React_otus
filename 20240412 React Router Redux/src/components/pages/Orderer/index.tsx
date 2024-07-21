import CurrentLister from "./Current";
import OrdererLister from "./Lister";

const OrdererMain = () => {
    return <>
        <CurrentLister />
        <OrdererLister />
    </>;
}

export default OrdererMain;