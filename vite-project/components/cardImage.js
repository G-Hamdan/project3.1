import "./cardImage.css"
/**
 * 
 * @param {string} cardImg
 * @returns
 */

export const cardImage = (cardImg) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card-image");

  const img = new Image();
  img.src =cardImg ||"../assets/dude.webp"

  img.setAttribute("alt", "avatar image");

  cardDiv.appendChild(img);

  return cardDiv;
};
