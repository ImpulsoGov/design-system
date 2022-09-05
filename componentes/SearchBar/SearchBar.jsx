import React, {useState,useEffect} from "react";
import style from "./SearchBar.module.css"
import cx from "classnames";

const SearchBar = (props)=>{
    const [searchInput, setSearchInput] = useState(props.municipio);
    const [inputStyle, setInputStyle] = useState([style["SearchBarInput"+props.theme]]);
    //console.log(props.municipio,searchInput)
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    useEffect(() => {
        if (searchInput.length > 0) { 
            const findMunicipio = props.data.filter(item => (item.nome+" - "+item.uf).toLowerCase()==searchInput.toLowerCase())
            if (findMunicipio.length>0) {
                props.setMunicipio(searchInput)
                setInputStyle([style["SearchBarInput"+props.theme]])
            } else {
                setInputStyle([style["SearchBarInput"+props.theme],style.SearchBarInputWrong])
            }
        }
    },[searchInput])

    return(
        <>
            <input
                className={cx(...inputStyle)}
                type="text"
                placeholder="Alterar Município..."
                onInput={handleChange}
                value={searchInput}
                list="municipios"
            />
            <datalist id="municipios">
                {props.data.map((item,index)=> <option key={index} value={item.nome+" - "+item.uf}/>)}
            </datalist>
        </>
    )
}

export { SearchBar }