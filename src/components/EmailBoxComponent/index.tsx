import React from 'react'
import propTypes from 'prop-types'
import {faFolder} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type fProps = {
  folders: Array<string>;
  setFolder: Function;
}

const EmailBoxComponent = ({folders, setFolder}: fProps) => {
  return (
    <div>
      {folders.map((f, i)=> {return (
        <div style={{padding: '4px 4px'}} onClick={() =>setFolder(i)}>
          <FontAwesomeIcon icon={faFolder} pull='left'></FontAwesomeIcon>{f}
        </div>
      )})}
    </div>
  )
}

EmailBoxComponent.PropsType = {
  folders: propTypes.array.isRequired,
  setFolder: propTypes.func.isRequired
}
export default EmailBoxComponent