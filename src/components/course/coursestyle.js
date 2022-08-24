import styled from "styled-components";


export const Category=styled.div`
    width:100%;
    text-align:center;
    display:none ;
    position:relative;
    overflow-x:hidden ;
    &.active{
        display:block !important;
    }
`
export const CategoryList=styled.ul`
    list-style-type:none;
    width:90%;
    display:flex ;
    margin:0 auto ;
    justify-content:space-between;
    align-items:center;
    padding:0 ;
`
export const CategoryItem=styled.li`
    width:auto ;
    padding:10px ;
    border-radius:10px;
    color:gray ;
    background:#dee0ff;
    width:26% ;
    height:30px;
    &.active{
        background:#bcc1ff;
        color:#000 ;
        padding-bottom:30px ;
        transform:translateY(10px);
        border-radius:10px 10px 0 0;
    }
`
