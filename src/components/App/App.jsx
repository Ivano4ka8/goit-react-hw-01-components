import Profile from '../Profile/Profile';
import userInfo from '../../jsons/user.json';

import statistics from '../../jsons/statistics.json';
import Statistics from '../Statistics/Statistics';

import FriendList from '../FriendList/FriendList';
import friends from '../../jsons/friends.json';

import TransactionHistory from '../Transaction/TransactionHistory';
import transactions from '../../jsons/transactions.json';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';

export const App = () => {
  return (
    <>
      <Container>
        <Section>
          <Profile userInfo={userInfo} stats={userInfo.stats} />
        </Section>
      </Container>

      <Section>
        <Container>
          <Statistics title="Upload Stats" stats={statistics} />
        </Container>
      </Section>

      <Section>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>
      <Section>
        <Container>
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </>
  );
};
