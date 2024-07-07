import axios from "axios";
import { eventNames } from "process";
import { stringify } from "querystring";
import { ChangeEvent, ReactElement } from "react";

interface ButtonFunctionProps {
    url: string;
    onResponse: (response: string) => void;
}

export function ButtonFunction(props: ButtonFunctionProps) {

    const handleClick = async () => {
        try {
            const response = await axios.get(props.url);
            console.log(response.data.fact);
            props.onResponse(response.data.fact);
        }
        catch {
            props.onResponse("Ошибка при выполнении запроса")
        }
    }

    const res: ReactElement = <div>
        <button onClick={handleClick}>Отправить</button>
    </div>

    return res;
}