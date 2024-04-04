
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
             404 error
             <p>{error.statusText}</p>
        </div>
    );
};

export default ErrorPage;