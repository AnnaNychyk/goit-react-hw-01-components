import Profile from "./components/Profile/Profile";
import user from "./components/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./components/data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/transactions.json";

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
