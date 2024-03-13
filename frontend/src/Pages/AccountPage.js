import * as React from 'react';
import Navbar from "../Components/Navbar";
import { useState } from 'react';
import axios from 'axios';

const AccountInfo = (props) => {
    const [username, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [county, setCounty] = useState(null)
    const [city, setCity] = useState(null)
    const [address, setAddress] = useState(null)
    const [favoriteSport, setfavoriteSport] = useState("Don't change!")
    const dataAccountForView = JSON.parse(sessionStorage.getItem('username'))
    let dataAccount = JSON.parse(sessionStorage.getItem('username'))

    const handleClick = async (e) => {
        e.preventDefault()
        if (username != null) {
            dataAccount.username = username
        }
        if (password != null) {
            dataAccount.password = password
        }
        if (lastName != null) {
            dataAccount.lastName = lastName
        }
        if (firstName != null) {
            dataAccount.firstName = firstName
        }
        if (county != null) {
            dataAccount.county = county
        }
        if (city != null) {
            dataAccount.city = city
        }
        if (address != null) {
            dataAccount.address = address
        }
        if (favoriteSport != "Don't change!") {
            dataAccount.favoriteSport = favoriteSport
        }
        const loginUser = {id: dataAccount.idUtil, username: dataAccount.username, password: dataAccount.password}
        const dataUser ={id: dataAccount.idData, idutil: dataAccount.idUtil, lastName: dataAccount.lastName, firstName: dataAccount.firstName, county: dataAccount.county, city: dataAccount.city, address: dataAccount.address, favoriteSport: dataAccount.favoriteSport, rating: dataAccount.rating, knowsFootball: dataAccount.knowsFootball, knowsBasket: dataAccount.knowsBasket, knowsHandball: dataAccount.knowsHandball, knowsTennis: dataAccount.knowsTennis, role: dataAccount.role}

        try {
            console.log(dataAccount)
            console.log(loginUser)
            console.log(dataUser)
            await axios.put("http://localhost:8081/login/putUserLogin", loginUser);
            await axios.put("http://localhost:8081/register/putUserDate", dataUser);
            sessionStorage.setItem('username', JSON.stringify(dataAccount))
            alert("Account updated!")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        < div className='AccountInfoClass' >
            <Navbar />
            < div className='accountClass' >
                <div className="accountClassDiv">
                    <input className='textFieldAccountInfo' value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder= {dataAccountForView.username} id="username" name="username" />
                    <input className='textFieldAccountInfo' value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder={dataAccountForView.password} id="password" name="password" />
                    <input className='textFieldAccountInfo' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder={dataAccountForView.lastName} id="lastName" name="lastName" />
                    <input className='textFieldAccountInfo' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder={dataAccountForView.firstName} id="firstName" name="firstName" />
                    <input className='textFieldAccountInfo' value={county} onChange={(e) => setCounty(e.target.value)} type="text" placeholder={dataAccountForView.county} id="county" name="county" />
                    <input className='textFieldAccountInfo' value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder={dataAccountForView.city} id="city" name="city" />
                    <input className='textFieldAccountInfo' value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder={dataAccountForView.address} id="address" name="address" />
                    <div className="custom-select" value={favoriteSport} onChange={(e) => setfavoriteSport(e.target.value)}  >
                        <select className="selectSport">
                            <option value="Don't change!">Don't change!</option>
                            <option value="Football">Football</option>
                            <option value="Baskeball">Baskeball</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Handball">Handball</option>
                        </select>
                    </div>
                </div>
                <button className='submit-btn' type='submit' onClick={handleClick}>Edit</button>
        </div >
            
        </div>
    )
}

export default AccountInfo;