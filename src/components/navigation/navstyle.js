import styled from "styled-components";


export const Nav=styled.nav`
    position:fixed;
    width:100%;
    height:70px;
    text-align:center;
    bottom:0;
    left:0;
    right:0;
    background:#fff ;
    padding-top:30px ;
`

export const ListIcon=styled.ul`
    list-style-type:none,
    align-items:center;
    justify-content:space-evenly;
    padding: 0;
    margin:0;
    display:flex;
`
export const ListItem=styled.li`
  width:55px;
  height: 55px;
  border-radius:10px;
  background-color:transparent;
  display:inline-flex ;
  align-items:center;
  justify-content:center;
  &.active{
    background:#7983ff ;
    color: #fff;
  }
  &.active i{
    color:#fff ;
  }
`


export const ListItemLink=styled.a`
    display:inline-block ;
`


export const NavIcon=styled.i`
    color:#7983ff;
    font-size:22px ;
`