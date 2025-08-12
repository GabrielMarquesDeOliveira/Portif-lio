const placesData = [
  {
    title: "Apartamento Central",
    description: "Ótima localização e conforto.",
    address: "Rua Exemplo, 123",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Casa na Praia",
    description: "Vista incrível para o mar.",
    address: "Avenida Atlântica, 456",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Chalé na Montanha",
    description: "Perfeito para relaxar.",
    address: "Estrada da Serra, 789",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Estúdio Moderno",
    description: "Ideal para viagens de negócios.",
    address: "Rua das Flores, 101",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Cobertura Luxuosa",
    description: "Espaço amplo e moderno.",
    address: "Praça Central, 202",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Sítio da Rosa",
    description: "Natureza e tranquilidade.",
    address: "Estrada do Sítio, 303",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Cabana no Lago",
    description: "Desfrute da paz à beira d'água.",
    address: "Lago Azul, 404",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Loft Industrial",
    description: "Estilo urbano e moderno.",
    address: "Rua do Ferro, 505",
    image:
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80",
  },

  {
    title: "Casa na Árvore",
    description: "Aventura e contato com a natureza.",
    address: "Bosque Encantado, 606",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },

  {
    title: "Apartamento Submarino",
    description: "Durma com os peixes (literalmente).",
    address: "Fundo do Mar, 707",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
  },

  {
    title: "Castelo Medieval",
    description: "Viva como a realeza por um dia.",
    address: "Colina Real, 808",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPlace() {
  return placesData[getRandomInt(0, placesData.length - 1)];
}

function getRentedPlaces() {
  return JSON.parse(localStorage.getItem("rentedPlaces") || "[]");
}

function setRentedPlaces(rented) {
  JSON.stringify(rented);
}

function renderPlaces() {
  const placesDiv = document.querySelector(".places");
  placesDiv.innerHTML = "";
  const rented = getRentedPlaces();

  for (let i = 0; i < 5; i++) {
    const place = randomPlace();
    const placeId = place.title;
    const isRented = rented.includes(placeId);

    const card = document.createElement("div");
    card.className = "place-card";
    card.innerHTML = `
        <img src="${place.image}" alt="${place.title}" class="place-image" />
        <h3>${place.title}</h3>
        <p>${place.description}</p>
        <span class="address">${place.address}</span>
        <span class="price">R$ ${getRandomInt(100, 500)}/noite</span>
        <button ${isRented ? "disabled" : ""}>${
      isRented ? "Já alugado" : "Reservar"
    }</button>
      `;

    if (!isRented) {
      card.querySelector("button").addEventListener("click", function () {
        rented.push(placeId);
        setRentedPlaces(rented);
        renderPlaces();
      });
    }

    placesDiv.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", renderPlaces);
