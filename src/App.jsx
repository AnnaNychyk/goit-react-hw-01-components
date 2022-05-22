import Profile from "./components/Profile/Profile";
import user from "./components/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./components/data.json";

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
      <Statistics key={data.id} title="Upload stats" stats={data} />
      <Statistics stats={data} />;
    </div>
  );
}

export default App;
