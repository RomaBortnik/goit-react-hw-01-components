import userInfo from '../user.json';
import data from '../data.json';
import friendsList from '../friends.json';
import transactions from '../transactions.json';

import Profile from './Profile';
import Statistics from './Statistics';
import StatisticsList from './StatisticsList';
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
      <Statistics title="Upload stats">
        <StatisticsList data={data}></StatisticsList>
      </Statistics>
      <FriendList friends={friendsList}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};
