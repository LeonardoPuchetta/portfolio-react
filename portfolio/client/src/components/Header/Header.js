import React from 'react'
import './Header.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material'

export default function Header() {
  return (
   
        <div className='header'>
            <div className='header-left'> 
                <IconButton>
                    <GitHubIcon/>
                </IconButton>
            </div>
            <div className='header-right'> 
                <div>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
                </div>
                <div>
                <IconButton>
                    <LinkedInIcon/>
                </IconButton>
                </div>
            </div>
        </div>

   
  )
}
