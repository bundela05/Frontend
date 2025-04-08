import { HomeIcon } from "@heroicons/react/16/solid"
import Button from "./Button"
export default function Navbar() {
    return (
    <nav className="flex justify-between bg-auto bg-black">
            <div className="flex ml-9">
                <Button text={"Home"} />
                {/* <Button text={"Pricing"}/> */}
            </div>
            <div className="mr-7">
                <button className="m-3 focus:outline-none text-gray-700 bg-slate-700 hover:border hover:border-slate-300 hover:bg-zinc-700 hover:text-slate-300 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-300  dark:focus:ring-gray-200">Sign Up</button>
                <button className="m-2 text-slate-300 hover:text-gray-700 border border-gray-700 hover:bg-slate-300 focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-slate-300 dark:text-gray dark:hover:text-gray-700 dark:hover:bg-slate-300 dark:focus:ring-slate-300">Sign In</button>
            </div>
    </nav>
    )
}