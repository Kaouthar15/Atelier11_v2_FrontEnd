import React, { useState } from "react";
import User from "./User";
import "../App.css";

export default function ListUser({ user }) {
  const [acId, setacId] = useState(0);
  return (
    <div className="ListUser">
      {user.map((e) => (
        <div key={e.id}>
          {console.log(acId)}
          <User
            key={e.id}
            user={e}
            activeId={acId}
            idClick={(e) => setacId(e)}
          />
        </div>
      ))}
    </div>
  );
}
