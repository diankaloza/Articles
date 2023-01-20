import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export const BoxContainer = styled(Box)`
  width: 80%;
  height: 80%;
  margin-inline: auto;
  margin-top: -40px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px #000000;
  border-radius: 5px;
`;

export const CardWrapper = styled(Card)`
  max-width: 100%;
  border: 1px solid #eaeaea;
`;

export const CardImage = styled(CardMedia)`
  height: 400px;
  width: 100%;
`;

export const TypographyTitle = styled(Typography)`
  margin: 45px auto;
  text-align: center;
`;

export const ButtonText = styled(Button)`
  color: black;
  margin: 20px 120px;
`;

export const CardText = styled(CardContent)`
  padding: 20px 40px;
`;

export const SearchBlock = styled(Typography)`
  margin-inline: auto;
  max-width: 1000px;
  padding-left: 15px;
`;

export const ButtonIcon = styled(Button)`
  color: black;
`;

export const CardContainer = styled(Card)`
  height: 470px;
`;

export const CardMediaFile = styled(CardMedia)`
  height: 200px;
`;

export const LoadingArticle = styled(TypographyTitle)`
  text-align: center;
  font-size: 36px;
  font-weight: 400;
`;
export const SkeletonArticles = styled(Skeleton)`
  margin-top: 15px;
  border-radius: 5px;
`;
export const GridSkeleton = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;
export const SkeletonSearch = styled(Skeleton)`
  max-width: 1000px;
  margin-left: 120px;
`;
