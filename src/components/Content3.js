import Calendar from "react-calendar";
import ReactSwitch from "react-switch";

import { createContext, useState } from "react";

export const ThemeContext = createContext("null");

function Content3() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="mode" id={theme}>
          <div className="switch">
            <label>
              {theme === "light" ? "Switch to dark" : "Switch to light"}
            </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </div>
      </ThemeContext.Provider>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} className="react-calendar" />
      </div>
    </div>
  );
}

export default Content3;
