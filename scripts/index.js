function createCard(name, link, deleteCallback) {
  const cardTemplate = document.querySelector("#card-template");
  const cardElement = cardTemplate.content.firstElementChild.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  deleteButton.addEventListener("click", function () {
    deleteCallback(cardElement);
  });

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.parentElement.removeChild(cardElement);
}

const placesList = document.querySelector(".places__list");

initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData.name, cardData.link, deleteCard);
  placesList.appendChild(cardElement);
});
