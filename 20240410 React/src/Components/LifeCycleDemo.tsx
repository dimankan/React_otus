import { Component, PureComponent, ReactNode } from "react";

interface Math {
    a: number;
    b: number;
}

type SummerProps = Math;

interface SummerState {
    data: Math;
}



export class Summer extends PureComponent<SummerProps, SummerState>{


    componentDidMount(): void {
        console.log("SUMMER СМОГ ЗАРЕНДЕРИТЬСЯ");
    }

    componentWillUnmount(): void {

        console.log('%c Ариведерчи', 'color:white; background-color: red');
    }


    // Аналог PureComponent
    //    shouldComponentUpdate(
    //     nextProps: Readonly<Math>,
    //      nextState: Readonly<SummerState>,
    //       nextContext: any): boolean {

    //     console.log('write', nextProps.a + nextProps.b, this.props.a + this.props.b);
    //        return nextProps.a != this.props.a || nextProps.b !== this.props.b;
    // }

    // shouldComponentUpdate(
    //     nextProps: Readonly<Math>,
    //      nextState: Readonly<SummerState>,
    //       nextContext: any): boolean {

    //     console.log('write', nextProps.a + nextProps.b, this.props.a + this.props.b);
    //     return nextProps.a + nextProps.b !== this.props.a + this.props.b;
    // }

    componentDidUpdate(prevProps: Readonly<Math>, prevState: Readonly<SummerState>, snapshot?: any): void {
        console.log('prev',prevProps);
        console.log('current', this.props);
        console.log('SNapshot', snapshot);
        console.log('%c Апдейт', 'color:green; background-color: yellow;font-size:20px')
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Math>, prevState: Readonly<SummerState>) {
        return { "Предыдущий A": prevProps.a, "Предыдущий B": prevProps.b };
    }

    constructor(props: SummerProps) {
        console.log('Сработал конструктор');
        super(props);
        this.state = { data: { a: props.a, b: props.b } };
    }

    render(): ReactNode {
        const s = new Date().toString();
        console.log('РИСУЮ');
        const style = { border: '2px dotted red', padding: '10px' };
        return <div style={style}>
            <span>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}<br />{s}</span>
        </div>;
    }
}


interface LifecycleDemoState {
    checked: boolean;
    a: number;
    b: number;
    data: { a: number, b: number };

}

export default class LifecycleDemo extends Component<{}, LifecycleDemoState> {

    constructor(props: any) {
        super(props);
        this.state = {
            a: 1,
            b: 1,
            data: { a: 1, b: 1 },
            checked: true
        };
    }
    setA = (e: any) => {
        this.setState({ a: parseInt(e.target.value) });
    }

    setB = (e: any) => {
        this.setState({ b: parseInt(e.target.value) });
    }

    setAB = (e: any) => {
        this.setState({ data: { a: this.state.a, b: this.state.b } });
    }

    getSummer = () => {
        if (this.state.checked) {
            const { a, b } = this.state.data;
            return <Summer a={a} b={b} />;
        }

        return null;
    }

    render(): ReactNode {
        const { a, b } = this.state.data;
        const d = new Date() + '';
        return <>
            <label>A: </label><input type="text" onChange={this.setA} />
            <br />
            
            
            
            
            <label>B: </label><input type="text" onChange={this.setB} />
            <br />
            
            
            <button onClick={this.setAB}> Отправить</button>
            
            
            <br />


            <button onClick={() => this.setState({ checked: !this.state.checked })}>
                {this.state.checked ? 'Выключить' : 'Включить'}
            </button>

            {/* <br />{this.getSummer()} */}
            <Summer a={a} b={b} />
            <br />
            !{d}!
            {/* 
            <Timer /> */}
        </>;
    }
}

interface Props {

}

interface State { date: string }

class Timer extends Component<Props, State>{


    constructor(props: {}) {
        super(props);
        this.state = { date: new Date() + '' };
        setInterval(() => {
            this.setState({ date: new Date() + '' });
        }, 1000);
    }

    render(): ReactNode {
        return <span>Текущее время {this.state.date}</span>;
    }
}
