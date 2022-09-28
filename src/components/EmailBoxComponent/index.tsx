import React from 'react'
import propTypes from 'prop-types'
import {faFolder, faFolderOpen} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import style from './style.module.css'

type fProps = {
  active: number;
  folders: Array<string>;
  setFolder: Function;
}

const EmailBoxComponent = ({active, folders, setFolder}: fProps) => {
  return (
    <div className={style.container}>
      {folders.map((f, i)=> {return (
        <div className={(active === i)? style.activeFolder : style.folder} onClick={() =>setFolder(i)}>
          <span className={style.text}>
            {(active !== i)?<FontAwesomeIcon icon={faFolder} pull='left'></FontAwesomeIcon> : <FontAwesomeIcon icon={faFolderOpen} pull='left'></FontAwesomeIcon>}
            {f}
          </span>
        </div>
      )})}
    </div>
  )
}

EmailBoxComponent.PropsType = {
  active: propTypes.number.isRequired,
  folders: propTypes.array.isRequired,
  setFolder: propTypes.func.isRequired
}
export default EmailBoxComponent