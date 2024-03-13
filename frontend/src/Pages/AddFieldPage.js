import react from 'react';
import NavbarAdmin from "../Components/NavbarAdmin";
import axios from 'axios';


export default function AddFieldPage() {
    const [name, setName] = react.useState("");
    const [street, setStreet] = react.useState("");
    const [type, setType] = react.useState("Football");
    const [beginHour, setBeginHour] = react.useState(8);
    const [finalHour, setFinalHour] = react.useState(8);
    const handleClick = async (e) => {
        e.preventDefault();
        console.log(name, street, type, beginHour, finalHour);
        if (name === "" || street === "" || type === "" || beginHour === "" || finalHour === "") {
            alert("All fields must be filled");
        } else {
            const field = { name: name, street: street, type: type, beginHour: beginHour, finalHour: finalHour };
            console.log(field);
            await axios.post("http://localhost:8081/fields/addField", field).then((response) => {
                console.log(response);
                alert("Field added successfully");
            }).catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });
    }
}
    return (
        <div className="adminPageUsers">
            <NavbarAdmin />
            <form className="register-form" >
                <div className="div-group">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" id="name" name="name" />
                    <input value={street} onChange={(e) => setStreet(e.target.value)} type="text" placeholder="Street" id="street" name="street" />
                    <div className="custom-select" value={beginHour} onChange={(e) => setBeginHour(e.target.value)}  >
                        <select className="selectSport">
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                        </select>
                    </div>
                    <div className="custom-select" value={finalHour} onChange={(e) => setFinalHour(e.target.value)}  >
                        <select className="selectSport">
                        <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                        </select>
                    </div>
                    <div className="custom-select" value={type} onChange={(e) => setType(e.target.value)}  >
                        <select className="selectSport">
                            <option value="Football">Football</option>
                            <option value="Basket">Basket</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Handball">Handball</option>
                        </select>
                    </div>
                </div>
                <button className='submit-btn' type='submit' onClick={handleClick}>Save</button>
            </form>
        </div>
    )
}
