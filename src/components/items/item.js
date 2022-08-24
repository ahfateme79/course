import { useEffect, useState } from "react";
import { Itemparent,Itemcontent,Itemimg,Info,Coursetitle,Teacher,Detals,DetalsItem,DetalsItemTitle,DetalsItemNum,Bottom,RateBox,RateNum,Price,PriceCount,PriceOff } from "./itemstyle";



const Items=()=>{

    const[Items,setItems]=useState([])


    const myHeaders = new Headers();
myHeaders.append("sessionKey", "bd04db31-aa8b-4ae4-973a-bcf21dd51143");
myHeaders.append("languageKey", "en");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "categoryKey": "326b37ae-a491-4755-a10e-dafed26706e3"
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

    useEffect(() =>{
        fetch("https://techwich.co/api/course/all_by_category", requestOptions)
            .then(response => response.json())
            .then(result => {
                setItems(result)
            })
            .catch(error => console.log('error', error));
    });
    return(
        <Itemparent>
            {
                Items.map(n=>{
                    return(
                        <Itemcontent>
                            <Itemimg src={`https://techwich.co${n.icon}`}/>
                            <Info>
                                <Coursetitle>{n.title}</Coursetitle>
                                <Teacher>{`By  ${n.instructor.firstName} ${n.instructor.lastName}`}</Teacher>
                                <Detals>
                                    <DetalsItem>
                                        <DetalsItemNum>{n.commentCount}</DetalsItemNum>
                                        <DetalsItemTitle>comment</DetalsItemTitle>
                                    </DetalsItem>
                                    <DetalsItem>
                                        <DetalsItemNum>{n.episodeCount}</DetalsItemNum>
                                        <DetalsItemTitle>episode</DetalsItemTitle>
                                    </DetalsItem>
                                    <DetalsItem>
                                        <DetalsItemNum>{n.hour}</DetalsItemNum>
                                        <DetalsItemTitle>hour</DetalsItemTitle>
                                    </DetalsItem>
                                </Detals>

                                <Bottom>
                                    <RateBox>
                                        <i className="fa fa-star" style={{color:'#7983ff'}}/>
                                        <RateNum>{n.rate}</RateNum>
                                    </RateBox>
                                    <Price>
                                        <PriceOff>{`$${n.offPrice}`}</PriceOff>
                                        <PriceCount>{`$${n.price}`}</PriceCount>
                                    </Price>
                                </Bottom>
                            </Info>
                        </Itemcontent>
                    )
                })
            }
        </Itemparent>
    )
}

export default Items