import {Outlet, Link} from "react-router-dom";

export default function Users() {
    return (
        <>
            <h1 className="text-2xl font-semibold ">Hello users</h1>
            <nav className="flex gap-4 text-lg mb-6 text-blue-500 mt-4">
                <Link className="border py-1.2 px-4 bg-blue-500 text-white rounded" to="document">Documentation</Link>
                <Link className="border py-1.2 px-4 bg-blue-500 text-white rounded" to="userAbout">User Product</Link>
            </nav>
            <Outlet/>
            <h2 className="text-xl text-gray-600 mt-4">User learning english , because english language global language</h2>
        </>
    )
}