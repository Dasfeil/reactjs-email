import React from 'react'
import IMessages from '../../interface/IMessages'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong, faReply, faForward, faXmark} from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material'
import style from './style.module.css'
type PProps = {
    message: IMessages;
}

const EmailPreviewComponent = ({message}: PProps) => {
  return (
    <div>
        <div className={style.header}>
            <div className={`${style.headerDiv} ${style.left}`}>
                <p className={style.subject}>{message.subject}</p>
                <p className={style.fromTo}>{message.from} <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>{message.to}</p> 
            </div>
            <div className={`${style.headerDiv} ${style.right}`}>
                <p>{new Date(Date.parse(message.date)).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'medium', hourCycle: 'h12'})}</p>
                <div className={style.buttonGroup}>
                    <Button variant="contained"><FontAwesomeIcon icon={faReply} pull='left'></FontAwesomeIcon>Reply</Button>
                    <Button variant="contained"><FontAwesomeIcon icon={faForward} pull='left'></FontAwesomeIcon>Forward</Button>
                    <Button variant="contained"><FontAwesomeIcon icon={faXmark} pull='left'></FontAwesomeIcon>Delete</Button>
                </div>
            </div>
        </div>
        <div className={style.body}>
            {message.body}
        </div>
    </div>
  )
}

EmailPreviewComponent.propTypes = {
    message: propTypes.object.isRequired,
}

export default EmailPreviewComponent