import { Outlet } from "react-router-dom";

export default function Roots(){
    return(
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}