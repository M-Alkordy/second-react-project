import { useState, useEffect } from 'react'
function Form() {
  const [person, setPerson] = useState({});
  const [x, setX] = useState([]);

  useEffect(() => {show();}, [x]);

function log(){
  setX((prevx)=>(prevx)+1)
}

function show(){
  console.log(person)
  }

return (
  <>
    <div className="d-flex flex-column g-3 align-items-center justify-content-between">
      <div className="d-flex col-4 my-3">
          <label htmlFor="firstName" className="col-form-label fs-5">firstName:</label>
          <input type="text" id="firstName" className="form-control ms-4 my-1" name="firstName" defaultValue={person.firstName} onChange={(e) => setPerson({...person,firstName:e.target.value})}/>
      </div>
      <div className="d-flex col-4 my-3">
          <label htmlFor="lastName" className="col-form-label fs-5">lastName:</label>
          <input type="text" id="lastName" className="form-control ms-4 my-1" name="lastName" defaultValue={person.lastName} onChange={(e) => setPerson({...person,lastName:e.target.value})}/>
      </div>
      <div className="d-flex col-4 my-3">
          <label htmlFor="education" className="col-form-label fs-5">education:</label>
          <input type="text" id="education" className="form-control ms-4 my-1" name="education" defaultValue={person.education} onChange={(e) => setPerson({...person,education:e.target.value})}/>
      </div>
      <div className="d-flex col-4 my-3">
          <label htmlFor="email" className="col-form-label fs-5 pe-5">email:</label>
          <input type="email" id="email" className="form-control ms-4 my-1" name="email" defaultValue={person.email} onChange={(e) => setPerson({...person,email:e.target.value})}/>
      </div>
      <div className="d-flex col-4 my-3">
          <label htmlFor="phone" className="col-form-label fs-5 pe-5">phone:</label>
          <input type="tel" id="phone" className="form-control ms-4 my-1 " name="phone" defaultValue={person.phone} onChange={(e) => setPerson({...person,phone:e.target.value})}/>
      </div>
      <div className="d-flex col-4 my-3">
          <label htmlFor="experience" className="col-form-label fs-5">experience:</label>
          <input type="text" id="experience" className="form-control ms-4 my-1" name="experience" defaultValue={person.experience} onChange={(e) => setPerson({...person,experience:e.target.value})}/>
      </div>
      <div className="d-flex col-4 my-3">
          <label htmlFor="address" className="col-form-label fs-5 pe-4">address:</label>
          <input type="text" id="address" className="form-control ms-4 my-1" name="address" defaultValue={person.address} onChange={(e) => setPerson({...person,address:e.target.value})}/>
      </div>
      <button onClick={log} className="btn btn-primary col-4">Submit</button>
    </div>
  </>
);
}

export default Form;
