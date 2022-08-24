import { useState } from "react";
import { CoursParent,CoursList,CoursItem } from "./coursenamestyle";



const CoursesName=(props)=>{
    const [ToggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
      };
      const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";
    return(
        <>
            {
                props.data.map((n,index)=>{
                    return(
                        <CoursParent className={props.id===index?'active':''} key={index} >
                            <CoursList>
                                        {
                                            n.course.map((n,index)=>{
                                                return <CoursItem key={index} className={`tabs ${getActiveClass(index, "active")}`}
                                                onClick={() => toggleTab(index)}>{n.topic}</CoursItem>
                                            })
                                        }
                            </CoursList>
                        </CoursParent>

                    )
                })
            }
        </>
    )
}
export default CoursesName