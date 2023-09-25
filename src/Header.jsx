import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #f8f9fa;
  color: #333;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Arial', sans-serif;
  color: #007bff;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
    opacity: 1;
    margin: 0;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      a {
        text-decoration: none;
        color: #007bff;
        font-weight: bold;
        font-family: 'Arial', sans-serif;
        transition: color 0.3s ease;

        &:hover {
          text-decoration: underline;
          color: #0056b3;
        }
      }
    }
  }
`;

const ToggleButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  display: none;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: fixed;
  left: ${(props) => (props.showMenu ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: #f8f9fa;
  color: #007bff;
  padding: 20px;
  transition: left 0.3s ease;
  z-index: 100;
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.1) inset,
    0px 0px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: none;
  }
`;

const SidebarItem = styled.div`
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    font-size: 1.2rem;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

const ResponsiveHeader = () => {
  const [showMenu, setShowMenu] = useState(
    window.innerWidth > 768 ? true : false
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(true);
      }
      if (window.innerWidth < 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header>
        <LogoContainer>
          <ToggleButton onClick={toggleMenu}>
            {showMenu ? 'Hide Menu' : 'Show Menu'}
          </ToggleButton>
          <Logo>Logo</Logo>
          <Navigation>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Navigation>
          <ProfileIcon>U</ProfileIcon>
        </LogoContainer>
      </Header>
      <Sidebar showMenu={showMenu}>
        <SidebarItem>
          <a href="#">Home</a>
        </SidebarItem>
        <SidebarItem>
          <a href="#">About</a>
        </SidebarItem>
        <SidebarItem>
          <a href="#">Services</a>
        </SidebarItem>
        <SidebarItem>
          <a href="#">Contact</a>
        </SidebarItem>
      </Sidebar>
    </>
  );
};

export default ResponsiveHeader;
