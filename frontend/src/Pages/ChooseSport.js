import * as React from 'react';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


const ChooseSport = (props) => {
    const [goToFootball, setGoToFootball] = useState(false)
    const [goToBascket, setGoToBascket] = useState(false)
    const [goToHandball, setGoToHandball] = useState(false)
    const [goToTennis, setGoToTennis] = useState(false)
    if (goToBascket) {
        return <Navigate to="/chooseSport/bascket" />
    }

    if (goToHandball) {
        return <Navigate to="/chooseSport/handball" />
    }

    if (goToTennis) {
        return <Navigate to="/chooseSport/tennis" />
    }

    if (goToFootball) {
        return <Navigate to="/chooseSport/football" />
    }
    return (
        < div className='ChooseSportClass' >
            
            <img className='footballImage' src="FootballImage.png" alt="" />
            <img className='bascketImage' src="BascketImage.png" alt="" />
            <img className='handballImage' src="HandballImage.png" alt="" />
            <img className='tennisImage' src="TennisImage.png" alt="" />
            <button className='footballButton' type='submit' onClick={() => setGoToFootball(true)  } >Football</button>
            <button className='bascketButton' type='submit' onClick={() => setGoToBascket(true)  }>Bascket</button>
            <button className='handballButton' type='submit' onClick={() => setGoToHandball(true)  }>Handaball</button>
            <button className='tennisButton' type='submit' onClick={() => setGoToTennis(true)  }>Tennis</button>
            

        </div >
    )
}

export default ChooseSport;