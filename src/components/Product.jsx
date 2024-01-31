
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { popularProducts } from "../data";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const HeartIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.isFavorite ? "white" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;  
  &:hover {
    // background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const NameDisplay = styled.div`
  color: black;
  position: absolute;
  font-size: 24px;
  bottom: 10px;
  right: 155px;
`;

const Product = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showName, setShowName] = useState(false);
  const handleSearchClick = () => {
    setShowName(!showName);
  };


  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <HeartIcon onClick={handleFavoriteClick} isFavorite={isFavorite}>
          {isFavorite ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
        </HeartIcon>
     
        <HeartIcon>
        <Link to = "/Product" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>
          <ShoppingCartOutlined />
        </Link>
        </HeartIcon>

        <HeartIcon onClick={handleSearchClick}>
          <SearchOutlined />
        </HeartIcon>
        {showName && <NameDisplay>{item.name}</NameDisplay>}
      </Info>
    </Container>
  );
};

export default Product;
