import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <div className="user-info">
    <p>{user.name}</p>
    <p>{user.email}</p>
  </div>
);
