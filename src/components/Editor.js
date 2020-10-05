import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props ) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props 
    
    function handleChange(editor, data, value){
        onChange(value);
    }
    return (
        <div className="e-container">
            <div className="e-title">
                {displayName}
                <button>O/C</button>
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
