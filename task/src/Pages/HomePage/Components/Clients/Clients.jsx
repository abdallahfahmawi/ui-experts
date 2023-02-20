import React from "react";
import "./Clients.scss";

const Clients = (props) => {
  return (
    <div className="clientsHolder">
      <ul className="clientsList p-0">
        {props.clients.map((clients) => (
          <li key={clients.id}>
            <img src={clients.client} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
