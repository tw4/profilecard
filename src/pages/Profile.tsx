import { Avatar, Box, Button, Text, Input, Link } from "../components";
import logo from "../assets/logos/profilecard.svg";
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

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<User>();
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [color, setColor] = useState<string>("#2596be");
  // link 1
  const [title1, setTitle1] = useState<string>("");
  const [link1, setlink1] = useState<string>("");
  // link 2
  const [title2, setTitle2] = useState<string>("");
  const [link2, setlink2] = useState<string>("");
  // link 3
  const [title3, setTitle3] = useState<string>("");
  const [link3, setlink3] = useState<string>("");
  // link 4
  const [title4, setTitle4] = useState<string>("");
  const [link4, setlink4] = useState<string>("");
  // link 5
  const [title5, setTitle5] = useState<string>("");
  const [link5, setlink5] = useState<string>("");

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
      setTitle1(doc.data().links[0].title);
      setlink1(doc.data().links[0].link);
      setTitle2(doc.data().links[1].title);
      setlink2(doc.data().links[1].link);
      setTitle3(doc.data().links[2].title);
      setlink3(doc.data().links[2].link);
      setlink4(doc.data().links[3].link);
      setTitle4(doc.data().links[3].title);
      setTitle5(doc.data().links[4].title);
      setlink5(doc.data().links[4].link);
    });
  };

  const logout = () => {
    signOut(auth);
    dispatch(clearUserState);
    navigate("/");
    sessionStorage.removeItem("user");
  };

  const usernameValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  const updateButton = async () => {
    setLoading(true);
    if (username === "") {
      alert("Username cannot be empty");
    }

    // refactor this code
    const tmp: Links[] = [];

    if (title1 === "") {
      setTitle1(link1);
    }

    if (title2 === "") {
      setTitle2(link2);
    }

    if (title3 === "") {
      setTitle3(link3);
    }

    if (title4 === "") {
      setTitle4(link4);
    }

    if (title5 === "") {
      setTitle5(link5);
    }

    tmp.push({ title: title1, link: link1 });
    tmp.push({ title: title2, link: link2 });
    tmp.push({ title: title3, link: link3 });
    tmp.push({ title: title4, link: link4 });
    tmp.push({ title: title5, link: link5 });

    setValidatorError(LinksValidator(tmp));

    const q = query(collection(db, "users"), where("userID", "==", user!.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });

    if (validatorError.length === 0) {
      try {
        await addDoc(collection(db, "users"), {
          userID: user?.uid,
          email: user?.email,
          name: name,
          username: username,
          description: description,
          color: color,
          photoURL: user?.photoURL,
          links: tmp,
        });
        navigate("/" + username);
      } catch (error) {
        alert(error);
      }
    }
    setLoading(false);
  };

  const nameValidator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (name.length > 29) {
      alert("name must be maximum length 30");
      await setName("");
    }
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
    if (e.target.value.length > 20) {
      alert("title must be maximum char 20");
      switch (e.target.name) {
        case "title1":
          await setTitle1("");
          break;
        case "title2":
          await setTitle2("");
          break;
        case "title3":
          await setTitle3("");
          break;
        case "title4":
          await setTitle4("");
          break;
        case "title5":
          await setTitle5("");
          break;
        default:
          break;
      }
    }

    switch (e.target.name) {
      case "title1":
        await setTitle1(e.target.value);
        break;
      case "title2":
        await setTitle2(e.target.value);
        break;
      case "title3":
        await setTitle3(e.target.value);
        break;
      case "title4":
        await setTitle4(e.target.value);
        break;
      case "title5":
        await setTitle5(e.target.value);
        break;
      default:
        break;
    }
  };

  const deleteButton = async () => {
    const q = query(collection(db, "users"), where("userID", "==", user!.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    logout();
  };

  return (
    <Box
      stack="VStack"
      css={{ backgroundColor: "#F8F8F8", alignItems: "center" }}>
      <Box
        stack="HStack"
        css={{
          backgroundColor: "#601CEE",
          justifyContent: "space-around",
          flexDirection: "row",
        }}>
        <Box
          stack="HStack"
          css={{ alignItems: "center", flexDirection: "row" }}>
          <img height="50px" src={logo} alt="logo" />
          <Text color="light" size="3" css={{ fontWeight: "bold" }}>
            Profile Card
          </Text>
        </Box>
        <Button
          onClick={() => logout()}
          size="4"
          css={{
            backgroundColor: "transparent",
            color: "White",
          }}>
          Logout
        </Button>
      </Box>
      <Box
        stack="VStack"
        css={{
          width: "50%",
          backgroundColor: "White",
          alignItems: "center",
          borderLeft: "2px solid #601CEE",
          borderRight: "2px solid #601CEE",
          paddingBottom: "5%",
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
          <Text css={{ width: "50%", textAlign: "left" }}>Name Surname</Text>
          <Input onChange={nameValidator} css={{ width: "50%" }} value={name} />
          <Text css={{ width: "50%", textAlign: "right", marginTop: "1%" }}>
            {name.length + "/30"}
          </Text>
          <Text css={{ width: "50%", textAlign: "left", marginTop: "5%" }}>
            username
          </Text>

          <Link
            href={"https://www.profilecard.co/" + username}
            css={{ textAlign: "left", width: "50%" }}>
            https://www.profilecard.co/{username}
          </Link>
          <Input
            onChange={usernameValidator}
            value={username}
            type="text"
            css={{ width: "50%" }}
          />
          <Text css={{ width: "50%", textAlign: "right", marginTop: "1%" }}>
            {username.length + "/20"}
          </Text>
          <Text css={{ width: "50%", marginTop: "5%", textAlign: "left" }}>
            Description
          </Text>

          <Input
            onChange={descriptionValidator}
            value={description}
            css={{ width: "50%" }}
          />
          <Text css={{ width: "50%", textAlign: "right", marginTop: "1%" }}>
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
            <SketchPicker color={color} onChange={(e) => setColor(e.hex)} />
          </Box>
          <Box
            stack="HStack"
            css={{
              width: "50%",
              justifyContent: "space-between",
              marginTop: "5%",
            }}>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Title</Text>
              <Input onChange={titlesValidator} value={title1} name="title1" />
              <Text css={{ textAlign: "right", marginTop: "2%" }}>
                {title1.length + "/20"}
              </Text>
            </Box>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Link</Text>
              <Input
                onChange={(e) => setlink1(e.target.value)}
                value={link1}
                type="url"
              />
            </Box>
          </Box>
          <Box
            stack="HStack"
            css={{
              width: "50%",
              justifyContent: "space-between",
              marginTop: "5%",
            }}>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Title</Text>
              <Input onChange={titlesValidator} value={title2} name="title2" />
              <Text css={{ textAlign: "right", margintTop: "2%" }}>
                {title2.length + "/20"}
              </Text>
            </Box>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Link</Text>
              <Input
                onChange={(e) => setlink2(e.target.value)}
                value={link2}
                type="url"
              />
            </Box>
          </Box>
          <Box
            stack="HStack"
            css={{
              width: "50%",
              justifyContent: "space-between",
              marginTop: "5%",
            }}>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Title</Text>
              <Input onChange={titlesValidator} value={title3} name="title3" />
              <Text css={{ textAlign: "right", marginTop: "2%" }}>
                {title3.length + "/20"}
              </Text>
            </Box>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Link</Text>
              <Input
                onChange={(e) => setlink3(e.target.value)}
                type="url"
                value={link3}
              />
            </Box>
          </Box>
          <Box
            stack="HStack"
            css={{
              width: "50%",
              justifyContent: "space-between",
              marginTop: "5%",
            }}>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Title</Text>
              <Input onChange={titlesValidator} value={title4} name="title4" />
              <Text css={{ textAlign: "right", marginTop: "2%" }}>
                {title4.length + "/20"}
              </Text>
            </Box>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Link</Text>
              <Input
                onChange={(e) => setlink4(e.target.value)}
                type="url"
                value={link4}
              />
            </Box>
          </Box>
          <Box
            stack="HStack"
            css={{
              width: "50%",
              justifyContent: "space-between",
              marginTop: "5%",
            }}>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Title</Text>
              <Input onChange={titlesValidator} value={title5} name="title5" />
              <Text css={{ textAlign: "right", marginTop: "2%" }}>
                {title5.length + "/20"}
              </Text>
            </Box>
            <Box stack="VStack" css={{ textAlign: "left" }}>
              <Text>Link</Text>
              <Input
                onChange={(e) => setlink5(e.target.value)}
                type="url"
                value={link5}
              />
            </Box>
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
            variant="twitter"
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
            disabled={loading}
            onClick={() => deleteButton()}
            variant="delete"
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
      <Box
        stack="HStack"
        css={{
          backgroundColor: "#601CEE",
          padding: "1%",
          justifyContent: "center",
          "@media screen and (max-width: 768px)": {
            flexDirection: "row",
            marginTop: "5%",
          },
        }}>
        <Text color="light">contact :</Text>
        <Link color="light" href="http://www.discord.profilecard.co/">
          Discord
        </Link>
      </Box>
    </Box>
  );
};

export default Profile;
