//                 //---------------jsx---------------::
//                 //---------Afficher les variables ---------
// //Pour utiliser une expression (opération ou variable) dans JSX, il suffit d'ajouter des accolades {}.
// import React from "react";

let nom = "borak";
let prenom = "najwa";
let age = "22";
let input = (<input type="input" placeholder="enter yout name "></input>);

function Afficher() {
  return (
    <div>
      <p>Nom: {nom}</p>
      <p>Prénom: {prenom}</p>
      <p>Âge: {age}</p>
      {input}

      
    </div>
  );
}

export default Afficher;
