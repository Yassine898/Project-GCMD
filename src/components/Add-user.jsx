import { useState } from "react"

export default function Add_User(){
    const [nom,Editnom]=useState('')
    const [mnt,EditMnt]=useState(0)
    const reset =(e)=>{
        e.preventDefault();
        Editnom('')
        EditMnt(0)
    }
    const handelNom=(e)=>{
        e.preventDefault()
        Editnom(e.target.value)
    }
    const handleMnt=(e)=>{
        e.preventDefault()
        EditMnt(e.target.value)
    }
    return (
        <>
        <fieldset>
            <legend>Add-User</legend>
            <form action="">
                <div className="input-field">
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" value={nom} placeholder="Nom.." onChange={handelNom}/>
                </div>
                <div className="input-field">
                    <label htmlFor="mnt">Montant:</label>
                    <input type="number" value={mnt} placeholder="Montant.." onChange={handleMnt}/>
                </div>
                <div className="input-field">
                    <button onClick={reset}>Reset</button>
                    <button>Submit</button>
                </div>
            </form>
        </fieldset>
        </>
    )
}
