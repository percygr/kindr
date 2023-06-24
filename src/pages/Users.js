import "./Users.css";
import avatar from "../imgs/icons/user.png";

export default function UsersPage({ allUsers }) {
  // list all users with their profile picture
  return (
    <div className="users-container">
      <div className="users">
        <h1>Users</h1>
        <div className="users-list">
          {allUsers.map((user) => (
            <div className="user">
              <p>{`${user.firstname} ${user.surname}`}</p>
              {user.avatar_link ? (
                <img
                  src={`${process.env.REACT_APP_SUPABASE_IMAGE_URL}${user.avatar_link}`}
                  alt="Profile"
                />
              ) : (
                <img src={avatar} alt="Profile" />
              )}
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
