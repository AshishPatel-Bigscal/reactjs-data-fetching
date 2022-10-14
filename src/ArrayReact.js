import { Fragment, useState } from "react";

const ArrayReact = () => {
  const [user, setuser] = useState({
    name: "ashish",
    phone : 1234
  });


  function addUser(){

  }
  function updateUser(){
    let userName = document.getElementById('userName').innerText;
    let userPhone = document.getElementById('userPhone').innerText;
    setuser({name : userName , phone : userPhone});
  }
  return (
    <>
    <Fragment>
      <label htmlFor="userName">User Name</label>
      <input type="text"
      id="userName"
      name="userName"
      value=""
     />
     <br />

     <label htmlFor="userPhone">User Phone</label>
      <input type="text"
      id="userName"
      name="userName"
     />
     <br />
      
    <button onClick={updateUser}>Update</button>
    <button onClick={addUser}>Add</button>
    
    </Fragment>
    <div>{user.name}</div>
    <div>{user.phone}</div>
      
    </>
  );
};

export default ArrayReact;
