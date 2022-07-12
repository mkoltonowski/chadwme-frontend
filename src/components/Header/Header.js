import {useContext } from 'react';
import MenuContext from '../../context/MenuContext';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = prop =>{
    const MenuCTX= useContext(MenuContext);
    const expandVerticalMenu = () =>{
        const isExpanded = MenuCTX.isExpanded;
        MenuCTX.toggleMenu(!isExpanded);
    }

    return(
        <div className="header_container">
            <div className='menu-button-body' onClick={expandVerticalMenu}>
                <div className='menu-button-icon'>
                    <div></div>
                </div>
            </div>
            {prop.locations.map( location=>{
                return (
                    <Link key={'lokacja' + location.path} to={location.path} style={{ textDecoration: 'none' }}>
                        <div  className='menu-button-body'>
                            <div className='menu-button-locations'>
                                {location.linkName}
                            </div>    
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Header;