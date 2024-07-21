import { useNavigate } from "react-router";



const Page1 = () => {

    const css = {
        padding: '10px',
        border: '5px solid blue'
    };


    const nav=useNavigate();

    const navigate=()=>{
nav(`/page2/OOOOOOO/UUUUUU`);
    }

    return <div style={css}>Это страница 1
    
    <button onClick={()=>navigate()}>Перейти на заказ</button>
    </div>
};

export default Page1;