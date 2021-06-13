import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo'
                    src="data:image/jpeg;base64,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" alt="" />
                <div className='footer__songInfo'>
                    <h4>Yeah!</h4>
                    <p>Aman</p>
                </div>
            </div>

            <div className='footer__center'>
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize="large" className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className="footer__green" />
            </div>

            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
