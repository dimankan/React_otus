import { useParams, useSearchParams } from "react-router-dom";

export function PageWithParams() {


    const qp = useParams();

    const [queryParams, setQueryParams] = useSearchParams();

    
    const css = {
        margin: '10px',
        border: '5px solid red'
    };
    //http://localhost:3000/page2/fdjlksdfgdskl/qqqqqqq?barbie=ken&helloKitty=helloDog
    console.log(qp);

    console.log(queryParams);

    return <div style={css}>
        Это страница 2 с параметром {qp.id} А параметр Fancy = '{qp.fancy}' <br /> {JSON.stringify(queryParams.get('helloKitty'))}

        <button onClick={() => setQueryParams({ 'currentDate': new Date() + '' })}>Задай дату</button>

    </div>



};

