import styled from "styled-components";


export const SearchBox = styled.div `
    width:250px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:1px solid #ccc;
    border-radius:10px;
    padding:10px;
`

export const Input = styled.input `
    width:90%;
    height:100%;
    border:none;
    background:transparent ;
    &::placeholder{
        color:gray ;
    }
`