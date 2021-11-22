import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar_url}
            alt="SelectedProfile"
            className="card-img-top rounded-circle m-auto img-fluid"
            style={{ width: "180px" }}
          />
          <h1>{`${selectedUser.login}`}</h1>
          <div className="text-start d-flex">
            <h5>ID: </h5>
            <p className="ms-2">{`${selectedUser.id}`}</p>
          </div>
          <div className="text-start d-flex">
            <h5>Score: </h5>
            <p className="ms-2">{`${selectedUser.score}`}</p>
          </div>
          <div className="text-start d-flex">
            <h5>Node ID: </h5>

            <p className="ms-2">{`${selectedUser.node_id}`}</p>
          </div>
          <div className="text-start d-flex">
            <h5>URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Followers URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.followers_url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Following URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.following_url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Gists URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.gists_url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Starred URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.starred_url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Subscriptions URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.subscriptions_url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Organizations URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.organizations_url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Repos URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.repos_url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Events URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.events_url}`}
            </a>
          </div>
          <div className="text-start">
            <h5>Received Events URL: </h5>
            <a
              className="ms-2"
              href={selectedUser.url}
              target="_blank"
              rel="noreferrer"
            >
              {`${selectedUser.received_events_url}`}
            </a>
          </div>
        </div>
      ) : (
        <h2>No user selected</h2>
      )}
    </>
  );
};

export default Profile;
