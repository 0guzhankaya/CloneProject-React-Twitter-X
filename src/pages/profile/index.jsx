import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { slug } = useParams();

  return (
    <div>
      <div>Profile Page - {slug}</div>
    </div>
  );
}

export default Profile;
