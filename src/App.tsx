import { useEffect, useRef, useState } from 'react';
import './App.css';
import IMessages from './interface/IMessages'
import {NavLink, Outlet} from 'react-router-dom'
import {Select, MenuItem, SelectChangeEvent, Button} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function App() {
  const mounted = useRef(false)
  const [messages, setMessages] = useState(new Array<IMessages>())
  const [user, setUser] = useState('')
  const allMessages = useRef(Array<IMessages>())
  const folders = useRef(Array<String>())
  const users = useRef(new Array<string>())
  useEffect(()=> {
    if (!mounted.current) {
      mounted.current = true
      const getMessages = async (url: string) => {
        fetch(url).then(res => res.json()).then((data: [IMessages]) => {
          users.current = Array.from(new Set(data.map((message: IMessages) => message.to)))
          setUser(users.current[0])
          allMessages.current = data
          folders.current = Array.from(new Set(data.map(m => m.folder)))
          folders.current = [...folders.current, 'drafts', 'sent']
        })
      }
      getMessages('https://ui-router.github.io/sample-app-angularjs/data/messages.json')
    }
    setMessages(allMessages.current.filter((m) => {
      return (m.to === user)
    }))
  }, [user])

  const handleChange = (e: SelectChangeEvent) => {
    setUser(e.target.value)
  }

  return (
    <div className="App">
      <header>
        <div className='tab-container'>
          <NavLink to="/messages" className={({isActive}) => isActive ? 'router-link-active' : 'router-link'}>Messages</NavLink>
          <NavLink to="/contacts" className={({isActive}) => isActive ? 'router-link-active' : 'router-link'}>Contacts</NavLink>
          <NavLink to="/preferences" className={({isActive}) => isActive ? 'router-link-active' : 'router-link'}>Preferences</NavLink>
        </div>
        <div className='left-header'>
          <Select
          id="userEmail"
          value={user}
          onChange={handleChange}
          sx={{ borderStyle: "none"}}>
          {users.current.map((user: string) => {
            return (
              <MenuItem value={user}>{user}</MenuItem>
            )
          })}
          </Select>
          <Button variant="contained"><FontAwesomeIcon icon={faHouseChimney}></FontAwesomeIcon></Button>
          <Button variant="contained"><FontAwesomeIcon icon={faEnvelope} pull="left"></FontAwesomeIcon>New messages</Button>  
        </div>
      </header>
      <Outlet context={[messages, folders.current]}/>
    </div>
  );
}

export default App;


