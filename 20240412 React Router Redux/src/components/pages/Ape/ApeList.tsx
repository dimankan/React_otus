import ApeItem from "./ApeItem";
import ape1 from '../../../assets/ape1.png';
import ape2 from '../../../assets/ape2.jpg';
import ape3 from '../../../assets/ape3.jpg';
import Ape, {Ape as Ape1} from "./Ape";

const users = [
    { imgUrl: ape1, username: 'Афанасий' },
    { imgUrl: ape2, username: 'Инокентий' },
    { imgUrl: ape3, username: 'Агафон' },
];


const ApeList = () => {

    return <>
        <div style={{display:"flex"}}>
            {users.map(x => <ApeItem user={x} key={`oi1_${x.username}`} />)}
        </div >
        <Ape />
    </>;
};

export default ApeList;
