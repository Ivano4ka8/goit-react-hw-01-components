import Profile from './Profile/Profile';
import userInfo from '../jsons/user.json';

import statistics from '../jsons/statistics.json';
import Statistics from './Statistics/Statistics';

import FriendList from './FriendList/FriendList';
import friends from '../jsons/friends.json';

import TransactionHistory from './Transaction/TransactionHistory';
import transactions from '../jsons/transactions.json';

export const App = () => {
  return (
    <>
      <Profile userInfo={userInfo} stats={userInfo.stats} />
      <Statistics title="Upload Statistics" stats={statistics} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
