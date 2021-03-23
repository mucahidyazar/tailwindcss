import Notification from "./components/Notification";
import Profile from "./components/Profile";
import UseCallback from "./components/Hooks/UseCallback";

function App() {
  return (
    <div className="App">
      <Notification />
      <UseCallback />
      <Profile />
    </div>
  );
}

export default App;
