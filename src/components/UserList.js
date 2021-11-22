import React, { useEffect, useContext, useState } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
  const [texto, setTexto] = useState("");
  const [busqueda, setBusqueda] = useState(false);
  const { users, getUsers, getProfile, searchUsers } = useContext(UserContext);
  const { searchedUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  const handleInputChange = ({ target }) => {
    setTexto(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto == "") {
      console.log("Vacio");
    } else {
      setBusqueda(true);
      searchUsers(texto);
      console.log(searchedUsers);
    }
  };
  const cleaner = () => {
    setBusqueda(false);
    setTexto("");
  };

  return (
    <div className="list-group h-100">
      <div className=" mb-3 d-flex">
        <form onSubmit={handleSubmit} className=" input-group">
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Buscar Usuario"
            aria-label="Busqueda Usuario"
            onChange={handleInputChange}
            value={texto}
          ></input>
          <input
            type="submit"
            className="btn btn-outline-secondary"
            value="Buscar"
          />
        </form>
        <button
          className="btn btn-outline-secondary btn-danger"
          type="button"
          onClick={cleaner}
        >
          <span className="text-light">X</span>
        </button>
      </div>
      {busqueda ? (
        searchedUsers ? (
          <div className="card card-body text-center">
            <a
              className="list-group-item list-group-item-action"
              href="#!"
              onClick={() => {
                getProfile(searchedUsers.login);
              }}
            >
              <img
                src={searchedUsers.avatar_url}
                alt="SelectedProfile"
                className="card-img-top rounded-circle m-auto img-fluid"
                style={{ width: "180px" }}
              />
              <h1>{`${searchedUsers.login}`}</h1>
              <div className="text-start d-flex">
                <h5>ID: </h5>
                <p className="ms-2">{`${searchedUsers.id}`}</p>
              </div>
            </a>
          </div>
        ) : (
          <h1>No se han encontrado resultados</h1>
        )
      ) : (
        users.slice(0, 9).map((user) => (
          <a
            className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
            href="#!"
            key={user.id}
            onClick={() => {
              getProfile(user.login);
            }}
          >
            <img
              src={user.avatar_url}
              className="img-fluid mr-4 rounded-circle"
              width="90"
              alt="Avatar_IMG"
            />
            <div className="ms-3">
              <h2>{user.login}</h2>
              <p>{user.id}</p>
            </div>
          </a>
        ))
      )}
    </div>
  );
};

export default UserList;
