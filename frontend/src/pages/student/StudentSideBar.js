import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { PiStudentBold } from "react-icons/pi";
import { SiChatbot } from "react-icons/si";


const StudentSideBar = () => {
    const location = useLocation();
    return (
        <>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon color={location.pathname === ("/" || "/Student/dashboard") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/subjects">
                    <ListItemIcon>
                        <AssignmentIcon color={location.pathname.startsWith("/Student/subjects") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/attendance">
                    <ListItemIcon>
                        <PiStudentBold color={location.pathname.startsWith("/Student/attendance") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Attendance" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/complain">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Student/complain") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Complain" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Student/feespay">
                    <ListItemIcon>
                        <HiOutlineCurrencyRupee color={location.pathname.startsWith("/Student/feespay") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Feespay" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Student/fees/history">
                    <ListItemIcon>
                        <HiDocumentCurrencyRupee color={location.pathname.startsWith("/Student/fees/history") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Payments History" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Chatbot">
                    <ListItemIcon>
                        <SiChatbot color={location.pathname.startsWith("/Chatbot") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Chatbot" />
                </ListItemButton>

            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>
                <ListItemButton component={Link} to="/Student/profile">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Student/profile") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton component={Link} to="/logout">
                    <ListItemIcon>
                        <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>




            </React.Fragment>
            {/* PaymentDetails */}
        </>
    )
}

export default StudentSideBar