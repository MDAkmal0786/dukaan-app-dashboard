

export default function Header ( )
{
   return (

    <div className="grid grid-cols-3 p-1 ml-3 mr-3 mt-1 border-b">
        
        <div className="flex mt-2 ml-3">

        <div className="font-medium text-xl">
            Payouts
        </div>

        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-thin p-1 mt-1 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
       </div>
        
      <div className="font-normal  text-xs mt-2 text-[#4D4D4D]"> 
        How it works
      </div>

        </div>


    <div>
   
    
<div className='max-w-md mx-auto  '>
    <div className="relative flex items-center w-full h-10 rounded-lg bg-zinc-100  overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-zinc-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="gray">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input  
        className="peer h-full w-full outline-none text-md text-zinc-500 bg-zinc-100 "
        type="text"
        id="search"
        placeholder="Search features, tutorials, etc." /> 
    </div>
</div>
    </div>
       
        
 <div className="flex justify-end mr-2  ">
    <div className="bg-gray-200 m-1 rounded-full p-3" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="gray-200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
    </div>
    <div className="bg-gray-200 m-1 rounded-full p-4 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray-200" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>

</svg>

    </div>
 </div>



        </div>
   )
}