import { useState } from "react";
import { Nav ,ListIcon , ListItem , ListItemLink , NavIcon } from "./navstyle";

const arr=[
    {
        class:'fa-file-alt'
    },
    {
        class:'fa-bookmark'
    },
    {
        class:'fa-archive'
    },
    {
        class:'fa-comment'
    },
    {
        class:'fa-user'
    },
]

const Navigation=()=>{

    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
      };
      const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";
    return(
        <Nav>
            <ListIcon>
                        {
                            arr.map((n,index)=>{
                                return <ListItem key={index} className={`tabs ${getActiveClass(index, "active")}`}
                                onClick={() => toggleTab(index)}><ListItemLink href="#"><NavIcon className={`far ${n.class}`} /></ListItemLink></ListItem>
                            })
                        }
            </ListIcon>
        </Nav>
    )
}

export default Navigation