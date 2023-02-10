import { Avatar, Box, Button, Text, Input, Link } from "../ui-library";
import { signOut, User } from "firebase/auth";
import { auth, db } from "../services/Firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { clearUserState } from "../features/user/UserSlice";
import React, { useEffect, useState } from "react";
import { UserLoginValidator } from "../utils/Validator/UserValidator";
import avatar from "../assets/logos/avatar.png";
import { LinksValidator } from "../utils/Validator/FormValidator";
import { Links } from "../types";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { SketchPicker } from "react-color";
import LinkInput from "../components/LinkInput";
import profileCard from "../assets/logos/profilecard.svg";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<User>();
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [color, setColor] = useState<string>("#2596be");
  const [links, setLinks] = useState<Links[]>([
    { link: "", title: "" },
    { link: "", title: "" },
    { link: "", title: "" },
    { link: "", title: "" },
    { link: "", title: "" },
  ]);

  const [validatorError, setValidatorError] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    UserLoginValidator(sessionStorage, navigate, "/profile");
    setUser(getUser());
  }, []);

  const getUser = () => {
    try {
      const user = JSON.parse(sessionStorage.getItem("user") || "");
      if (user !== "") {
        getUserFromDB(user);
        return user;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const getUserFromDB = async (user: User) => {
    const q = query(collection(db, "users"), where("userID", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUsername(doc.data().username);
      setName(doc.data().name);
      setDescription(doc.data().description);
      setColor(doc.data().color);
      setLinks(doc.data().links);
    });
  };

  const logout = () => {
    signOut(auth);
    dispatch(clearUserState);
    navigate("/");
    sessionStorage.removeItem("user");
  };

  const usernameValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (e.target.value.length > 20) {
      alert("username must be maximum length 20");
      await setUsername("");
    }

    e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    await setUsername(e.target.value);
    const q = query(
      collection(db, "users"),
      where("username", "==", e.target.value)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (
        doc.data().username === e.target.value &&
        doc.data().userID !== user?.uid
      ) {
        alert("Username already exists");
        setUsername("");
      } else {
        setUsername(e.target.value);
      }
    });
    setLoading(false);
  };

  const updateButton = async () => {
    setLoading(true);
    if (username === "") {
      alert("Username cannot be empty");
    }

    const validatorErr: string[] = LinksValidator(links);
    setValidatorError(LinksValidator(links));

    if (validatorErr.length === 0) {
      try {
        const q = query(
          collection(db, "users"),
          where("userID", "==", user!.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref);
        });
        await addDoc(collection(db, "users"), {
          userID: user?.uid,
          email: user?.email,
          name: name,
          username: username,
          description: description,
          color: color,
          photoURL: user?.photoURL,
          links: links,
        });
        navigate("/" + username);
      } catch (error) {
        alert(error);
      }
    }
    setLoading(false);
  };

  const nameValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setName(e.target.value);
    if (name.length > 29) {
      alert("name must be maximum length 30");
      await setName("");
    }
    setLoading(false);
  };

  const descriptionValidator = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
    if (description.length > 199) {
      alert("name must be maximum length 200");
      await setDescription("");
    }
  };

  const titlesValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.name.replace("title", ""));
    if (e.target.value.length > 20) {
      alert("title must be maximum char 20");
      const newLinks = [...links];
      newLinks[index].title = "";
      setLinks(newLinks);
    } else {
      const newLinks = [...links];
      newLinks[index].title = e.target.value;
      setLinks(newLinks);
    }
  };

  const linksValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.name.replace("link", ""));
    const newLinks = [...links];
    newLinks[index].link = e.target.value;
    setLinks(newLinks);
  };

  const deleteButton = async () => {
    const q = query(collection(db, "users"), where("userID", "==", user!.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    logout();
  };

  // components
  const Nav = () => {
    return (
      <Box
        stack="HStack"
        css={{
          alignItems: "center",
          justifyContent: "space-between",
          "@media screen and (max-width: 768px)": {
            flexDirection: "row",
          },
        }}>
        <Box
          stack="HStack"
          css={{
            "@media screen and (max-width: 768px)": {
              flexDirection: "row",
            },
          }}>
          <img src={profileCard} height="30px" alt="profilecard logo" />
          <Text color="light" size="4" css={{ fontWeight: "bold" }}>
            Profile Card
          </Text>
        </Box>
        <Button
          onClick={() => logout()}
          size="4"
          css={{
            width: "10%",
            padding: "0.5%",
            "@media screen and (max-width: 768px)": {
              width: "50%",
            },
          }}>
          Logout
        </Button>
      </Box>
    );
  };

  return (
    <Box
      stack="VStack"
      css={{
        backgroundColor: "#1D1A27",
        alignItems: "center",
        paddingLeft: "2.5%",
        paddingRight: "2.5%",
      }}>
      <Nav />
      <Box
        stack="VStack"
        css={{
          width: "50%",
          backgroundcolor: "#302C3F",
          alignItems: "center",
          paddingBottom: "5%",
          color: "white",
          "@media screen and (max-width: 768px)": {
            width: "100%",
          },
        }}>
        <Avatar
          src={user?.photoURL || avatar}
          css={{
            height: "50px",
            width: "50px",
            marginTop: "2.5%",
          }}
        />
        <Box stack="VStack" css={{ alignItems: "center", marginTop: "5%" }}>
          <Text
            css={{
              textAlign: "left",
              width: "50%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}>
            Name Surname
          </Text>
          <Input
            onChange={nameValidator}
            css={{
              width: "50%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}
            value={name}
          />
          <Text
            css={{
              width: "50%",
              textAlign: "right",
              marginTop: "1%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}>
            {name.length + "/30"}
          </Text>
          <Text
            css={{
              width: "50%",
              textAlign: "left",
              marginTop: "5%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}>
            Username
          </Text>

          <Link
            href={"https://www.profilecard.co/" + username}
            css={{
              textAlign: "left",
              width: "50%",
              color: "White",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}>
            https://www.profilecard.co/{username}
          </Link>
          <Input
            onChange={usernameValidator}
            value={username}
            type="text"
            css={{
              width: "50%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}
          />
          <Text
            css={{
              width: "50%",
              textAlign: "right",
              marginTop: "1%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}>
            {username.length + "/20"}
          </Text>
          <Text
            css={{
              width: "50%",
              marginTop: "5%",
              textAlign: "left",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}>
            Description
          </Text>

          <Input
            onChange={descriptionValidator}
            value={description}
            css={{
              width: "50%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}
          />
          <Text
            css={{
              width: "50%",
              textAlign: "right",
              marginTop: "1%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}>
            {description.length + "/200"}
          </Text>
          <Box
            stack="VStack"
            css={{
              alignItems: "center",
              width: "50%",
              marginTop: "5%",
            }}>
            <Text>Profile color picker</Text>
            <SketchPicker
              disableAlpha={true}
              color={color}
              onChange={(e) => setColor(e.hex)}
              styles={{
                default: {
                  picker: {
                    backgroundColor: "#302C3F",
                  },
                },
              }}
            />
          </Box>
          <Box
            css={{
              marginTop: "5%",
              width: "50%",
              "@media screen and (max-width: 768px)": {
                width: "90%",
              },
            }}>
            {links.map((val, index) => {
              return (
                <LinkInput
                  key={index}
                  link={val.link}
                  linkName={"link" + index}
                  title={val.title}
                  titleName={"title" + index}
                  linkOnChange={linksValidator}
                  titleOnChange={titlesValidator}
                />
              );
            })}
          </Box>
          <Box css={{ marginTop: "2%" }}>
            {validatorError
              ? validatorError.map((err) => {
                  return <Text validator="error">{err}</Text>;
                })
              : null}
          </Box>
          <Button
            disabled={loading}
            onClick={() => updateButton()}
            size="4"
            css={{
              width: "50%",
              marginTop: "5%",
              "@media screen and (max-width: 768px)": {
                width: "80%",
              },
            }}>
            Save
          </Button>
          <Button
            variant="delete"
            disabled={loading}
            onClick={() => deleteButton()}
            size="4"
            css={{
              width: "50%",
              marginTop: "5%",
              "@media screen and (max-width: 768px)": {
                width: "80%",
              },
            }}>
            Delete
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Profile;
