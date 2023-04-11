import userInfo from '../data/user.json';
import data from '../data/data.json';
import friendsList from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  const { username, tag, location, avatar, stats } = userInfo;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friendsList}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};
