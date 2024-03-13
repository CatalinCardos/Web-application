import userEvent from "@testing-library/user-event";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";




const FieldPageConfirmation = (props) => {
    const { id } = useParams();
    const [players, setPlayers] = React.useState([]);
    const [content, setContent] = React.useState([]);
    let dataAccount = JSON.parse(sessionStorage.getItem('username'))
    async function getAllUsers() {
        try {

            const response = await axios.get("http://localhost:8081/register/getAllUsers", {});
            setPlayers(response.data);


        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    const clickHandler = (e) => {

        let invite = {
            idInvitePlayer: e.target.getAttribute("idplayer"),
            idPlayer: dataAccount.idData,
            idField: id,
            idUsed: false
        }
        e.target.disabled = true;
        
        try{
            axios.post("http://localhost:8081/invite/addInvite", invite);
        }catch(e){
            console.log(e);
        }
        alert("Invite sent!")
    }

    useEffect(() => {
        let aux = []
        if (players) {
            players.forEach(player => {
                console.log(player);
                if (player.role === "user" && player.id !== dataAccount.idData) {
                    aux.push(
                        <div key={player.id} className="playerClassInvite">
                            <p>{player.lastName} {player.firstName}</p>
                            <button idplayer={player.id} className="buttonClass" onClick={clickHandler}>Invite</button>
                        </div>
                    )
                }
            });
            console.log(aux);
            setContent(aux);
        } else {
            content.push(<p>No player was found!</p>);
        }
    }, [players]);

    return (
        <div className="fieldPageConfirmationClass">
            <Navbar></Navbar>
            <div className="fieldsBorder">
                <i class="fa fa-fw fa-check-circle fa-4x"></i>
                <p className="confirmationTextClass">Confirmation done!</p>
                <div className="fieldsBorderListingPlayers">
                    <p>Players:</p>
                    <ul>
                        {content}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default FieldPageConfirmation;