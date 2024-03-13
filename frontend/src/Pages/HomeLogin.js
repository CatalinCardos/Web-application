import * as React from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';




const HomeLogin = (props) => {
    const [username, setUsernname] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [goToRegister, setGoToRegister] = React.useState(false)
    const [goToChooseSport, setGoToChooseSport] = React.useState(false)
    const [goToAdmiPage, setGoToAdminPage] = React.useState(false)
    const [goToEmployeePage, setGoToEmployeePage] = React.useState(false)
    let logindata = []
    let flag = false
    let idUser = 0;
    let userData = null;

    const handleClick = async (e) => {
        e.preventDefault()
        if (username === 'admin' && password === 'admin'){
                setGoToAdminPage(true)
        }else 
        {
            try {
                logindata = await axios.get("http://localhost:8081/login/getAll", {});

            } catch (err) {
                console.log(err)
            }
            logindata.data.forEach(element => {
                if (element.username === username && element.password === password) {
                    idUser = element.id
                    flag = true
                }
            });
            if (flag === false) {
                alert("Username or password incorrect")
            } else {
                try {
                    userData = await axios.get("http://localhost:8081/register/getUserByIdutil/" + idUser, {});
                    if (userData.data.role === "user") {
                        setGoToChooseSport(true)
                        sessionStorage.setItem('username', JSON.stringify({
                            username: username,
                            password: password,
                            idUser: idUser,
                            idData: userData.data.id,
                            idUtil: userData.data.idutil,
                            lastName: userData.data.lastName,
                            firstName: userData.data.firstName,
                            county: userData.data.county,
                            city: userData.data.city,
                            address: userData.data.address,
                            favoriteSport: userData.data.favoriteSport,
                            rating: userData.data.rating,
                            role: userData.data.role,
                            knowsFootball: userData.data.knowsFootball,
                            knowsTennis: userData.data.knowsTennis,
                            knowsBasket: userData.data.knowsBasket,
                            knowsHandball: userData.data.knowsHandball
                        }))

                    }
                    else{
                        setGoToEmployeePage(true)
                        sessionStorage.setItem('username', JSON.stringify({
                            username: username,
                            password: password,
                            idUser: idUser,
                            idData: userData.data.id,
                            idUtil: userData.data.idutil,
                            lastName: userData.data.lastName,
                            firstName: userData.data.firstName,
                            county: userData.data.county,
                            city: userData.data.city,
                            address: userData.data.address,
                            favoriteSport: userData.data.favoriteSport,
                            rating: userData.data.rating,
                            role: userData.data.role,
                            knowsFootball: userData.data.knowsFootball,
                            knowsTennis: userData.data.knowsTennis,
                            knowsBasket: userData.data.knowsBasket,
                            knowsHandball: userData.data.knowsHandball
                        }))
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
        }

    }

    if (goToRegister) {
        return <Navigate to="/homeregister" />
    }
    if (goToChooseSport) {
        return <Navigate to="/chooseSport" />
    }
    if (goToAdmiPage) {
        return <Navigate to="/adminPage/users" />
    }
    if (goToEmployeePage) {
        return <Navigate to="/employeePage" />
    }

    return (

        < div className='HomeLogin' >
            <form className="login-form" >
                <input value={username} onChange={(e) => setUsernname(e.target.value)} type="username" placeholder="Username" id="username" name="username" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="login-btn" type="submit" onClick={handleClick}>Log In</button>
                <p className="message">Don't have an account? Register here. <a href="" onClick={() => setGoToRegister(true)}>Sign In</a></p>
            </form>
        </div >
    )
}

export default HomeLogin;