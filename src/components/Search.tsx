import { Container, TextField } from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";

const styles = {
 input: {
  width: "80%",
  margin: "30px 0",
 },
};

class Search extends React.Component {
 state = {
  lists: [],
  searchResults: [],
 };

 async fetchPokemonData() {
  try {
   const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0"
   );
   const data = await response.json();
   this.setState((prevState) => {
    return {
     lists: (prevState = data.results),
    };
   });
  } catch (error) {
   console.log(error);
  }
 }

 componentDidMount(): void {
  this.fetchPokemonData();
 }

 handleRedirect = (event: any, value: any) => {
  localStorage.setItem("selected", value.name);
 };

 render() {
  const { classes } = this.props as any;

  return (
   <Container>
    {this.state.lists.length > 0 && (
     <Autocomplete
      id="combo-box-demo"
      options={this.state.lists}
      getOptionLabel={(option: { name: string }) => option.name}
      onChange={this.handleRedirect}
      renderOption={(option) => (
       <Link
        style={{ width: "100%", display: "block" }}
        to={`/${option.name}`}
       >
        {option.name}
       </Link>
      )}
      renderInput={(params) => (
       <TextField
        {...params}
        label="Search pokemon"
        variant="outlined"
        className={classes.input}
       />
      )}
     />
    )}
   </Container>
  );
 }
}

export default withStyles(styles)(Search);
