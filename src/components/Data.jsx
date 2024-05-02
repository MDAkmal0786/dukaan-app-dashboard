export default function Data( {orderId , Status , TransactionId , RefundDate ,  OrderAmount} )
{
    return(
        <div className = "grid grid-cols-5 mx-12  p-2  text-[#4D4D4D] border-b">
            <div className="text-[#146EB4]">{orderId}</div>
            <div>{ ( Status == "Successful") ?  <div className="inline-block bg-green-500 w-[10px] h-[10px] rounded-full mr-1  "></div>  :  <div className="inline-block bg-[#999999] w-[10px] h-[10px] rounded-full mr-1  "></div>  } {Status}</div>   
            <div>{TransactionId}</div>
            <div>{RefundDate}</div>
            <div className="flex justify-end">{OrderAmount}</div>
        </div>
    )
}
