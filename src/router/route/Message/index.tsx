import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import style from './style.module.css'
import EmailBoxComponent from '../../../components/EmailBoxComponent'
import EmailDetailComponent from '../../../components/EmailDetailComponent'
import IMessages from '../../../interface/IMessages'
import EmailPreviewComponent from '../../../components/EmailPreviewComponent'

export default function Messages() {
    const props: Array<any> = useOutletContext()
    const messages: IMessages[]  = props[0]
    const folders: Array<string> = props[1]
    const [folder, setFolder] = useState(0)
    const [message, setMessage] = useState(new Array<IMessages>())
    const [selected, setSelect] = useState<IMessages>()
    useEffect(() => {
        setMessage(messages.filter((m: IMessages) => { 
            return m.folder === folders[folder]
        }))
    }, [folder, messages, folders])
    return (
        <div className={style.container}>
            <div className={style.inbox}>
                <div className={style.boxComponent}>
                    <EmailBoxComponent active={folder} folders={folders} setFolder={setFolder}/>
                </div>
                <div className={style.detailComponent}>
                    <EmailDetailComponent messages={message} selected={selected} setSelect={setSelect}/>
                </div>
            </div>
            {selected && <div>
                <EmailPreviewComponent message={selected}/>
            </div>}
        </div>
    )
}

