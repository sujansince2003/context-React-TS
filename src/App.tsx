// import { Login, Profile } from "./Components";
// import UserContextProvider from "./Context/UserContextProvider";

import { useEffect, useState } from "react";
import { ThemeBtn, Card } from "./Components";
import { ThemeProvider } from "./Context/Theme";

function App() {
  const [Thememode, setThememode] = useState("light");

  function DarkTheme() {
    console.log("dark");
    setThememode("dark");
  }
  function LightTheme() {
    console.log("light");
    setThememode("light");
  }

  useEffect(() => {
    const themetoggle = document.querySelector("html")?.classList;
    themetoggle?.remove("dark", "light");
    themetoggle?.add(Thememode);
  }, [Thememode]);

  return (
    // <UserContextProvider>
    //   <div>heo</div>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>

    <ThemeProvider value={{ Thememode, DarkTheme, LightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
