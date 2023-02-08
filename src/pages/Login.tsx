import { Box, Text, Link } from "../ui-library";
import { auth } from "../services/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { setUserState, UsersState } from "../features/user/UserSlice";
import { useEffect } from "react";
import { UserLoginValidator } from "../utils/Validator/UserValidator";
import Card from "../components/Card";
import profileCardPurview from "../assets/profileCardPurview.svg";
import MetaTag from "../components/MetaTag";
import Navbar from "../components/Navbar";
import HeaderSide from "../components/LandingPage/HeaderSide";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    UserLoginValidator(sessionStorage, navigate, "/profile");
  }, []);

  const login = async () => {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const user: UsersState = {
      uid: res.user.uid,
      displayName: res.user.displayName as string,
      email: res.user.email as string,
    };

    dispatch(setUserState(user));
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      })
    );
    navigate("/profile");
  };

  // components

  const Features = () => {
    return (
      <Box stack="VStack" css={{ marginTop: "10%", position: "relative" }}>
        <Box
          css={{
            position: "absolute",
            height: "50vh",
            borderRadius: "100%",
            width: "50vh",
            backgroundColor: "#7353E5",
            left: "30%",
            filter: "blur(100px)",
            zIndex: "0",
            "@media screen and (max-width: 768px)": {
              width: "0%",
              height: "0%",
            },
          }}></Box>
        <Box
          css={{
            position: "absolute",
            height: "50vh",
            borderRadius: "100%",
            width: "50vh",
            backgroundColor: "#CE4DA4",
            left: "40%",
            bottom: "5%",
            filter: "blur(100px)",
            zIndex: "0",
            "@media screen and (max-width: 768px)": {
              width: "0%",
              height: "0%",
            },
          }}></Box>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            zIndex: "1",
            "@media screen and (max-width: 768px)": {
              display: "flex",
              flexDirection: "column",
            },
          }}>
          <Card
            title="Personalized Profile Pages"
            content="Users can create their own profile pages, where they can share links to their social media accounts, websites, and other online profiles."
          />
          <Card
            title="Customizable Design"
            content="Users can customize the appearance of their profile pages with different colors"
          />
          <Card
            title="Sharing"
            content="Users can share their profile pages with others through a unique URL"
          />
          <Card
            title="Personal and Professional Information"
            content="Users can showcase their personal and professional information like bio, education, experience, and contact details on the profile."
          />
          <Card
            title="Social Media Integration"
            content="Users can connect their social media accounts like twitter, instagram, LinkedIn, etc to the profile."
          />
          <Card
            title="Mobile-Responsive Design"
            content="Profilecard.co is designed to be mobile-responsive, ensuring that it looks good and works well on a variety of mobile devices."
          />
        </Box>
      </Box>
    );
  };

  const Produckt = () => {
    return (
      <Box stack="HStack" css={{ marginTop: "10%", marginBottom: "10%" }}>
        <Box stack="VStack" css={{}}>
          <Text
            size="1"
            color="light"
            css={{ fontWeight: "bold", textAlign: "start" }}>
            Express yourself by changing your background color - Profilecard.co
          </Text>
          <Text
            color="grey"
            size="3"
            css={{ textAlign: "justify", marginRight: "5%" }}>
            Personalize your profile and achieve a professional look with
            Profilecard.co! Change your background color to whatever you like,
            and express yourself in the best way possible. Instead of boring
            white or black, choose a lively or sophisticated color to reflect
            yourself. Also, match your profile page with your background color
            to catch the attention of your visitors and achieve a professional
            look. With Profilecard.co, you can also group your social media
            accounts in one place for better communication and job search
            purposes. Sign up now and change your background color!
          </Text>
        </Box>
        <Box
          stack="VStack"
          css={{
            background: "linear-gradient(to right, #CE4DA4, #7353E5)",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
            "@media screen and (max-width: 768px)": {
              marginTop: "10%",
            },
          }}>
          <img
            src={profileCardPurview}
            width="50%"
            height="50%"
            alt="profile card purview"
          />
        </Box>
      </Box>
    );
  };

  const Footer = () => {
    return (
      <Box
        stack="HStack"
        css={{
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
    );
  };

  return (
    <Box
      stack="VStack"
      css={{
        backgroundColor: "#1D1A27",
        paddingLeft: "2.5%",
        paddingRight: "2.5%",
      }}>
      <MetaTag
        title="Create and share Profile Card Free - ProfileCard.co"
        content="Customizable profiles & easy social media link sharing on ProfileCard. Stand out and boost online presence. Sign up now!"
      />
      <Box stack="VStack">
        <Navbar />
        <Box stack="VStack" css={{ marginTop: "10%" }}>
          <HeaderSide login={() => login()} />
          <Features />
          <Produckt />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
