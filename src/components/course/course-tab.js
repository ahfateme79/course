import { useState } from "react";
import { Tabbar , TabbarList,TabbarItem,TabbarHead } from "./course-tab style";
import CategoryTab from './course'
import { Data } from "./data";


const TabBar=()=>{
    const [ToggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
      };
      const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";

    return(
        <Tabbar>
                <TabbarHead>Learning</TabbarHead>
            <TabbarList>
                        {
                            Data.map((n,index)=>{
                                return(
                                        <TabbarItem key={index} className={`tabs ${getActiveClass(index, "active")}`}
                                        onClick={() => toggleTab(index)}>{n.title}</TabbarItem>
                                )
                            })
                        }
            </TabbarList>
            <CategoryTab arr={Data} class={ToggleState}/>
            
        </Tabbar>
    )
}

export default TabBar