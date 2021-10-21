import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './CustomSidebar.scss';
import { BiMenu, BiUser, BiLibrary, BiBookBookmark, BiHome } from 'react-icons/bi';
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";


function CustomSidebar() {
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <ProSidebar collapsed={ showSidebar }>
            <Menu iconShape="square">
                <MenuItem icon={ <BiMenu/> } onClick={ toggleSidebar }>Brendan's Website</MenuItem>
                <MenuItem icon={ <BiHome/> }><Link to="/">Home</Link></MenuItem>
                <SubMenu icon={ <BiUser/> } title="About" >
                    <MenuItem><Link to="/about/school">School</Link></MenuItem>
                    <MenuItem><Link to="/about/work">Work</Link></MenuItem>
                    <MenuItem><Link to="/about/resume">Resume</Link></MenuItem>
                </SubMenu>
                <SubMenu icon={ <BiBookBookmark/> } title="Projects">
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
                <SubMenu icon={ <BiLibrary/> } title="Classes">
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
}

export default CustomSidebar;