import Profile from "./components/Profile";
import user from "./user.json";

function App() {
  return (
    <div>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
