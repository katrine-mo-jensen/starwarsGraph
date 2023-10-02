import { Outlet } from "react-router-dom"

export const Layout = () => {
return (
    <div>
        <h1>Star wars characters</h1>
        <Outlet/>
    </div>
)
}