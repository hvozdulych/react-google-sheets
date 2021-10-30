import React from "react"
import { TextField, Button } from "@mui/material";

export const Form = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        surname: "",
        email: ""
    })

    const handleChange = (event) => {
        event.preventDefault()

        setFormData(formData => ({
            ...formData,
            [event.target.id]: event.target.value
        }))
    }

    const handleSubmit = () => {
        console.log("submit", { formData })
    }

    return <div className="form">
        <TextField id="name" label="Name" variant="standard" required={true} value={formData.name} onChange={handleChange}/>
        <TextField id="surname" label="Email" variant="standard" required={true} value={formData.surname} onChange={handleChange}/>
        <TextField id="email" label="Email" variant="standard" required={true} value={formData.email} onChange={handleChange}/>
        <Button onClick={handleSubmit}>Submit</Button>
    </div>
}
