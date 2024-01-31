// import { Badge } from "@material-ui/core";
import { Badge } from "@mui/material";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Search,ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
// font-size:14;
font-family: 'Urbanist', sans-serif;
font-weight: bold;
  ${mobile({ fontSize: "14px" ,marginLeft:"10px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
  
  
  ${mobile({ fontSize: "12px", marginLeft: "6px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>
            <MenuItem>HOME</MenuItem>
          </Link>
        </Left>
        <Center>
          <Logo>MEUSEC.</Logo>
        </Center>
        <Right>
        <Link to="/ProductList" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>
            <MenuItem>PRODUCTS</MenuItem>
          </Link>
        <Link to="/Register" style={{ textDecoration: 'none', fontWeight: 'bold' ,color: 'black' }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/Login" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/Cart" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>
            <MenuItem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
            </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
