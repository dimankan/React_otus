import { Component, ReactElement } from "react";
import { ButtonFunction } from "./ButtonFunction";
import { InputClass } from "./InputClass";

interface ProviderState {
    input: string;
    output: string;
}

export class MainComponent extends Component<{}, ProviderState> {

    constructor(props: {}) {
        super(props);
        this.state = { input: 'Сюда нужно ввести адрес API', output: 'Тут будет результат' }
    }

    handleInputChange = (value: string) => {
        console.log(this.state.input);
        this.setState({ input: value });
    }

    handleOutputChange = (value: string) => {
        console.log(this.state.output);
        this.setState({ output: value });
    }

    render() {
        const comp =
            <div>
                <div>
                    <InputClass onValueChange={this.handleInputChange} />
                    <ButtonFunction url={this.state.input} onResponse={this.handleOutputChange} />
                </div>
                <div>
                    <p>Ответ от API: {this.state.output}</p>
                </div>
            </div>;
        return comp;
    }
}
