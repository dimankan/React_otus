import { Component, PureComponent, ReactNode } from "react";
interface MyState{
    firstText: string;
    secondText: string;
}


export class LifeCycleTest extends Component<{}, MyState> {

constructor() {
    super({});
    this.state = {
        firstText: "1",
        secondText: "2"
    }
}

    render(): ReactNode {
        const result =

            <div>
                <p>
                    Привет
                </p>
                <label>First: </label> <input type="text" onChange={(e)=>{this.setState({firstText: e.target.value})}}></input>
                <br/>
                <label>Second: </label> <input type="text"></input>
                <br/>
                <ShowTextComponent text="Ну я"></ShowTextComponent>
            </div>

        return result;
    }
}

interface Props {
    text: string
}
export class ShowTextComponent extends Component<Props> {

    render(): ReactNode {
        const result =

            <div>
                <p>
                    Тут текст дочернего

                </p>

                {this.props.text}

            </div>

        return result;
    }
}

