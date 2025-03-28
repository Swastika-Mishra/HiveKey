import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import cat from "../../assets/animal-avatars/cat.png";
import dog from "../../assets/animal-avatars/dog.png";
import deer from "../../assets/animal-avatars/deer.png";
import hen from "../../assets/animal-avatars/hen.png";
import fox from "../../assets/animal-avatars/fox.png";
import cow from "../../assets/animal-avatars/cow.png";
import moneky from "../../assets/animal-avatars/monkey.png";
import panda from "../../assets/animal-avatars/panda.png";
import Navbar from "../navbar/Navbar";

const avatars = [cat, dog, hen, fox, cow, deer, moneky, panda];

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [nickname, setNickname] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  // Load saved data from localStorage
  useEffect(() => {
    if (user) {
      const savedNickname =
        localStorage.getItem(`nickname_${user.sub}`) || user.nickname || "";
      const savedAvatar =
        localStorage.getItem(`avatar_${user.sub}`) || avatars[0];
      setNickname(savedNickname);
      setSelectedAvatar(savedAvatar);
    }
  }, [user]);

  // Save data to localStorage
  const saveProfile = () => {
    localStorage.setItem(`nickname_${user.sub}`, nickname);
    localStorage.setItem(`avatar_${user.sub}`, selectedAvatar);
    alert("Profile updated!");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2>Profile</h2>
          <img
            src={selectedAvatar}
            alt="Profile"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
          <h3>{nickname}</h3>
          <br />
          <strong>Primary Email</strong>
          <p id="primary-email">{user.email}</p>

          {/* Nickname input */}
          <strong>Nickname</strong>
          <br />
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter new nickname"
            style={{ margin: "10px", padding: "5px" }}
          />

          {/* Avatar selection */}
          <div>
            <strong>Avatar</strong>
            <br />
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="Avatar"
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  margin: "5px",
                  cursor: "pointer",
                  border: selectedAvatar === avatar ? "2px solid blue" : "none",
                }}
                onClick={() => setSelectedAvatar(avatar)}
              />
            ))}
          </div>

          {/* Save Button */}
          <button
            onClick={saveProfile}
            style={{
              marginTop: "15px",
              padding: "8px 15px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            Save Profile
          </button>
        </div>
      </>
    )
  );
};

export default Profile;
