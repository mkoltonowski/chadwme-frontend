import './VMenu.css'
import { Fragment } from 'react';
import React, {useContext} from 'react';
import MenuContext from '../../context/MenuContext';

function VMenu(prop) {
    
    // const [toggleStatus, setToggleStatus] = useState(prop.toggleStatus);

    // const handleExpandMenu = () =>{  
    //     setToggleStatus((prevState)=>{return !prevState;});
    // }

    // const checkToggleStatusMenu = (status) =>{
    //     switch(status){
    //         case false: return "vmenu_container-normal";           
    //         case true: return "vmenu_container-expanded"; 
    //         default: break;           
    //     }        
    // }
    // const checkToggleStatusIcon = (status) =>{
    //     switch(status){
    //         case false: return "menu-icon-normal";             
    //         case true: return "menu-icon-expanded"; 
    //         default: break;           
    //     }        
    // }
    const MenuCTX = useContext(MenuContext);
    const isExpanded = MenuCTX.isExpanded;
    const checkToggleStatusMenu = toggle =>{
        if (toggle === false) return 'vmenu_container-normal';
        else return 'vmenu_container-expanded';
    }

    return(
        <Fragment>
            <div className={`vmenu_container ${checkToggleStatusMenu(isExpanded)}`}/>
        </Fragment>

    );
}

export default VMenu;