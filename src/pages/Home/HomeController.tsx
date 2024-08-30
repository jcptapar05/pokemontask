import { Container, Grid } from "@material-ui/core";
import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { Loader, LoadMoreButton, OnView } from "../../components";

class HomeController extends React.Component {
 state = {
  lists: [],
  offset: 0,
  loading: true,
 };

 async fetchPokemonData() {
  this.setState((prevState: any) => ({
   loading: (prevState.loading = true),
  }));

  try {
   const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.state.offset}`
   );
   const data = await response.json();

   const tempData = await Promise.all(
    data.results.map(async (pokemon: any) => {
     const res = await fetch(pokemon.url);
     if (res.ok) {
      return res.json();
     }
    })
   );

   this.setState((prevState: any) => ({
    lists: [...prevState.lists, ...tempData],
    offset: prevState.offset + 20,
    loading: (prevState.loading = false),
   }));
  } catch (error) {
   console.log(error);
  }
 }

 seeMoreHandler = () => {
  this.fetchPokemonData();
 };

 componentDidMount(): void {
  this.fetchPokemonData();
 }

 render() {
  return (
   <Container maxWidth="xl">
    <Grid
     container
     spacing={2}
     justifyContent="center"
     alignItems="center"
    >
     {this.state.lists.length > 0 &&
      this.state.lists.map(
       (pokemon: { name: string; id: string; types: object }) => (
        <Grid
         item
         key={pokemon.name}
         lg={2}
         md={3}
         sm={4}
         xs={12}
        >
         <PokemonCard
          name={pokemon.name}
          id={pokemon.id}
          pokeTypes={pokemon.types}
         />
        </Grid>
       )
      )}
    </Grid>
    {!this.state.loading && <OnView onClick={this.seeMoreHandler}></OnView>}
    {this.state.loading && <Loader />}
    <div style={{ textAlign: "center" }}>
     <LoadMoreButton onClick={this.seeMoreHandler}>Load More</LoadMoreButton>
    </div>
   </Container>
  );
 }
}

export default HomeController;
