import React from 'react'
import propTypes from 'prop-types'
import IMessages from '../../interface/IMessages'
import {Table, TableBody, TableHead, TableCell, TableRow, TableContainer, TableSortLabel} from '@mui/material'
import style from './style.module.css'
type mfProps = {
  selected: IMessages | undefined;
  messages: Array<IMessages>;
  setSelect: Function;
  order: boolean;
  toggleOrder: Function;
}

const EmailDetailComponent = ({selected, messages, setSelect, order, toggleOrder}: mfProps) => {
  return (
    <TableContainer>
      <Table sx={{width: '100%', tableLayout: 'fixed'}} size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: '20%', fontWeight: 'bold'}}>Sender</TableCell>
            <TableCell sx={{width: '70%', fontWeight: 'bold'}}>Subject</TableCell>
            <TableCell sx={{width: '10%', fontWeight: 'bold'}} onClick={() => toggleOrder()}>
              <TableSortLabel active direction={order? 'desc' : 'asc'}/>
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((m: IMessages) => {
            return (
              <TableRow hover selected={m===selected} onClick={() => setSelect(m)} sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'rgb(103, 103, 253)',
                    '& td': {
                      color: 'white'
                    }
                  },
                  '&.MuiTableRow-hover': {
                    '&:hover': {
                      backgroundColor: 'rgb(103, 103, 253)',
                      '& td': {
                        color: 'white'
                      }
                    }
                  }
              }}>
                <TableCell className={style.cellOverflow} sx={{

                }}>{m.from}</TableCell>
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
  messages: propTypes.array.isRequired,
  selected: propTypes.object.isRequired,
  setSelect: propTypes.func.isRequired,
  order: propTypes.bool.isRequired,
  toggleOrder: propTypes.func.isRequired
}

export default EmailDetailComponent