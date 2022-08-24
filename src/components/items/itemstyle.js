import styled from "styled-components";



export const Itemparent=styled.div`
    width:100% ;
    display:flex ;
    flex-direction:column;
    height:600px ;
    overflow-y:scroll;
    align-items:center;
    overflow-x:hidden ;
`

export const Itemcontent=styled.div`
    width:84%;
    display:flex ;
    background:#fff ;
    box-shadow:1px 1px 5px f7f8ff;
    padding:10px ;
    margin:7px 0 ;
    border-radius:10px ;
`

export const Itemimg=styled.img`
   width:20% ;
   height:100%;
   object-fit:contain;
`
export const Info=styled.div`
    width:80%;
   margin-left:15px;
`

export const Coursetitle=styled.h3`
   color:#000 ;
   font-weight:500 ;
   margin:0 ;
   margin-bottom:7px ;
`
export const Teacher=styled.p`
   color:#000 ;
   font-size:14px ;
   margin-top: 8px;
   margin-bottom:20px ;
`


export const Detals=styled.div`
  width: 100%;
  display:flex ;
  justify-content:space-between;
    align-items:center;

`

export const DetalsItem=styled.div`
  display:flex ;
  align-items:center;
`

export const DetalsItemTitle=styled.p`
   color:#000 ;
   font-size:14px ;
   margin-left: 7px;
`
export const DetalsItemNum=styled.span`
   color:#fff ;
   font-size:11px ;
   background:#dee0ff ;
  color:#515690;
   display:inline-flex ;
   align-items:center;
   justify-content:center;
   border-radius:2px;
   width:20px ;
   height:20px ;
`


export const Bottom=styled.div`
  display:flex ;
  align-items:center;
  justify-content:space-between;
  margin-top:10px;

`
export const RateBox=styled.div`
  display:flex ;
  align-items:center;
  border:1px solid #7983ff ;
  border-radius:5px ;
  padding:3px 5px;
  justify-content:center;
`
export const RateNum=styled.span`
  display:inline-block ;
    color: #7983ff;
    margin-left:7px ;
    font-size:13px ;
`


export const Price=styled.div`
  display:flex ;
    align-items:center;

`
export const PriceCount=styled.h4`
     color:#000 ;
     margin:0 ;

`
export const PriceOff=styled.del`
     color:gray ;
     margin-right:10px;
`
