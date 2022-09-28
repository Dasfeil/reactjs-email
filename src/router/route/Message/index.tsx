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
    const [order, setOrder] = useState(false)
    const toggleOrder = () => {
        setOrder(!order)
    }
    const compareDate = (a: number, b: number) => {
        if (a > b) return 1
        else if (a < b) return -1
        else return 0
    }
    useEffect(() => {
        let temp = messages
        temp.sort((a: IMessages, b: IMessages) => { return compareDate(Date.parse(a.date), Date.parse(b.date))*(order? 1 : -1)})
        setMessage(temp.filter((m: IMessages) => { 
            return m.folder === folders[folder]
        }))
    }, [folder, messages, folders, order])
    return (
        <div className={style.container}>
            <div className={style.inbox}>
                <div className={style.boxComponent}>
                    <EmailBoxComponent active={folder} folders={folders} setFolder={setFolder}/>
                </div>
                <div className={style.detailComponent}>
                    <EmailDetailComponent messages={message} selected={selected} setSelect={setSelect} order={order} toggleOrder={toggleOrder}/>
                </div>
            </div>
            {selected && <div>
                <EmailPreviewComponent message={selected}/>
            </div>}
        </div>
    )
}

