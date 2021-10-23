import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent} from 'react-pro-sidebar';
import './CustomSidebar.scss';
import { BiMenu, BiUser, BiLibrary, BiBookBookmark, BiHome } from 'react-icons/bi';
import {useState} from "react";
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";
import {Anchor} from "react-bootstrap";
import {GrMail} from "react-icons/gr";


function CustomSidebar() {
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <ProSidebar collapsed={ showSidebar }>
            <SidebarHeader>
                <Menu iconShape="square" className="main-sidebar-section">
                    <MenuItem icon={ <BiMenu/> } onClick={ toggleSidebar }>Brendan's Website</MenuItem>
                </Menu>

            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square" className="main-sidebar-section">
                    <MenuItem icon={ <BiHome/> }><Link to="/">Home</Link></MenuItem>
                    <SubMenu icon={ <BiUser/> } title="About" >
                        <MenuItem><Link to="/about/work">Work</Link></MenuItem>
                        <MenuItem><Link to="/about/school">School</Link></MenuItem>
                        <MenuItem><Link to="/about/resume">Resume</Link></MenuItem>
                    </SubMenu>
                    <MenuItem icon={ <BiBookBookmark/> }><Link to="/projects">Projects</Link></MenuItem>
                    <MenuItem icon={ <BiLibrary/> }><Link to="/courses">Courses</Link></MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu iconShape="square">
                    <MenuItem icon={ <FaGithub/> }>
                        <Anchor target="_blank" href="https://github.com/brendansaw">GitHub</Anchor>
                    </MenuItem>
                    <MenuItem icon={ <FaLinkedin/> }>
                        <Anchor target="_blank" href="https://www.linkedin.com/in/brendan-saw/">LinkedIn</Anchor>
                    </MenuItem>
                    <MenuItem icon={ <FaYoutube/> }>
                        <Anchor target="_blank" href="https://www.youtube.com/channel/UCDEfH4JPTC2ExEtDE_1ii_w">Youtube</Anchor>
                    </MenuItem>
                    <MenuItem icon={ <GrMail/> }>
                        <Anchor target="_blank" href="mailto:brendansaw@gmail.com">Email</Anchor>
                    </MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    );
}

export default CustomSidebar;