import { Route, Link, Routes } from "react-router-dom";
import IndexPage from "./pages/index.jsx";
import UsersPage from "./pages/users.jsx";
import ErrorPage from "./pages/error.jsx";
import DocumentationPage from "./pages/document.jsx";
import UserAboutPage from "./pages/userAbout.jsx";
import ProductInPage from "./pages/productIn.jsx";

export default function App() {
    return (
        <>
            <nav className="flex font-bold text-2xl gap-4 text-gray-500 mb-6 mt-6 ">
                <Link className="hover:text-blue-500" to="/">Home</Link>
                <Link className="hover:text-blue-500" to="/users">Users</Link>
            </nav>

            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/users" element={<UsersPage />} >
                    <Route path="document" element={<DocumentationPage />}/>
                    <Route path="userAbout" element={<UserAboutPage/>} />
                </Route>
                <Route path="*" element={<ErrorPage/>} />
                <Route path="/productIn" element={< ProductInPage />}/>
            </Routes>
        </>
    );
}
