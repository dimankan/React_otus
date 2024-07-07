//#region 1. Импорт и базовые настройки
import { Component, createContext } from "react";
import './ContextDemo.css';
//#endregion

//#region 2. Определение Enum и объекта тем
enum Themes {
    RedBlue,
    YellowGreen,
    BlackWhite
}

const ThemeObj = {
    [Themes.RedBlue]: 'red-blue',
    [Themes.YellowGreen]: 'green-yellow',
    [Themes.BlackWhite]: 'black-white',
}
//#endregion

//#region 3. Создание контекста
const fancyOtus = createContext({ theme: Themes.RedBlue, text: '' });
//#endregion

//#region 4. Компонент ColorButton
interface ColorButtonProps {
    onClick: (theme: Themes, text: string) => void;
    text: string;
    theme: Themes;
}

class ColorButton extends Component<ColorButtonProps> {
    style = {
        fontSize: '20px',
        margin: '5px',
        padding: '5px'
    };

    render() {
        return <button
            style={this.style}
            className={ThemeObj[this.props.theme]}
            onClick={() => this.props.onClick(this.props.theme, this.props.text)}>
            {this.props.text}
        </button>;
    }
}
//#endregion

// interface Props {
//     onClick: ((a: string) => void);
// }

//#region 5. Компонент Ramka
// function Ramka(p: Props) {
function Ramka() {
    const style = {
        border: '1px solid black',
        margin: '20px',
        padding: '20px',
    }


    return <div style={style}>
        <Colored />
        {/* <Colored onClick={(a) => p.onClick(a)} /> */}

    </div>
}
//#endregion


//#region 6. Компонент Colored
// class Colored extends Component<Props> {
class Colored extends Component{

    // foo = () => {
    //     this.props.onClick(`ABRAKADABRA ${new Date()}`);
    // }
    render() {
        return <fancyOtus.Consumer>
            {
                context => {
                    console.log('this is context', context);
                    return <div className={ThemeObj[context.theme]}>
                        Выбран текст {context.text}
                        {/* <button onClick={() => this.foo()}>ЖМИ</button> */}
                    </div>

                }
            }
        </fancyOtus.Consumer>
    }
}
//#endregion

interface ProviderDemoState {
    theme: Themes;
    text: string;
    externalText?: string;
}

export class ContextDemo extends Component<{}, ProviderDemoState> {

    constructor(props: {}) {
        super(props);
        this.state = { text: 'Ничего не выбрано', theme: Themes.BlackWhite }
    }

    setTheme = (theme: Themes, text: string) => {
        this.setState({ theme, text });
    }

    getButton = (text: string, theme: Themes) => {
        return <ColorButton text={text} theme={theme} onClick={this.setTheme} />
    }

    // setText = (a: string) => {
    //     console.log(a);
    //     this.setState({ externalText: a });
    // }

    render() {
        const Provider = fancyOtus.Provider;

        return <>

            {/* <ColorButton text={"красно-синий"} theme={Themes.RedBlue} onClick={this.setTheme} /> */}
            {this.getButton("красно-синий", Themes.RedBlue)}
            {this.getButton("желто-зеленый", Themes.YellowGreen)}
            {this.getButton("черно-белый", Themes.BlackWhite)}
            <Provider value={this.state}>
                <Ramka />
                {/* <Ramka onClick={(a) => this.setText(a)} /> */}
                {/* !{this.state.externalText}! */}
            </Provider>
            <Colored />
            {/* <Colored onClick={() => { }} /> */}
        </>;
    }
}