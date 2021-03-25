import Card from "./components/Card";
import Notification from "./components/Notification";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import UseCallback from "./components/Hooks/UseCallback";

function App() {
  return (
    <div className="App">
      <Notification />
      <UseCallback />
      <Profile />
      <Nav />
      <Card />
    </div>
  );
}

export default App;
