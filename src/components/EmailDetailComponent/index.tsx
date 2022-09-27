import React from 'react'
import propTypes from 'prop-types'
import IMessages from '../../interface/IMessages'
import {Table, TableBody, TableHead, TableCell, TableRow, TableContainer} from '@mui/material'
import style from './style.module.css'
type mfProps = {
  messages: Array<IMessages>;
}

const EmailDetailComponent = ({messages}: mfProps) => {
  return (
    <TableContainer>
      <Table sx={{width: '100%', tableLayout: 'fixed'}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{width: '20%', fontWeight: 'bold'}}>Sender</TableCell>
            <TableCell sx={{width: '70%', fontWeight: 'bold'}}>Subject</TableCell>
            <TableCell sx={{width: '10%', fontWeight: 'bold'}}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((m: IMessages) => {
            return (
              <TableRow>
                <TableCell className={style.cellOverflow}>{m.from}</TableCell>
                <TableCell className={style.cellOverflow}>{m.body}</TableCell>
                <TableCell>{new Date(Date.parse(m.date)).toISOString().split('T')[0]}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

EmailDetailComponent.propTypes = {
  messages: propTypes.array.isRequired
}

export default EmailDetailComponent