import { Route } from "react-router";
import Ape from "./Ape";
import ApeList from "./ApeList";

export default function ApeRoutings(){
    return <>
    <Route index element={<ApeList />} />
    <Route path=":username" element={<Ape />} />
    <Route path=":username/edit" element={<Ape />} />
    </>
}


export const routes = [
    <Route index element={<ApeList />} />,
    <Route path=":username" element={<Ape />} />,
    <Route path=":username/edit" element={<Ape />} />
]