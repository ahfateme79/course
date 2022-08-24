import { HeaderTop,FlexDiv,Icons } from "./headerstyle"
import Search from "../search/search"



const Header = () => {
    return (
        <HeaderTop>
            <FlexDiv>
                <Search />

                <div>
                <Icons>
                <i class="far fa-bell" style={{fontSize:"20px"}}></i>
                    <i class="far fa-envelope" style={{fontSize:"20px"}}></i>
                </Icons>
                </div>
            </FlexDiv>
        </HeaderTop>
    )
}

export default Header