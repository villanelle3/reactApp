
function Employ(props){
    return(
        <>
            <div className="container card">
                <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Woman's Face" />
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            {props.name}
                        </p>
                        <p className="text-slate-500 font-medium">
                            {props.role ? props.role : "No role"}
                        </p>
                        </div>
                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employ