import React, { useState } from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'
import QrCode from './QrCodeBox';
export default function Url() {
    const [value, setValue] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue(value);
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Enter Url</label>
                <input type='url' placeholder={`https://url.com`} onChange={(e) => { setValue(e.target.value) }} />
                <button onClick={codeGenerate} className='submit_btn'><HiArrowCircleRight />Generate QR</button>
            </div>
            <QrCode value={codeValue} />
        </section>

    )
}
