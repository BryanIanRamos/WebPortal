import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
  console.log("Stored DATA", data);
  // console.log("Stored", data.user.first_name);
  const fullName = data.user.first_name + " " + data.user.last_name;
  const userID = data.user.user_id;

  localStorage.setItem(
    "user",
    JSON.stringify({
      id: userID,
      username: fullName,
      // first_name: data.user.first_name,
      // second_name: data.user.second_name,
      jwt: data.token,
      // console.log(id);
    })
  );

  // console.log("received value", data.user.username);
  // console.log("received token value", data.token);
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      navigate("/");
    }
  }, [navigate, jwt]);

  return <Component />;
};
