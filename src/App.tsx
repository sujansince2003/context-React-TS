import { Login, Profile } from "./Components";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div>heo</div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
