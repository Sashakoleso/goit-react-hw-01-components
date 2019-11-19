import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import stats from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './components/FriendList/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './components/TransactionHistory/transactions.json';
import TransactionsHistory from './components/TransactionHistory/TransactionHistory';

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="File upload" stats={stats} />
    <FriendList friends={friends} />
    <TransactionsHistory items={transactions} />
  </div>
);

export default App;
