

import {  useEffect, useMemo, useState  }  from   "react" 
import Header from "./components/header"
import Overview from "./components/overview";
import Card from "./components/card";
import CardColor from "./components/cardColor";
import TransactionTitle from "./components/TransactionTitle";
import Refund from "./components/Refund";
import Payouts from "./components/Payouts";
import Search from "./components/Search";
import DataHeader from "./components/DataHeader";
import Data from "./components/Data";



function App ( )
{
     return ( //initially inline
      <div>
       <Header></Header>
       <Overview></Overview>

       <div className="grid grid-cols-3 gap-x-6 m-7">
        <CardColor title={"Next Payout"}      amount={"₹2,312.23"}      orderCount={23}></CardColor>
        <Card      title={"Amount Pending"}   amount={"₹92,312.20"}     orderCount={13}></Card>
        <Card      title={"Amount Pending"}   amount={"₹23,92,312.19"}  orderCount={0} ></Card>
       </div>

       <TransactionTitle></TransactionTitle>

      <div className="flex ml-7 mt-7 gap-3">
      <Payouts title={"Payouts (22)"}></Payouts>
      <Refund title={"Refunds (6)"}></Refund>
      </div>

      <Search></Search>

       <DataHeader></DataHeader>
       <Data orderId={"#281209"} Status={"Successful"} TransactionId={"TRX123456"}  RefundDate={"Today, 8:45 PM"}  OrderAmount={"₹1125.00"}></Data>

       <Data orderId={"#281210"} Status={"Processing"} TransactionId={"TRX789012"}  RefundDate={"Tomorrow, 10:00 AM"}  OrderAmount={"₹950.50"}></Data>

       <Data orderId={"#281211"} Status={"Successful"} TransactionId={"	TRX345678"}  RefundDate={"Yesterday, 3:30 PM"}  OrderAmount={"₹750.50"}></Data>

       <Data orderId={"#2812012"} Status={"Successful"} TransactionId={"TRX901234"}  RefundDate={"Today, 11:20 AM"}  OrderAmount={"₹2000.00"}></Data>

       <Data orderId={"#281213"} Status={"Processing"} TransactionId={"TRX567890"}  RefundDate={"Today, 8:45 PM"}  OrderAmount={"₹1800.00"}></Data>

       <Data orderId={"#281214"} Status={"Processing"} TransactionId={"TRX789012"}  RefundDate={"Tomorrow, 10:00 AM"}  OrderAmount={"₹500.00"}></Data>

       <Data orderId={"#281215"} Status={"Successful"} TransactionId={"	TRX345678"}  RefundDate={"Yesterday, 3:30 PM"}  OrderAmount={"₹1200.00"}></Data>

       <Data orderId={"#2812016"} Status={"Processing"} TransactionId={"TRX901234"}  RefundDate={"Today, 11:20 AM"}  OrderAmount={"₹3000.00"}></Data>

       <Data orderId={"#2812017"} Status={"Processing"} TransactionId={"TRX901234"}  RefundDate={"Today, 11:20 AM"}  OrderAmount={"₹1500.00"}></Data>

       <Data orderId={"#281218"} Status={"Successful"} TransactionId={"	TRX345678"}  RefundDate={"Yesterday, 3:30 PM"}  OrderAmount={"₹900.00"}></Data>

      </div>
     )
 }
 

 export default App ;

 