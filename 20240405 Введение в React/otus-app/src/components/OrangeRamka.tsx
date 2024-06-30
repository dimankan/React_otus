import { PropsWithChildren, ReactElement, ReactNode } from "react";

export function OrangeRamka(val: {
    textToShow: string;
    counter: number;
    myElement: ReactNode;
} &PropsWithChildren
) {
    const { textToShow, counter, myElement } = val;

    const myClicker = () => {
        alert('Вызван второй кликер');
    }
    const style = {
        borderColor: 'orange',
        borderStyle: 'dotted',
        borderWidth: '1rem',
        fontSize: '2rem',
        padding: '1rem'
    };

    const res: ReactElement =
        <div style={style}>
            Это оранжевая рамка
            <br />
            {textToShow}
            <br />
            {counter}
            <br />
            <button onClick={myClicker}>А меня нажми плиз</button>
            <br />
            {val.children}
            <br/>
            {myElement}
        </div>;
    return res;
}