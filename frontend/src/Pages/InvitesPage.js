import * as React from 'react';
import Navbar from "../Components/Navbar";
import { useEffect } from 'react';
import axios from "axios";


const InvitePage = (props) => {
    const [players, setPlayers] = React.useState([]);
    const [content, setContent] = React.useState([]);
    const [invite, setInvite] = React.useState([]);
    const [field, setField] = React.useState([]);
    const [program, setProgram] = React.useState([]);
    let dataAccount = JSON.parse(sessionStorage.getItem('username'))
    async function getAll() {
        try {

            const response = await axios.get("http://localhost:8081/register/getAllUsers", {});
            setPlayers(response.data);
            const response1 = await axios.get("http://localhost:8081/fields/getAllFields", {});
            setField(response1.data);
            const response2 = await axios.get("http://localhost:8081/program/getAllPrograms", {});
            setProgram(response2.data);
            const response3 = await axios.get(`http://localhost:8081/invite/getInviteByID/${dataAccount.idData}`, {});
            setInvite(response3.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getAll();
    }, []);

    const clickHandlerAccept = async (e) => {
        e.preventDefault();
        let id = e.target.getAttribute("inid");
        let fieldType = e.target.getAttribute("fieldtype");
        let idProgram = e.target.getAttribute("programid");
        let programCapacity = e.target.getAttribute("programcapacity");
        axios.put(`http://localhost:8081/invite/makeUsedInvite/${id}`, {});
        console.log(id);
        console.log(fieldType);
        console.log(idProgram);
        console.log(programCapacity);

        if (fieldType === "Tennis") {
            try {
                await axios.post(`http://localhost:8081/team/team1v1/${idProgram}/player/${dataAccount.idData}/numbersOfPlayers/${programCapacity}`, {});
            } catch (err) {
                console.log(err)
            }
            try {
                await axios.post(`http://localhost:8081/program/addCount/${idProgram}`, {});

            } catch (err) {
                console.log(err)
            }
        } else
            if (fieldType === "Basket") {
                try {
                    await axios.post(`http://localhost:8081/team/team5v5/${idProgram}/player/${dataAccount.idData}/numbersOfPlayers/${programCapacity}`, {});
                } catch (err) {
                    console.log(err)
                }
                try {
                    await axios.post(`http://localhost:8081/program/addCount/${idProgram}`, {});

                } catch (err) {
                    console.log(err)
                }
            } else
                if (fieldType === "Football" || fieldType === "Handball") {
                    try {
                        await axios.post(`http://localhost:8081/team/team7v7/${idProgram}/player/${dataAccount.idData}/numbersOfPlayers/${programCapacity}`, {});
                    } catch (err) {
                        console.log(err)
                    }
                    try {
                        await axios.post(`http://localhost:8081/program/addCount/${idProgram}`, {});

                    } catch (err) {
                        console.log(err)
                    }
                }
        alert("Invite accepted!")
        window.location.reload()

    }

    const clickHandlerDecline = (e) => {
        e.preventDefault();
        let id = e.target.getAttribute("inid");
        axios.put(`http://localhost:8081/invite/makeUsedInvite/${id}`, {});
        alert("Invite declined!")
        window.location.reload()

    }
    useEffect(() => {
        if (players && field && invite && program) {
            let index = 0;
            let aux = []
            invite.forEach(inv => {
                let player = players.find(p => p.id === inv.idPlayer);
                if (player != null) {
                    let programInv = program.find(p => p.id === inv.idField);
                    let fieldInv = null;
                    let fullCapacity = 14;
                    if (programInv) {
                        fieldInv = field.find(f => f.id === programInv.idField);
                        if (fieldInv.type === "Tennis") {
                            fullCapacity = 2;
                        } else
                            if (fieldInv.type === "Basket") {
                                fullCapacity = 10;
                            }
                    }
                    if (player.role === "user" && fieldInv && inv.used === false && programInv.capacity < fullCapacity) {

                        aux.push(
                            <div key={index++} className="invitePlayersScreen">
                                <div className='detailsOfInviteField'>
                                    <p className='paragraphInviteClass'>{player.lastName} {player.firstName}</p>
                                    <p className='paragraphInviteClass'>{fieldInv.name} {fieldInv.address}</p>
                                    <p className='paragraphInviteClass'>{programInv.date.substring(8, 10)}-{programInv.date.substring(5, 7)}-{programInv.date.substring(0, 4)}</p>
                                    <p className='paragraphInviteClass'>{programInv.beginHour}:00 - {programInv.finalHour}:00</p>
                                </div>
                                <div>
                                    <button inid={inv.id} fieldtype={fieldInv.type} programid={programInv.id} programcapacity={programInv.capacity} className="buttonClass" onClick={clickHandlerAccept} >Accept</button>
                                    <button inid={inv.id} className="buttonClass" onClick={clickHandlerDecline}>Decline</button>
                                </div>

                            </div>
                        )
                    }
                }

            });

            if (aux.length === 0) {
                aux.push(
                    <div className="fieldsBorderListingPlayers">
                        <p>No invites</p>
                    </div>
                )
            }
            setContent(aux);
        }
    }, [players, field, invite, program]);


    return (
        < div className='InvitePageClass' >
            <Navbar />
            <div className='fieldsBorderListingPlayers'>
                <ul>
                    {content}
                </ul>
            </div>
        </div>
    )
}

export default InvitePage;

