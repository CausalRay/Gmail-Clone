import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import './email_list.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from "./Section"
import InboxIcon from '@mui/icons-material/Inbox';


const Email = () => {
    return (
        <div className='email_list'>
            <div className="emailList__settings">
                <div className="emailList__settings--left">
                    <Checkbox />

                    <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                    <RedoIcon />
                    </IconButton>

                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>

                </div>

                <div className="emailList__settings--right">

                    <IconButton>
                    <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                    <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                    <SettingsIcon />
                    </IconButton>

                </div>

            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title='primary' color="red" selected/>
            </div>
        </div>
    );
}

export default Email;
