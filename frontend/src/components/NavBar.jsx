export default function NavBar({ doLogout })
{
    return (
        <div className="absolute right-0">
            <div className="h-10 w-60 flex justify-around">
                    <div className="bg-amber-700 h-10 w-2"></div>
                    <div className="bg-amber-700 h-10 w-2"></div>
            </div>
            <div className="flex justify-evenly items-center w-60 h-16 bg-amber-400 rounded-l-lg">
                <div className="rounded-full bg-white w-10 h-10"></div>
                <div>Profile</div>
                <div onClick={doLogout}>Logout</div>
            </div>
        </div>
    )
}