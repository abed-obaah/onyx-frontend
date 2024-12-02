export default function WWD(props) {
    return ( 
        <>
            <div className="bg-black rounded-xl border-0 border-t-2 border-l-2 border-white p-20 flex justify-between flex-col gap-11">
                <div className="text-center">
                    <img src={props.icon} alt="icon" width="50%" className="mx-auto"/>
                </div>

                <div className="">
                    <div className="text-white">
                        <h1 className="font-bold text-3xl">{props.num}</h1>
                        
                        <div className="text-center mt-9">
                            <h1 className="font-bold text-3xl">
                                {props.heading}
                            </h1>

                            <p className="font-light text-md mt-6">
                                {props.txt}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}