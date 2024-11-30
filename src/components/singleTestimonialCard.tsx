import {  StarIcon } from "@heroicons/react/24/solid";

function Testimonial(props) {
    return (
        <>
            <div className="bg-main max-w-80 p-8 rounded-3xl flex flex-col gap-8">
                <div className="border-b border-white pb-8">
                    <img src= {props.img} alt="" width="80%" className='rounded-full aspect-square object-cover object-top mx-auto'/>
                </div>

                <div className='text-white'>
                    <p className="text-sm">
                        {props.text}
                    </p>

                    <div className="justify-end flex mt-6">
                        <StarIcon className="w-4 text-yellow-400" />
                        <StarIcon className="w-4 text-yellow-400" />
                        <StarIcon className="w-4 text-yellow-400" />
                        <StarIcon className="w-4 text-yellow-400" />
                        <StarIcon className="w-4 text-yellow-400" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;