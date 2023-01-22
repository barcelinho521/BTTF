import React, { useState } from 'react'
import './Style.css'
import Inscription from '../Inscription/Inscription'
export default function Connexion() {
    return (
        <div>
            <div className="form">
                <form action="" method="post">
                    <h1>Connexion</h1>
                    <div>
                        <label htmlFor="">email</label>
                        <input type="email" placeholder="mail" />
                    </div>
                    <label>
                        <label hymlFor="">password</label>
                        <input type="password" placeholder="Mot de passe" />

                    </label>
                    <button>Connexion</button>
                </form>
            </div>
        </div>
    )
}