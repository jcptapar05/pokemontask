import {
 Button,
 Card,
 CardActionArea,
 CardActions,
 CardContent,
 Typography,
 withStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import PokemonImg from "./PokemonImg";
import PokemonTypes from "./PokemonTypes";

const styles = {
 media: {
  height: 140,
  width: 140,
  margin: "10px auto",
 },
 pokemonId: {
  margin: "10px 0",
 },
};

interface IPokemon {
 classes?: any;
 id: any;
 name: string;
 pokeTypes?: any[];
}

class PokemonCard extends React.Component<IPokemon> {
 render() {
  const { classes, name, id, pokeTypes } = this.props;

  return (
   <Link to={`/pokemon/${name}`}>
    <Card style={{ textAlign: "center", padding: "10px" }}>
     <CardActionArea>
      <Typography
       variant="body2"
       color="textSecondary"
       component="p"
       className={classes?.pokemonId}
      >
       # {id}
      </Typography>
      <PokemonImg
       maxSize={100}
       id={id}
      />
      <CardContent>
       <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="pokemon-name"
        style={{ textTransform: "capitalize" }}
       >
        {name}
       </Typography>
      </CardContent>
      <div
       style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px",
       }}
      >
       {pokeTypes?.map((type: any, index: any) => (
        <PokemonTypes
         key={index}
         types={type.type.name}
        />
       ))}
      </div>
     </CardActionArea>
    </Card>
   </Link>
  );
 }
}

// export default withStyles(styles)(PokemonCard);
export default PokemonCard;
