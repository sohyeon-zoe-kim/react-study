import styled from "styled-components";
import { pokemonImg } from "../constants/url";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase";

const NavBar = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else if (user && pathname === "/login") {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [pathname]);

  const handleAuth = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };

  const listener = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <NavWrapper $show={show}>
      <Logo>
        <Image
          alt="Poke Logo"
          src={`${pokemonImg}/25.png`}
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Logo>
      {pathname === "/login" && <Login onClick={handleAuth}>로그인</Login>}
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  background-color: ${(props) => (props.$show ? "pink" : "transparent")};
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 100;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
`;

const Logo = styled.a`
  padding: 0;
  width: 50px;
  margin-top: 4px;
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.55px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  color: white;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default NavBar;
