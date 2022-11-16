import React from "react";

const AddUser = (props) => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>

      <label htmlFor="userage">Age (Years)</label>
      <input id="userage" type="number"></input>
    </form>
  );
};

export default AddUser;
