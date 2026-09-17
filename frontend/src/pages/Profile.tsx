import React, { useEffect, useState } from "react";
import type { User } from "./Register";

const Profile = (user: User) => {
  return (
    <div>
      <h1>Username: {user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
