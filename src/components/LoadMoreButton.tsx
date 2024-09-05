import { Button, withStyles } from "@material-ui/core";
import React from "react";

const styles = {
 button: {
  margin: "50px 0",
 },
};

interface ILoadMoreButton {
 onClick: () => void;
}

class LoadMoreButton extends React.Component<
 React.ButtonHTMLAttributes<HTMLButtonElement>,
 ILoadMoreButton
> {
 render() {
  const { classes, onClick } = this.props as any;

  return (
   <div>
    <span>Text</span>
    <Button
     className={classes?.button}
     color="primary"
     variant="outlined"
     onClick={onClick}
     id="loadmore"
    >
     {this.props.children}
    </Button>
   </div>
  );
 }
}

export default withStyles(styles)(LoadMoreButton);
