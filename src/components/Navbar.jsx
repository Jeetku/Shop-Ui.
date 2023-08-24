import React from "react";
import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
  `;

  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;
  const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  `;

  const Input = styled.input`
    border: none;
  `;
  const Logo = styled.h1`
    font-weight: bold;
  `;

  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  `;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input /> <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>Shop-UI.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register" style={{ textDecoration: "none" }}>
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" style={{ textDecoration: "none" }}>
              LOGIN
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
