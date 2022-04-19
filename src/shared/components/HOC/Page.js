import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import Loader from '../Loader';
import { useSelector } from "react-redux";

export default function Page(Component) {
    function PageWithRouterProp(props) {
        const { loading } = useSelector(state => state);
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <>
                {loading && <Loader />}
                <Component
                    {...props}
                    {...params}
                    location={location}
                    navigate={navigate}
                />
            </>
        );
    }

    return PageWithRouterProp;
}