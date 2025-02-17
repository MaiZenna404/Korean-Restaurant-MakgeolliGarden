import React, { useState } from "react";

function StaffPortal() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setLogin(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form method="post" action="C:\Users\MaiTHAN\OneDrive - SUP DE VINCI\Documents\Projet HTML CSS\Version React\korean-restaurant\Korean-Restaurant-MakgeolliGarden\PHP\loginAccess.php> " onSubmit={(event) => handleSubmit(event)}>
        <label for="login">Staff Login</label>
        <input
          type="text"
          id="login"
          name="login"
          value={login}
          onChange={(event) => handleChange(event)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Access</button>
      </form>
    </>
  );
}

export default StaffPortal;
