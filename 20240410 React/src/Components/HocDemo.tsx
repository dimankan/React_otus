import { Component, PropsWithChildren, ReactNode } from "react";


interface HocDemoState {
    isLoading1: boolean;
    isLoading2: boolean;
}

export class HocDemo extends Component<{}, HocDemoState>{



    constructor(props: {}) {
        super(props);
        this.state = { isLoading1: true, isLoading2: true };
        setInterval(() => {
            this.setState({ isLoading1: false })
        }, 5000);
        setInterval(() => {
            this.setState({ isLoading2: false })
        }, 10000);
    }


    render(): ReactNode {

        const WithLoading1 = withLoading1(OneTexter);
        const WithLoading2 = withLoading2(TwoTexter, OneTexter);
        return <>
            <OneTexter text="Привет1" />
            <TwoTexter text="Привет2" />
            <WithLoading1 isLoading={this.state.isLoading1} text="Другой текст" />
            <WithLoading2 isLoading={this.state.isLoading2} text="Другой текст еще" />

            <WithLoadingChildren isLoading={this.state.isLoading1}>
                <OneTexter text="Привет122222" />
            </WithLoadingChildren>

        </>;
    }


}




interface TextProps {
    text: string;
}

class OneTexter extends Component<TextProps> {

    render(): ReactNode {

        const style = {
            background: 'lightblue',
            color: 'purple',
            border: '5px dotted red',
            padding: '10px'
        }
        return <div style={style}>
            {this.props.text}
        </div>
    }
}


class TwoTexter extends Component<TextProps> {

    render(): ReactNode {

        const style = {
            background: 'cyan',
            color: 'purple',
            border: '10px solid purple',
            padding: '10px'
        }
        return <div style={style}>
            {this.props.text}
        </div>
    }
}



interface LoadingProps {
    isLoading: boolean;
}

class LoadingScreen extends Component {
    render(): ReactNode {
        return <span style={{ fontSize: '20px' }}>Loading...</span>;
    }
}


// {a:2 ,b:2}

// <Fancy a={1} b={2}/>
//
const withLoading1 = <P extends object>(Com: React.ComponentType<P>) =>
    class WithLoading extends Component<P & LoadingProps>{
        render(): React.ReactNode {
            return this.props.isLoading ? <LoadingScreen /> : <Com {...this.props} />
        }
    }


export class WithLoadingChildren extends Component<PropsWithChildren & LoadingProps>{

    render() {

        const Children = this.props.children!;
        return this.props.isLoading ? <LoadingScreen /> : this.props.children;
    }

}

//на JS
// const withLoading2 = (Com) =>
// class WithLoading extends Component{
//     render() {
//         return this.props.isLoading ? <LoadingScreen /> : <Com {...this.props} />
//     }
// }

const withLoading2 = <P extends object>(Com: React.ComponentType<P>, Com1: React.ComponentType<P>, ) =>

    (props: P & LoadingProps) => {

        const style={
            border:'10px solid green',
            padding:'10px',
            margin:'10px',
        }
        return props.isLoading 
        ? <LoadingScreen /> 
        : <div style={style}>
            <Com {...props} />!!!!!<br/>!!!!!!!!!!!!!!!!!!!
            <Com1 {...props}/></div>
    };



// // на JS
// const withLoading2 = (Com) =>
// (props) => {
//     return props.isLoading ? <LoadingScreen /> : <Com {...props} />
// };


