import { Container } from "@material-ui/core";
import React from "react";
import DetailsController from "./DetailsController";

class DetailsView extends React.Component {
 render() {
  return (
   <Container>
    <DetailsController></DetailsController>
   </Container>
  );
 }
}

export default DetailsView;
