
import { connect } from "react-redux";
import { useParams } from "react-router";
import { User } from "../../../models/user";
import { ReactNode } from "react";

interface Props {
    selectedApe?: User;
    listOfColor?: any;
}

export const Ape = (props: Props) => {
    const { selectedApe, listOfColor } = props;


    const qp = useParams();

    const css = {
        borderRadius: "16px",
        border: "1px solid green",
        margin: "10px",
    };

    const divimgCss = {

        "borderRadius": "10px",
    };

    const imgcss = {
        height: '200px',
        objectFit: 'cover',
        width: '200px'
    } as any;


    const span = {
        display: 'inline'
    };
    return <div style={css}>
        <label>вы выбрали {qp.username}</label>
        <div style={divimgCss}>
            <img style={imgcss} src={selectedApe?.imgUrl} />
        </div>
        <div style={span}>{selectedApe?.username}</div>
        {JSON.stringify(listOfColor.map((y: { name: string }) => y.name))}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

    </div>;
}
// Функция возвращает объект с нужными нам данными
// Из редакс
// При этом поля в объекте
// Должны называться также
// как и пропсы,
// с которым мы его соединяем
const mapReduxStateToProps = (globalReduxStorage: any): Props => {

    return {
        selectedApe: globalReduxStorage.user.user,
        listOfColor: globalReduxStorage.order.list
    };
}


// При помощи connect
// Мы соединяем данные redux из mapStateToProps
// С пропсами компонента Thunk
export default connect(mapReduxStateToProps)(Ape);