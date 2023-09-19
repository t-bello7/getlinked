// import { useRouterError } from 'react-router-dom';

const ErrorPage = () => {
    // const error = useRouterError();
    // console.error(error);

    return (
        <div>
            <h1> Oops, Welcome to the Error Page </h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* <i>{error.statusText || error.message}</i> */}
            </p>
        </div>
    )
}

export default ErrorPage;