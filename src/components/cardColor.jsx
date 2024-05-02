export  default function CardColor({title,amount , orderCount})
{
   
    
    return(
        <div className=" shadow rounded-md bg-[#146EB4] hover:bg-[#0E4F82] text-white row-span-2">
            <div className="flex m-6 mb-0 text-white">

              <div className=" font-normal  ">
                {title}
              </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"       stroke="currentcolor" className="w-6 h-6  p-1 mt-0.5 ml-2">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
            </div>

            <div className="grid grid-cols-2 mx-6 mt-1 ">

                <div className="font-semibold text-3xl">
                    {amount}
                </div>

                    {
                       (orderCount >= 1 ) ? (
                         
                        <div className="flex justify-end text-white">
                            <div className="underline">
                                {orderCount} Orders 
                            </div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className=" mt-0.5 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
                        </div>
                       ) : <div></div>
                    }

                 </div>


                 <div className = " px-6 py-2 bg-[#0E4F82] text-white flex justify-between  mt-4  rounded-md">
                    <div>
                    Next Payment Date:
                    </div>  
                    <div>   
                    Today, 4:00PM
                    </div>

                 </div>

        </div>
    )

} 