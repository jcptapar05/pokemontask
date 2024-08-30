import React from "react";
import PokemonImg from "../../components/PokemonImg";
import { Container, Grid, Typography } from "@material-ui/core";
import PokemonTypes from "../../components/PokemonTypes";

export default class DetailsController extends React.Component {
 id = window.location.href.split("/")[3];

 state = {
  details: {} as any,
  loading: true,
 };

 async fetchPokemonData() {
  this.setState((prevState: any) => ({
   loading: (prevState.loading = true),
  }));

  try {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
   const data = await response.json();
   console.log(data);

   this.setState((prevState) => {
    return {
     details: (prevState = data),
     loading: (prevState = false),
    };
   });
  } catch (error) {
   console.log(error);
  }
 }

 componentDidMount(): void {
  this.fetchPokemonData();
 }

 componentDidUpdate(prevProps: any): void {
  const selected = localStorage.getItem("selected");
  if (selected && this.id !== selected) {
   window.location.reload();
   localStorage.removeItem("selected");
  }
 }

 render() {
  return (
   <Container>
    <Grid
     container
     spacing={10}
     direction="row"
     justifyContent="center"
     alignItems="center"
    >
     <Grid
      item
      md={6}
     >
      <PokemonImg
       maxSize={500}
       id={this.state.details.id}
      />
     </Grid>
     <Grid
      item
      md={6}
     >
      <Typography
       variant="h2"
       component="h2"
      >
       {this.state.details.name}
      </Typography>
      <Typography
       variant="body1"
       component="h5"
      >
       {this.state.details.name}
      </Typography>

      <Typography variant="h5">Ability</Typography>
      {!this.state.loading &&
       this.state.details.abilities.map((ability: any, index: any) => (
        <Typography
         key={index}
         variant="body1"
         component="h5"
        >
         {ability.ability.name}
        </Typography>
       ))}
      <Typography variant="h5">Types</Typography>
      {!this.state.loading &&
       this.state.details.types.map((poketype: any, index: any) => (
        <PokemonTypes
         key={index}
         types={poketype.type.name}
        />
       ))}
      <Typography variant="h5">Stats</Typography>
      {!this.state.loading &&
       this.state.details.stats.map((poketype: any, index: any) => (
        <PokemonTypes
         key={index}
         types={poketype.stat.name}
        />
       ))}
     </Grid>
    </Grid>
   </Container>
  );
 }
}
