import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const userContext = useContext(UserContext);
  const { user } = userContext || {};

  return (
    <div>
      Profile
      <h4>the username is {user?.username} </h4>
    </div>
  );
}

export default Profile;
