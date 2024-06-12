import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm(){
    return(
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações"/>
            <button>
                <MagnifyingGlass size={22}/>
                <span>Buscar</span>
            </button>
        </SearchFormContainer>
    )
}