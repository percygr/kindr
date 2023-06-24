import "./Users.css";
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
              {userInfo.avatar_link ? (
                <img
                  src={`${process.env.REACT_APP_SUPABASE_IMAGE_URL}${userInfo.avatar_link}`}
                  className="profile-pic"
                  alt="Profile"
                />
              ) : (
                <img src={avatar} className="profile-pic" alt="Profile" />
              )}
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
