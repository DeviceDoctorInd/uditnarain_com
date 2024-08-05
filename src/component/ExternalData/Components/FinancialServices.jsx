import React from 'react'
import { FadingContent } from './Fading'

const FinancialServices = () => {

     const bankDetails = [
        {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/pnb.jpg",
            url:"https://www.pnbindia.in/Page-Not-Found.html"
        },       {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/andhra.jpg",
            url:"http://andhrabank.in/english/RetailLoans.aspx"
        },       {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/axis.jpg",
            url:"https://www.axisbank.com/page-not-found?"
        },       {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/bob.jpg",
            url:"https://www.bankofbaroda.in/pfs/edloanvc.asp"
        },       {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/canara.jpg",
            url:"https://canarabankcsis.in/olts/EduHome.aspx"
        },      {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/cb.jpg",
            url:"http://www.corpbank.com/asp/0100text.asp?presentID=110&headID=19"
        },      {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/cbi2.jpg",
            url:"https://www.centralbankofindia.co.in/site/Submit_loan.aspx"
        },      {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/dena2.jpg",
            url:"http://www.denabank.com/viewsection.jsp?id=0,4,26,68"
        },      {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/boi.jpg",
            url:"https://bankofindia.co.in/english/EduLoanForm1.aspx"
        },      {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/p%20&%20s1.jpg",
            url:""
        },     {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/alhd2.jpg",
            url:""
        },     {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/unbi.jpg",
            url:"https://www.unionbankofindia.co.in/error-page/404-error.html?aspxerrorpath=/personal_retail_education.aspx"
        },     {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/uco.jpg",
            url:"https://www.ucobank.com/loan.htm#EDUCATIONALLOAN"
        },     {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/sbbj.jpg",
            url:"https://www.sbbjbank.com/We-offer/Personal-Banking-Deposits.htm"
        },     {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/sbh-logo.png",
            url:"http://www.sbhyd.com/educational-loan/"
        },     {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/sbi.jpg",
            url:"https://www.sbi.co.in/user.htm?action=sbiEdulLoan"
        },   {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/sbm.jpg",
            url:"http://www.statebankofmysore.co.in/advances/personal-banking-/gnanamitra-educational-loan-.html"
        },   {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/sbt.jpg",
            url:"http://www.statebankoftravancore.com/domloan.htm#gjyothi"
        },   {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/syndi.jpg",
            url:"http://syndicatebank.in/scripts/SyndVidya.aspx"
        },   {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/ubi.jpg",
            url:"http://www.unitedbankofindia.com/english/EduLoanForm1.aspx"
        },   {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/vijaya.jpg",
            url:"https://domainsfs.s3.amazonaws.com/vijayabankcom.html"
        },  {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/hdfc2.jpg",
            url:"https://www.hdfcbank.com/personal/product/productdetails/student-loans-for-indian-education/gts8mipn"
        },  {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/hsbc.jpg",
            url:"https://www.hsbc.co.in/loans/products/personal/"
        },  {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/ib2.jpg",
            url:"http://apps.indianbank.in:5501/online_edu/"
        },  {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/icici.jpg",
            url:"https://www.icicibank.com/Personal-Banking/loans/education-loan/education-loan"
        },  {
            img :"https://wbs.narainagroup.ac.in/ngi/view/images/logo/obc.jpg",
            url:""
        },

     ]




    const content = `<style>
    h1 {
        color: #b1040e;
        margin-bottom: 20px;
        text-align: center;
    }
</style>
<h1>Student Financial Services</h1>

<p>Naraina Group's tradition of extending educational opportunities to academically qualified students and meeting their
    financial need is based on a deep commitment to the belief that a true liberal arts education exposes students to
    varying backgrounds and points of view outside, as well as inside, the classroom.</p>

<p>For this reason, and the more pragmatic one that many parents cannot afford the cost of education today, Naraina
    Group
    encourages the students to apply for admission without regard to their financial circumstances. The basic philosophy
    underlying the student financial aid program at Naraina Group is that families have the primary responsibility to
    finance their children's education to the extent that they are able. When a family cannot afford our costs, Naraina
    Group is committed to meeting a student's need with various types of aid for all those admitted, for all four years.
</p>`
  return (
    <div>
        <FadingContent content={content}/>
        <p style={{color:"#b1040e" , fontWeight:"500",  marginBottom:"30px"}}>Students can apply for education loan from our website to the following banks by clicking on the bank name:</p>
        <BankCard bankDetails={bankDetails}/>
    </div>
  )
}

export default FinancialServices


const BankCard = ({bankDetails})=>{
    return <div class="ag-format-container">
    <div class="ag-courses_box" >
    {
        bankDetails.map((x)=> <div class="ag-courses_item">
        <a href={x.url} target='_blank' class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
           <img  className='imgdata' style={{maxHeight:"100px", width:"100%"}} src={x.img} alt="" />
        </a>
      </div>)
    }
     
  
  
    </div>
  </div>
}