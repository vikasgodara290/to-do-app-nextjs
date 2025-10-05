

export default function Home(){


    return (
        <div className="">
            <div className="font-bold text-2xl">
                Sign Up
            </div>
            <div className="">
                <input type="text"  className="border-2 border-black my-1" placeholder="Enter Username"/>
            </div>
            <div className="">
                <input type="email"  className="border-2 border-black my-1" placeholder="Enter Email"/>
            </div>
            <div className="">
                <input type="password" className="border-2 border-black my-1" placeholder="Enter Password"/>
            </div>
            <div className="">
                <button className="border-2 border-black rounded-[4px] px-2 my-2 cursor-pointer">Sign Up</button>
            </div>
            <div className="">
                Already have a account? <a href="" className="text-blue-500">Click here to login</a>
            </div>
        </div>
    )
}