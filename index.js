const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const searchForm = document.getElementById("search-form");
const pizzaIdInput = document.getElementById("pizza-id");
const resultContainer = document.getElementById("result-container");

function buscarPizzaPorId(id) {
  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === id);

  return pizzaEncontrada;
}

function mostrarPizza(pizza) {
  resultContainer.innerHTML = `
        <div class="pizza-card">
            <h2>${pizza.nombre}</h2>
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <p>Precio: $${pizza.precio}</p>
        </div>
    `;
}

function mostrarError(mensaje) {
  resultContainer.innerHTML = `<p class="error-message">${mensaje}</p>`;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputNumero = parseInt(pizzaIdInput.value);

  if (isNaN(inputNumero)) {
    mostrarError("Por favor, ingrese un número válido.");
  } else {
    const pizzaEncontrada = buscarPizzaPorId(inputNumero);

    if (pizzaEncontrada) {
      mostrarPizza(pizzaEncontrada);

      localStorage.setItem(
        "ultimaPizzaBuscada",
        JSON.stringify(pizzaEncontrada)
      );
    } else {
      mostrarError("No se encontró una pizza con ese ID.");
    }
  }
});

window.addEventListener("load", () => {
  const ultimaPizzaBuscada = localStorage.getItem("ultimaPizzaBuscada");

  if (ultimaPizzaBuscada) {
    const pizzaGuardada = JSON.parse(ultimaPizzaBuscada);
    mostrarPizza(pizzaGuardada);
  }
});
