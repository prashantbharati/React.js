import React from "react";
import "./Profile.css";
const Profile = (props) => {
  console.log(props);

  let islogin = false;
  return (
    <div style={{}}>
      <h1>Name= {props.name}</h1>
      <h2>Age= {props.age}</h2>
      <h2>Details= {props.detail}</h2>
      <h3>{props.children}</h3>
    </div>
  );
};

export default Profile;
