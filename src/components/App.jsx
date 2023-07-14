import Profile from './Profile/Profile';
import userInfo from '../jsons/user.json';
import statistics from '../jsons/statistics.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
    </>
  );
};
