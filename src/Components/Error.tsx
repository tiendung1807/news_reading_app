import { useRouteError } from "react-router-dom";

export default function Error() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Lỗi</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}