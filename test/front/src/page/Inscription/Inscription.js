import React, { useRef } from 'react'
import './Style.css'
export default function Inscription() {
    const email = useRef();
    const password = useRef()
    const confirmPassword = useRef();
    const Name = useRef();
    const surname = useRef();
    const birth = useRef();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log({ email: email.current.value, password: password.current.value, confirmePassword: confirmPassword.current.value, birthday: birth.current.value, surname: surname.current.value });
        const body = JSON.stringify({ name: email.current.value, password: password.current.value, confirmPassword: confirmPassword.current.value, birthday: birth.current.value, surname: surname.current.value })
        fetch("http://localhost:9000/user", { method: "POST", headers: { "content-type": "application/json" }, body }).then(res => res.json).then(data => console.log(data))

    }
    return (
        <div>
            <div className="form">
                <form onSubmit={handleRegister}>
                    <h1>Inscription</h1>
                    <div>
                        <label >Name</label>
                        <input ref={Name} type="Name" placeholder="Name" />

                        <label>surname</label>
                        <input ref={surname} type="surname" placeholder='nom de famille' />

                        <label >email</label>
                        <input ref={email} type="email" placeholder="mail" />
                    </div>
                    <label>
                        <label >password</label>
                        <input ref={password} type="password" placeholder="Mot de passe" />

                        <label> confirmed password</label>
                        <input ref={confirmPassword} type="password" placeholder=' confirmer le mot de passe' />
                        <label>birthday</label>
                        <input ref={birth} type="date" name="bday" />
                    </label>
                    <button type='submit'>Inscription</button>
                </form>
            </div>
        </div>
    )
}