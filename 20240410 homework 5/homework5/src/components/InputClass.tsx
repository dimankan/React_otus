import { ChangeEvent, Component, ReactElement } from "react";

interface Props {
    onValueChange: ((value: string) => void);
}

export class InputClass extends Component<Props> {

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.onValueChange(event.target.value)
    }

    render() {
        const res: ReactElement = 
        <div>
            <label>
                Text input: <input name="myInput" onChange={this.handleChange}/>
            </label>
        </div>;

        return res;
    }
}