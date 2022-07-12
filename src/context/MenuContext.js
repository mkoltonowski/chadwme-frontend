import React, {useState} from "react";

const MenuContext = React.createContext({
    isExpanded: false,
    toggleMenu: ()=>{},
})

export const MenuContextProvider = props =>{
    const [isExpandedState, setIsExpanded] = useState(false);

    const toggleMenuHandler = () =>{
        setIsExpanded(prevState=> !prevState)
    }

    const contextValue = {
        isExpanded: isExpandedState,
        toggleMenu: toggleMenuHandler
    }

    return <MenuContext.Provider value = {contextValue}>{props.children}</MenuContext.Provider>
}

export default MenuContext;