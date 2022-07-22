
import {  useParams } from "react-router-dom";

export function routeParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}
