import axios from "axios";
import { ChangeEvent, Component, ReactElement } from "react";

interface MyStateForClass {
    input: string;
    output: string;
    isSuccsesResponse: boolean;
}

export class ClassComponent extends Component<{}, MyStateForClass> {

    constructor() {
        super({});
        this.state = { input: 'Сюда нужно ввести адрес API', output: 'Тут будет результат', isSuccsesResponse: true }
    }

    handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ input: event.target.value });
    }

    handleButtonClick = async () => {
        try {
            const response = await axios.get(this.state.input);
            this.setState({ output: response.data.fact, isSuccsesResponse: true });
        }
        catch (error) {
            let errorMessage = 'Произошла ошибка при выполнении запроса';

            if (axios.isAxiosError(error)) {
                if (error.response) {
                    // Сервер ответил с ошибкой
                    errorMessage = `Ошибка сервера: ${error.response.status} - ${error.response.statusText}`;
                } else if (error.request) {
                    // Запрос был сделан, но ответ не был получен
                    errorMessage = 'Сервер не ответил на запрос';
                } else {
                    // Что-то случилось при настройке запроса
                    errorMessage = 'Ошибка в настройке запроса';
                }
            } else {
                errorMessage = 'Неизвестная ошибка';
            }
            this.setState({ output: errorMessage, isSuccsesResponse: false });
        }
    }

    //#region цвет текста
    styleOutputOk = { color: 'black' };
    styleOutputBad = { color: 'red' };

    getStyleOutput = () => this.state.isSuccsesResponse ? this.styleOutputOk : this.styleOutputBad;
    //#endregion

    render() {
        const comp =
            <div>
                <div>
                    <label>
                        Сюда url который вернет json: <input name="myInput" onChange={this.handleInput} />
                    </label>
                    <br />
                    <button onClick={this.handleButtonClick}>Отправить</button>
                </div>
                <div>
                    <p style={this.getStyleOutput()}>Ответ от API: {this.state.output}</p>
                </div>
            </div>;
        return comp;
    }
}