import styled from "styled-components";

export const Parent=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

export const Tabbar=styled.div`
    width:100%;
    text-align:center;
`
export const TabbarHead=styled.h3`
    width:90% ;
    margin:10px auto ;
    text-align:left;
`

export const TabbarList=styled.ul`
    list-style-type:none;
    width:88%;
    display:flex ;
    justify-content:space-between;
    padding:0 ;
    align-items:center;
    margin:10px auto ;
`
export const TabbarItem=styled.li`
    width:auto ;
    padding:7px 10px ;
    border-radius:7px;
    color:gray ;
    font-size:14px ;

    &.active{
        background: #3d4280;
        color:#fff ;
    }
`
