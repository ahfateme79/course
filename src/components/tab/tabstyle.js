import styled from "styled-components";

export const Section=styled.div`
    margin:15px auto ;
    width:85% ;
`
export const SectionList=styled.ul`
    width:100% ;
    margin:0 ;
    display:flex ;
    list-style-type:none;
    padding:0 ;
`

export const SectionItem=styled.li`
    color:#7983ff ;
    padding-bottom:7px ;
    font-size:18px ;
    &:last-child{
        margin-left:20px ;
    }
    &.active{
        font-weight:600;
        border-bottom:1px solid  #7983ff;
    }
`