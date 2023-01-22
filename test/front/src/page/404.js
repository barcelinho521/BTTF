import { useRouteError } from "react-router-dom";

export default function Errorpage() {
    const error = useRouteError()
    return (
        <div>
            <div>
                <i>
                    <span>404 error</span>
                
                    {error.statusText || error.message}
                </i>
            </div>
        </div>
    )
}