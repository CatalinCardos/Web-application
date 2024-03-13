import { useState } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';

const HomeRegister = (props) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [county, setCounty] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [favoriteSport, setfavoriteSport] = useState("Football")
    const [goToLogin, setGoToLogin] = useState(false)
    const [activeAlert, setActiveAlert] = useState(false)
    let idutil = 0
    let knowsFootball = true
    let knowsBasket = true
    let knowsHandball = true
    let knowsTennis = true
    let rating = 0
    let allLogins = []
    let role = "user"

    const handleClickLogin = async (e) => {
        e.preventDefault()
        if(username === "" || password === "" || lastName === "" || firstName === "" || county === "" || city === "" || address === "") {
            alert("Please fill in all the fields")
            return
        }
        else{
            setActiveAlert(false)
        }
        try {
            allLogins = await axios.get("http://localhost:8081/login/getAll", {});
        }
        catch (err) {
            console.log(err)
        }
        await allLogins.data.forEach(allLogins => {
            if (allLogins.username === username) {
                alert("Username already taken")
                setActiveAlert(true)
            }
        });
        if (activeAlert === false) {
            try {
                const login = { username, password }
                const logindata = await axios.post("http://localhost:8081/register/newUserLogin", login);
                idutil = logindata.data.id
                console.log(idutil)
            }
            catch (err) {
                console.log(err)
            }

            if (idutil !== 0) {
                const data = { idutil, lastName, firstName, county, city, address, favoriteSport, rating, knowsFootball, knowsBasket, knowsHandball, knowsTennis, role}
                await axios.post("http://localhost:8081/register/newUserRegister", data);
                alert("Account created")
                setGoToLogin(true)
            } else {
                alert("Username already taken")
            }
        }
    }


    if (goToLogin) {
        return <Navigate to="/" />
    }

    return (
        < div className='HomeRegister' >
            <form className="register-form" >
                <div className="div-group">
                    <input value={username} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="Username" id="username" name="username" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastName" placeholder="Last Name" id="lastName" name="lastName" />
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstName" placeholder="First Name" id="firstName" name="firstName" />
                    <input value={county} onChange={(e) => setCounty(e.target.value)} type="county" placeholder="County" id="county" name="county" />
                    <input value={city} onChange={(e) => setCity(e.target.value)} type="city" placeholder="City" id="city" name="city" />
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" placeholder="Address" id="address" name="address" />
                    <div className="custom-select" value={favoriteSport} onChange={(e) => setfavoriteSport(e.target.value)}  >
                        <select className="selectSport">
                            <option value="Football">Football</option>
                            <option value="Baskeball">Baskeball</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Handball">Handball</option>
                        </select>
                    </div>
                </div>
                <button className='submit-btn' type='submit' onClick={handleClickLogin}>Sign In</button>
                <p className="message">Already have an account? <a href="" onClick={() => setGoToLogin(true)}>Login</a></p>
            </form>
        </div >

    )
}

export default HomeRegister;