import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-header">
        <img
          src={`https://i.pravatar.cc/150?img=${user.id}`}
          alt="avatar"
          className="avatar"
        />

        <div>
          <h2>{user.name}</h2>
          <p className="username">@{user.username}</p>
        </div>
      </div>

      {/* User Info Section */}
      <div className="card-section">
        <h3>User Information</h3>

        <div className="info-grid">
          <div>
            <label>Email</label>
            <p>{user.email}</p>
          </div>

          <div>
            <label>Phone</label>
            <p>{user.phone}</p>
          </div>

          <div>
            <label>Website</label>
            <p>{user.website}</p>
          </div>
        </div>
      </div>

      {/* Company Section */}
      <div className="card-section">
        <h3>Company Information</h3>

        <div className="info-grid">
          <div>
            <label>Company</label>
            <p>{user.company.name}</p>
          </div>

          <div>
            <label>Catch Phrase</label>
            <p>{user.company.catchPhrase}</p>
          </div>

          <div>
            <label>Business</label>
            <p>{user.company.bs}</p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="card-section">
        <h3>Address</h3>

        <div className="info-grid">
          <div>
            <label>Street</label>
            <p>{user.address.street}</p>
          </div>

          <div>
            <label>City</label>
            <p>{user.address.city}</p>
          </div>

          <div>
            <label>Zipcode</label>
            <p>{user.address.zipcode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;