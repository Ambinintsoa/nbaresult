import React, { useState, useEffect } from 'react';
import JoueurService from '../services/JoueurService';
import '../css/bootstrap.min.css';
import '../css/stylelist.css';
function ListeJoueur() {
    const [joueurs, setJoueurs] = useState([]);

    // useEffect(() => {
    //     JoueurService.getJoueurs().then((res) => {
    //         setJoueurs(res.data);
    //     });
    // }, []); // The empty dependency array indicates that this effect should run only when the component mounts
    return (
  <body>
  

  <div class="content">
    
    <div class="container">
      <h2 class="mb-5"></h2>
      

      <div class="table-responsive">

        <table class="table table-striped custom-table">
          <thead>
            { 
            joueurs
            }
          {joueurs.map((joueur) => (
            <tr>
              
              <th scope="col">Order</th>
              <th scope="col">Player</th>
              <th scope="col">Team</th>
              <th scope="col">M</th>
              <th scope="col">MJ</th>
              <th scope="col">PPM</th>
              <th scope="col">RPM</th>
              <th scope="col">PDPM</th>
              <th scope="col">MPM</th>
              <th scope="col">EFF</th>
              <th scope="col">FG%</th>
              <th scope="col">3P%</th>
              <th scope="col">%LF</th>
              <th scope="col">DÉSACTIVÉ</th>
              <th scope="col">DÉF</th>
              <th scope="col">IPM</th>
              <th scope="col">CPM</th>
              <th scope="col">BP</th>
              <th scope="col">FP</th>
            </tr>
             ))}
          </thead>
          <tbody>
            <tr scope="row">   
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
                     <td>Option</td>
            
            </tr>
            
          </tbody>
        </table>
      </div>


    </div>

  </div>
  </body>
    );
}

export default ListeJoueur;