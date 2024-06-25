import { Categories } from "./Categories";

/**
 * @typedef {Object} Produit
 * @property {number} id - L'identifiant du Produit.
 * @property {string} name - Le nom du Produit.
 * @property {string} photo - La photo du produit.
 * @property {string} categorie - La categorie du produit.
 */

/**
 * Affiche une carte du Produit
 *
 * @param {Produit} produit
 * @returns {string} HTML string
 */
export const ProduitCard = (produit) => {
	return `
    <div>
      <a class="card-link" href="/produit?id=${produit.id}">
        <div class="card">
          <h5 class="card-title">${produit.name}</h5>
          <figure>
            <img class="card-img" src="${produit.photo}" alt="${produit.name}">
          </figure>
          <p class="prix">${produit.prix} €</p>
          ${Categories(produit.catégorie)}
        </div>
      </a>
    </div>
    `;
};
