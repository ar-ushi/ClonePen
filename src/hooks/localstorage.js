import {useState, useEffect} from 'react'

const PREFIX = 'clonepen'
export default function localstorage(key, initialVal) {
    const prefixkey = PREFIX + key;
    consr [val, setVal] = useState(()=> {
        const jsonVal = localStorage.getItem(prefixkey)
        if (jsonVal != null) return JSON.parse(jsonVal)
        if (typeof initialVal === 'function'){
            return initialVal()
        }else{
            return initialVal
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixkey, JSON.stringify(val))
    }, [prefixkey, val]) //what happens when val changes
    
    return [val, setVal]
}

//* key = id for local storage initval = generic '' string we set for setState
//* use prefix to append to beginning of id for easier understanding