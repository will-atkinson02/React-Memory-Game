export default function LoginModal({ doLogin })
{
    async function handleLogin(e)
    {
        e.preventDefault()
        console.log("login attempt")

        const formData = new FormData(e.target)
        const username = formData.get("login-username")
        const password = formData.get("login-password")

        if (!username || !password) return

        try 
        {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, 
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()            
            
            if (!data.allowLogin) 
            {
                throw new Error("Failed to login")
            }
            else
            {
                doLogin()
            }
        }
        catch (error)
        {
            console.error(error)
        }
    }

    async function handleRegistration(e)
    {
        e.preventDefault()
        console.log("registration attempt")

        const formData = new FormData(e.target)
        const username = formData.get("signup-username")
        const password1 = formData.get("signup-password1")
        const password2 = formData.get("signup-password2")

        if (!username || !password1 || !password2)
        {
            console.log("Fields left empty")
            return
        }

        if (password1 !== password2)
        {
            console.log("passwords don't match")
            return
        }

        try 
        {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, 
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password: password1 })
            })

            const data = await res.json()            
            
            if (!data.allowLogin) 
            {
                throw new Error("Failed to Register")
            }
            else
            {
                doLogin()
            }
        }
        catch (error)
        {
            console.error(error)
        }
    }

    return (
        <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50 pointer-events-auto" />

            <div className="relative flex items-center justify-center h-full">
                <div className="w-80 h-80 bg-amber-700 flex justify-center items-center">
                    <form className="w-32 h-64 flex flex-col" onSubmit={handleLogin}>
                        <div className="text-xl">Login</div>
                        <label htmlFor="login-username">Username</label>
                        <input name="login-username" id="login-username" className="w-[92%]"></input>
                        <label htmlFor="login-password">Password</label>
                        <input name="login-password" id="login-password" type="password" className="w-[92%]"></input>
                        <button type="submit" className="mt-2 bg-black text-white p-1">Login</button>
                    </form>
                    <form className="w-32 h-64 flex flex-col" onSubmit={handleRegistration}>
                        <div className="text-xl">Sign Up</div>
                        <label htmlFor="signup-username">Username</label>
                        <input name="signup-username" id="signup-username" className="w-[92%]"></input>
                        <label htmlFor="signup-password1">Password</label>
                        <input name="signup-password1" id="signup-password1" type="password" className="w-[92%]"></input>
                        <label htmlFor="signup-password2">Repeat Password</label>
                        <input name="signup-password2" id="signup-password2" type="password" className="w-[92%]"></input>
                        <button type="submit" className="mt-2 bg-black text-white p-1">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}