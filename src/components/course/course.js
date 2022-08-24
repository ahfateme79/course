import { useState } from "react";
import CoursesName from "./coursename";
import { Category,CategoryList,CategoryItem } from "./coursestyle";
// import { Data } from "./data";



const CategoryTab=(props)=>{
    const [ToggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
      };
      const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";
    return(
        <>
            {
                props.arr.map((n,index)=>{
                    return(
                        <Category className={props.class===index?'active':''} key={index} >
                            <CategoryList>
                                        {
                                            n.category.map((n,index)=>{
                                                return <CategoryItem key={index} className={`tabs ${getActiveClass(index, "active")}`}
                                                onClick={() => toggleTab(index)}>{n.name}</CategoryItem>
                                            })
                                        }
                            </CategoryList>

                                <CoursesName data={n.category} id={ToggleState}/>



                        </Category>

                    )
                })
            }
        </>
    )
}

export default CategoryTab