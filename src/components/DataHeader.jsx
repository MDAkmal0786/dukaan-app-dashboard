
export default function DataHeader( )
{
    return(
        <div className = "grid grid-cols-5 mx-12 bg-[#f2f2f2] p-2 mt-2 text-[#4D4D4D] font-semibold">
            <div>Order ID</div>
            <div>Status</div>   
            <div>Transaction ID</div>
            <div>Refund Date</div>
            <div className="flex justify-end">Order Amount</div>
        </div>
    )
}