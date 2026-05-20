export default function LoginModal()
{
    return (
        <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50 pointer-events-auto" />

            <div className="relative flex items-center justify-center h-full">
                <div className="w-80 h-80 bg-amber-700 flex justify-center items-center">
                    <div className="w-32 h-64 flex-col">
                        <div className="text-xl">Login</div>
                        <label>Username</label>
                        <input className="w-[92%]"></input>
                        <label>Password</label>
                        <input className="w-[92%]"></input>
                    </div>
                    <div className="w-32 h-64 flex-col">
                        <div className="text-xl">Sign Up</div>
                        <label>Username</label>
                        <input className="w-[92%]"></input>
                        <label>Password</label>
                        <input className="w-[92%]"></input>
                        <label>Repeat Password</label>
                        <input className="w-[92%]"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}