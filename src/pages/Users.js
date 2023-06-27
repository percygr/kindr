import "./Users.css";
import avatar from "../imgs/icons/user.png";

export default function UsersPage({ allUsers }) {
  // Check if allUsers is null or empty
  if (!allUsers || allUsers.length === 0) {
    return <div>Loading users...</div>;
  }
  // list all users with their profile picture
  return (
    <div className="users-container">
      <div className="users">
        <h1>Users</h1>
        <div className="users-list">
          {allUsers.map((user) => (
            <div className="user" key={user.id}>
              <p>{`${user.firstname} ${user.surname}`}</p>
              {user.avatar_link ? (
                <img
                  src={`${process.env.REACT_APP_SUPABASE_IMAGE_URL}${user.avatar_link}`}
                  alt="Profile"
                  className="user-profile-pic"
                />
              ) : (
                <img src={avatar} alt="Profile" className="user-profile-pic" />
              )}
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
