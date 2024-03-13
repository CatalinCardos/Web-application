import React from "react"
import { useEffect } from "react"
import FieldToSelect from "./FieldToSelect";




export default function NavbarFootball(props) {
   const [field, setField] = React.useState({
      loading: false,
      data: null,
      error: null,
   })
   const [program, setProgram] = React.useState({
      loading: false,
      data: null,
      error: null,
   })
   useEffect(() => {
      setField({ loading: true, data: null, error: null });
      fetch('http://localhost:8081/fields/getAllTennisFields')
         .then((res) => res.json())
         .then((data) => {
            setField({ loading: false, data: data, error: null });
         })
         .catch((err) => {
            setField({ loading: false, data: null, error: err.message });
         });
      setProgram({ loading: true, data: null, error: null });
      fetch('http://localhost:8081/program/getAllPrograms')
         .then((res) => res.json())
         .then((data) => {

            setProgram({ loading: false, data: data, error: null });
         })
         .catch((err) => {
            setProgram({ loading: false, data: null, error: err.message });
         });
   }, []);
   let content = [];
   let nameField = props.props;
   if (field.error || program.error) {
      content = <p>{field.error}</p>;
   }
   if (field.loading || program.loading) {
      content = <p>Loading...</p>;
   }
   if (field.data && program.data) {
      if (nameField !== "") {
         program.data.forEach(program => {
            if (field.data.find(field => field.id === program.idField && (field.name.toLowerCase().indexOf(nameField.toLowerCase()) !== -1))) {
               let theField = field.data.find(field => field.id === program.idField && (field.name.toLowerCase().indexOf(nameField.toLowerCase()) !== -1));
               let fieldData = {
                  id: program.id, idField: theField.id, name: theField.name, street: theField.street,
                  beginHour: program.beginHour, finalHour: program.finalHour, capacity: program.capacity,
                  date: program.date, type: theField.type
               };
               content.push(<FieldToSelect key={fieldData.id} fieldData={fieldData}></FieldToSelect>);
            }
         });
      } else {
         program.data.forEach(program => {
            if (field.data.find(field => field.id === program.idField)) {
               let theField = field.data.find(field => field.id === program.idField);
               let fieldData = {
                  id: program.id, idField: theField.id, name: theField.name, street: theField.street,
                  beginHour: program.beginHour, finalHour: program.finalHour, capacity: program.capacity,
                  date: program.date, type: theField.type
               };
               content.push(<FieldToSelect key={fieldData.id} fieldData={fieldData}></FieldToSelect>);
            }
         });
      }

   } else {
      content = <p>No fields found</p>
   }
   return (
      <div className="fieldSelectListClass">
         {content}
      </div>
   )
}



