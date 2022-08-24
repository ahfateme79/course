import {SearchBox,Input} from './searchstyle'



const Search=()=>{
    return(
        <SearchBox>
            <i class="fas fa-search" style={{color:'gray'}}></i>
            <Input placeholder='search problem,answare,queation' />
        </SearchBox>
    )
}

export default Search