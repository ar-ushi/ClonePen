import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons'


export default function Editor(props ) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props 
    const [open, setOpen] = useState(true) //default all text editors are open 
    function handleChange(editor, data, value){
        onChange(value);
    }
    return (
        <div className= {`e-container ${open ?  '' : 'collapsed'}`}>
            <div className="e-title">
                {displayName}
                <button
                type="button"
                className = "exp-coll-btn"
                onClick={() => setOpen(prevOpen => !prevOpen)}
                >
                    <FontAwesomeIcon icon= {open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
            onBeforeChange={handleChange} 
            value = {value}
            className = "code-wrapper"
            options = {{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers : true,
                theme: 'material'
            }}
            />
        </div>
    )
}
