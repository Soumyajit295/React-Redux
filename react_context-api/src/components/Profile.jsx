import React from "react";
import UserContext from "../context/Usercontext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div className="w-1/3 p-5 rounded-lg bg-slate-400 mx-auto mt-5">
      {user ? (
        <h1 className="text-center text-slate-950 text-xl">
          {`Welcome ${user.userName}`}
        </h1>
      ) : (
        <h1 className="text-center text-slate-950 text-xl">{`Please Login`}</h1>
      )}
    </div>
  );
}

export default Profile;
