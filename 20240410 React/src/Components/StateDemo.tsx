import { Component, ReactNode } from "react";
import './StateDemo.css';

interface StateDemoState {
    counter: number;
    auto1: number;
}

export class StateDemo extends Component<{}, StateDemoState> {

    constructor(props: {}) {
        super(props);
        this.state = { counter: 0, auto1: 2 };
    }

    click = () => {

        this.setState({ counter: this.state.counter + 1 });
        // this.setState((x) => {
        //     return {
        //         counter: x.counter + 2,
        //     }
        // });
        console.log(this.state.counter);
    }

    render(): ReactNode {

        const date = new Date() + '';
        console.log(this.state);
        return <div className="state-demo">

            Сегодня {date}
            <br />
            <button onClick={this.click}>
                {this.state.counter === 0 ?
                    'Нажми меня' :
                    `Кнопка нажата ${this.state.counter} раз`}
            </button>
        </div>;
    }
}


