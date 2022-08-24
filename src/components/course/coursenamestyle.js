import styled from "styled-components";


export const CoursParent=styled.div`
    width:100%;
    text-align:center;
    display:none ;
    padding:0 5% ;
    margin-bottom:10px ;
    &.active{
        display:block !important;
    }
`
export const CoursList=styled.ul`
    list-style-type:none;
    width:100%;
    display:flex ;
    justify-content:space-evenly;
    align-items:center;
    padding:10px 5px;
    margin:0;
    background:#bcc1ff ;
    border-radius: 10px;
    overflow-x:scroll ;

`
export const CoursItem=styled.li`
    width:auto ;
    padding:10px ;
    border-radius:10px;
    color:#000 ;
    font-size:14px ;

    &.active{
        background:#7983ff ;
        color:#fff ;
        opacity:.7;
    }
`
