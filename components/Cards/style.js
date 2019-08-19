import styled from "styled-components";
import { Card, CardMedia } from "@material-ui/core";

export const StyledCard = styled(Card)`
  max-width: 355px;
  border-radius: 10px;

  .MuiPaper-rounded {
    border-radius: 20px !important;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  min-height: 200px;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
