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
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';


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
            <Section Icon={InboxIcon} title='Primary' color="red" selected/>
            <Section Icon={PeopleIcon} title='Social' color="#1A73E8"/>
            <Section Icon={LocalOfferIcon} title='Promotions' color="green"/>
            </div>

            <div className="emailList__list">
                <EmailRow 
                title="Nanyang Technical University"
                subject="Acceptance of course"
                description="We are pleased to inform you that your appeal has been successful."
                time="10:37AM" />
            </div>
        </div>
    );
}

export default Email;
