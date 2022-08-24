import { useState } from "react";
import { Section,SectionList,SectionItem } from "./tabstyle";




const TabItems=()=>{
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
      };
      const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";
    return(
        <Section>
            <SectionList>
                <SectionItem className={`tabs ${getActiveClass(1, "active")}`} onClick={() => toggleTab(1)}>All Courses</SectionItem>
                <SectionItem className={`tabs ${getActiveClass(2, "active")}`} onClick={() => toggleTab(2)}>My Courses</SectionItem>
            </SectionList>
        </Section>
    )
}


export default TabItems