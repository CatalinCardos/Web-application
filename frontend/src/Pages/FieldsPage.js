import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function FieldsPage() {
    const { id } = useParams();
    const [program, setProgram] = useState(null);
    const [field, setField] = useState(null);
    const [playersID, setPlayersID] = useState(null);
    const [players, setPlayers] = useState(null);
    let dataAccount = JSON.parse(sessionStorage.getItem('username'))
    async function getProgramByID(id) {
        try {
            const response = await axios.get("http://localhost:8081/program/getProgramByID/" + id, {});
            setProgram(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    async function getFieldByID(id) {
        try {

            const response = await axios.get("http://localhost:8081/fields/getFieldById/" + id, {});
            setField(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    async function getAllUsers() {
        try {

            const response = await axios.get("http://localhost:8081/register/getAllUsers", {});
            setPlayers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    async function getPlayersByProgramID1v1(id) {
        try {
            const response = await axios.get("http://localhost:8081/team/team1v1/getPlayers/" + id, {});
            setPlayersID(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    async function getPlayersByProgramID5v5(id) {
        try {
            const response = await axios.get("http://localhost:8081/team/team5v5/getPlayers/" + id, {});
            setPlayersID(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    async function getPlayersByProgramID7v7(id) {
        try {
            const response = await axios.get("http://localhost:8081/team/team7v7/getPlayers/" + id, {});
            setPlayersID(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProgramByID(id);
    }, [id]);

    useEffect(() => {

        if (program) {
            getFieldByID(program.idField);
        }
    }, [program]);

    useEffect(() => {
        if (field) {
            if (field.type === "Football") {
                getPlayersByProgramID7v7(id);
            } else if (field.type === "Basket") {
                getPlayersByProgramID5v5(id);
            } else if (field.type === "Tennis") {
                getPlayersByProgramID1v1(id);
            } else if (field.type === "Handball") {
                getPlayersByProgramID7v7(id);
            }

        }
    });

    useEffect(() => {
        getAllUsers();
    }, []);

    const handleClick7v7 = async (e) => {
        try {
            await axios.post(`http://localhost:8081/team/team7v7/${program.id}/player/${dataAccount.idData}/numbersOfPlayers/${program.capacity}`, {});
        } catch (err) {
            console.log(err)
        }
        try {
            await axios.post(`http://localhost:8081/program/addCount/${program.id}`, {});

        } catch (err) {
            console.log(err)
        }
    }

    const handleClick5v5 = async (e) => {
        try {
            await axios.post(`http://localhost:8081/team/team5v5/${program.id}/player/${dataAccount.idData}/numbersOfPlayers/${program.capacity}`, {});
        } catch (err) {
            console.log(err)
        }
        try {
            await axios.post(`http://localhost:8081/program/addCount/${program.id}`, {});

        } catch (err) {
            console.log(err)
        }
    }

    const handleClick1v1 = async (e) => {
        try {
            await axios.post(`http://localhost:8081/team/team1v1/${program.id}/player/${dataAccount.idData}/numbersOfPlayers/${program.capacity}`, {});
        } catch (err) {
            console.log(err)
        }
        try {
            await axios.post(`http://localhost:8081/program/addCount/${program.id}`, {});

        } catch (err) {
            console.log(err)
        }
    }

    function checkIfAccountIsInTeam() {
        if (playersID) {
            if (playersID.team1player1 === dataAccount.idData || playersID.team1player2 === dataAccount.idData ||
                playersID.team1player3 === dataAccount.idData || playersID.team1player4 === dataAccount.idData ||
                playersID.team1player5 === dataAccount.idData || playersID.team1player6 === dataAccount.idData ||
                playersID.team1player7 === dataAccount.idData || playersID.team2player1 === dataAccount.idData ||
                playersID.team2player2 === dataAccount.idData || playersID.team2player3 === dataAccount.idData ||
                playersID.team2player4 === dataAccount.idData || playersID.team2player5 === dataAccount.idData ||
                playersID.team2player6 === dataAccount.idData || playersID.team2player7 === dataAccount.idData ||
                playersID.secondPlayer === dataAccount.idData || playersID.firstPlayer === dataAccount.idData) {
                return <button className="submit-btn" disabled>Already in team</button>
            } else {
                return checkCapacity();
            }
        }
    }

    function checkCapacity() {
        if (program && field) {
            let aux = 14;
            if (field.type === "Basket") {
                aux = 10;
            } else if (field.type === "Tennis") {
                aux = 2;
            }
            if (program.capacity === aux) {
                return <button className="submit-btn" disabled>Full</button>
            } else {
                if (field.type === "Football") {
                    console.log(dataAccount);
                    if (dataAccount.knowsFootball === true) {
                        let send =
                            <Link to={`/chooseSport/football/field/${id}/confirmation`}>
                                <button className='submit-btn' type="submit" onClick={handleClick7v7}>Confirm</button>
                            </Link>
                        return send
                    } else {
                        return <button className="submit-btn" disabled>You can't play!</button>
                    }

                } else if (field.type === "Basket") {
                    if (dataAccount.knowsBasket === true) {
                        let send =
                            <Link to={`/chooseSport/bascket/field/${id}/confirmation`}>
                                <button className='submit-btn' type="submit" onClick={handleClick5v5}>Confirm</button>
                            </Link>
                        return send
                    } else {
                        return <button className="submit-btn" disabled>You can't play!</button>
                    }
                }
                else if (field.type === "Tennis") {
                    if (dataAccount.knowsTennis === true) {
                        let send =
                            <Link to={`/chooseSport/football/field/${id}/confirmation`}>
                                <button className='submit-btn' type="submit" onClick={handleClick1v1}>Confirm</button>
                            </Link>
                        return send

                    } else {
                        return <button className="submit-btn" disabled>You can't play!</button>
                    }

                }
                else if (field.type === "Handball") {
                    if (dataAccount.knowsHandball === true) {
                        let send =
                            <Link to={`/chooseSport/football/field/${id}/confirmation`}>
                                <button className='submit-btn' type="submit" onClick={handleClick7v7}>Confirm</button>
                            </Link>
                            return send
                    } else {
                        return <button className="submit-btn" disabled>You can't play!</button>
                    }
                }

            }
        }
    }

    let content = null;
    let contentPlayers = [];
    let allPlayers = [];
    if (field && program && playersID && players) {
        let totalCount = 0;
        console.log(field)

        if (field.type === 'Football') {
            totalCount = 14
            if (program.capacity !== 0) {
                const player1 = players.find((player) => player.id === playersID.team1player1);
                const player2 = players.find((player) => player.id === playersID.team1player2);
                const player3 = players.find((player) => player.id === playersID.team1player3);
                const player4 = players.find((player) => player.id === playersID.team1player4);
                const player5 = players.find((player) => player.id === playersID.team1player5);
                const player6 = players.find((player) => player.id === playersID.team1player6);
                const player7 = players.find((player) => player.id === playersID.team1player7);
                const player8 = players.find((player) => player.id === playersID.team2player1);
                const player9 = players.find((player) => player.id === playersID.team2player2);
                const player10 = players.find((player) => player.id === playersID.team2player3);
                const player11 = players.find((player) => player.id === playersID.team2player4);
                const player12 = players.find((player) => player.id === playersID.team2player5);
                const player13 = players.find((player) => player.id === playersID.team2player6);
                const player14 = players.find((player) => player.id === playersID.team2player7);
                allPlayers = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14];

                for (let i = 0; i < program.capacity; i++) {
                    contentPlayers.push(<div className="player" key={i}>
                        <p>{allPlayers[i].firstName} {allPlayers[i].lastName}</p>
                    </div>)
                }
            } else {
                contentPlayers = <p>There is no players</p>
            }

        } else if (field.type === 'Basket') {
            totalCount = 10
            if (program.capacity !== 0) {
                const player1 = players.find((player) => player.id === playersID.team1player1);
                const player2 = players.find((player) => player.id === playersID.team1player2);
                const player3 = players.find((player) => player.id === playersID.team1player3);
                const player4 = players.find((player) => player.id === playersID.team1player4);
                const player5 = players.find((player) => player.id === playersID.team1player5);
                const player6 = players.find((player) => player.id === playersID.team2player1);
                const player7 = players.find((player) => player.id === playersID.team2player2);
                const player8 = players.find((player) => player.id === playersID.team2player3);
                const player9 = players.find((player) => player.id === playersID.team2player4);
                const player10 = players.find((player) => player.id === playersID.team2player5);
                allPlayers = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];

                for (let i = 0; i < program.capacity; i++) {
                    contentPlayers.push(<div className="player" key={i}>
                        <p>{allPlayers[i].firstName} {allPlayers[i].lastName}</p>
                    </div>)
                }
            } else {
                contentPlayers = <p>There is no players</p>
            }
        } else if (field.type === 'Tennis') {
            totalCount = 2
            if (program.capacity !== 0) {
                const player1 = players.find((player) => player.id === playersID.firstPlayer);
                const player2 = players.find((player) => player.id === playersID.secondPlayer);
                allPlayers = [player1, player2];

                for (let i = 0; i < program.capacity; i++) {
                    contentPlayers.push(<div className="player" key={i}>
                        <p>{allPlayers[i].firstName} {allPlayers[i].lastName}</p>
                    </div>)
                }
            } else {
                contentPlayers = <p>There is no players</p>
            }
        } else if (field.type === 'Handball') {
            totalCount = 14
            if (program.capacity !== 0) {
                const player1 = players.find((player) => player.id === playersID.team1player1);
                const player2 = players.find((player) => player.id === playersID.team1player2);
                const player3 = players.find((player) => player.id === playersID.team1player3);
                const player4 = players.find((player) => player.id === playersID.team1player4);
                const player5 = players.find((player) => player.id === playersID.team1player5);
                const player6 = players.find((player) => player.id === playersID.team1player6);
                const player7 = players.find((player) => player.id === playersID.team1player7);
                const player8 = players.find((player) => player.id === playersID.team2player1);
                const player9 = players.find((player) => player.id === playersID.team2player2);
                const player10 = players.find((player) => player.id === playersID.team2player3);
                const player11 = players.find((player) => player.id === playersID.team2player4);
                const player12 = players.find((player) => player.id === playersID.team2player5);
                const player13 = players.find((player) => player.id === playersID.team2player6);
                const player14 = players.find((player) => player.id === playersID.team2player7);
                allPlayers = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14];

                for (let i = 0; i < program.capacity; i++) {
                    contentPlayers.push(<div className="player" key={i}>
                        <p>{allPlayers[i].firstName} {allPlayers[i].lastName}</p>
                    </div>)
                }
            }
        }
        content =
            <div key={id} >
                <Navbar></Navbar>
                <div className="fieldsBorder">
                    <p>{field.name}</p>
                    <div className="fieldDetails">
                        <p>Address: {field.street}</p>
                        <div className="fieldDetailsWithButton">
                            <p>Count: {program.capacity}/{totalCount}</p>
                            {checkIfAccountIsInTeam()}
                        </div>
                    </div>
                    <div className="fieldsBorderListingPlayers">
                        <p>Players:</p>
                        <ul>
                            {contentPlayers}
                        </ul>
                    </div>
                    <p className="fieldDetailsTime">{program.beginHour}:00 - {program.finalHour}:00</p>
                    <p className="fieldDetailsDate">{program.date.substring(8, 10)}-{program.date.substring(5, 7)}-{program.date.substring(0, 4)}</p>

                </div>
            </div>
    }
    return (
        <div className="fields">
            {content}
        </div>
    )
};

export default FieldsPage;