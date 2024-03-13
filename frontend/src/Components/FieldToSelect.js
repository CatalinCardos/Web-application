import React from 'react';
import { Link } from "react-router-dom";

function FieldToSelect(props) {
    let totalCount = 0;
    let link = '';
    if (props.fieldData.type === 'Football') {
        totalCount = 14
        link = `/chooseSport/football/field/${props.fieldData.id}`
    }else if (props.fieldData.type === 'Basket') {
        totalCount = 10
        link = `/chooseSport/bascket/field/${props.fieldData.id}`
    }else if (props.fieldData.type === 'Tennis') {
        totalCount = 2
        link = `/chooseSport/tennis/field/${props.fieldData.id}`
    }else if (props.fieldData.type === 'Handball') {
        totalCount = 14
        link = `/chooseSport/handball/field/${props.fieldData.id}`
    }
    return (
        <div>
            <Link to={link}>
                <form className='fieldSelect'>
                    <p>Name: {props.fieldData.name}</p>
                    <p className='fieldSelectAdress'>Address: {props.fieldData.street}</p>
                    <p className='fieldSelectDateTime'>Time: {props.fieldData.beginHour}:00 - {props.fieldData.finalHour}:00</p>
                    <div className='fieldSelectCountAndDate'>
                    <p className='fieldSelectDate'>Date: {props.fieldData.date.substring(8,10)}-{props.fieldData.date.substring(5,7)}-{props.fieldData.date.substring(0,4)}</p>
                    <p className='fieldSelectCount'>Count: {props.fieldData.capacity}/{totalCount}</p>
                    </div>
                </form>
            </Link>
        </div >
    )
}

export default FieldToSelect;