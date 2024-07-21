
import { useDispatch } from "react-redux";
import { User } from "../../../models/user";
import { Actions } from "../../../stateManagement/userReducer";
import { useNavigate } from "react-router";

interface Props {
    user: User;
}

const ApeItem = (props: Props) => {
    const { user } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const css = {
        borderRadius: "16px",
        border: "1px solid green",
        margin: "10px",
        padding: "10px"
    };

    const divimgCss = {
        "borderRadius": "10px",
    };

    const imgcss = {
        height: '100px',
        objectFit: 'cover',
        width: '100px'
    } as any;

    const select = () => {
        dispatch(Actions.setUser(user));
        // dispatch({ type: '[USER_STATE] USER_SET', payload: user });
       // navigate(`/ape/${user.username}`);
    };

    const span = {
        display: 'inline'
    };
    return <div style={css}>
        <div style={divimgCss}>
            <img style={imgcss} src={user.imgUrl} />
        </div>
        <div style={span}>{user.username}</div>
        <button onClick={select}>Выбрать</button>
    </div>;
}

export default ApeItem;