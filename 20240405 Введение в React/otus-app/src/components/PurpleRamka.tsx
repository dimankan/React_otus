import { Component, PropsWithChildren, ReactElement } from "react";
import './style.css';

interface FancyProps{
    textToShow:string;
    // textToShow?:string;
    // ? - необязательный параметр
    counter: number;
}

export class PurpleRamka extends Component<FancyProps & PropsWithChildren> {

clicker = () => {
    alert("Вызван кликер");
}
    render() {
        const res: ReactElement =
            <div className="purple">
                Это фиолетовая рамка
                '{this.props.textToShow}'
                <br/>
                {this.props.counter} + 2000 = {this.props.counter + 2000}

                <button onClick={()=>this.clicker()}> Нажми меня</button>
                <br/>
                {this.props.children}

            </div>;

        return res;
    }
}