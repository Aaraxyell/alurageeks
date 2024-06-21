import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../services/product-service.js";

const productContainer = document.querySelector('[data-product]');
const form = document.querySelector('[data-form]');

function createCard(id, name, price, image) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="img-container">
        <img src="${image}" alt="${name}">
    </div>
    <div class="card-container--info">
        <p>${name}</p>
        <div class="card-container--value">
            <p>$${price}</p>
            <button class="options-button" data-id="${id}">
                <img src="./assets/optionsIcon.svg" alt="Opciones">
            </button>
            <div class="options-menu" data-id="${id}">
                <button class="delete-button" data-id="${id}">Eliminar</button>
                <button class="edit-button" data-id="${id}">Editar</button>
            </div>
        </div>
    </div>
    `;
    return card;
}

const render = async () => {
    try {
        const products = await fetchProducts();
        productContainer.innerHTML = ''; // Limpiar contenedor antes de renderizar
        products.forEach(product => {
            productContainer.appendChild(createCard(product.id, product.name, product.price, product.image));
        });
    } catch (error) {
        console.log(error);
    }
};

render();

// Agregar Producto
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const image = document.querySelector('[data-image]').value;

    const newProduct = { name, price, image };

    try {
        const addedProduct = await addProduct(newProduct);
        productContainer.appendChild(createCard(addedProduct.id, addedProduct.name, addedProduct.price, addedProduct.image));
    } catch (error) {
        console.log(error);
    }
});

// Mostrar/Ocultar Opciones de Menú
productContainer.addEventListener('click', (event) => {
    if (event.target.closest('.options-button')) {
        const menu = event.target.closest('.card-container--value').querySelector('.options-menu');
        document.querySelectorAll('.options-menu').forEach(m => m !== menu && m.classList.remove('visible'));
        menu.classList.toggle('visible');
    }
});

// Editar y Eliminar Producto
productContainer.addEventListener('click', async (event) => {
    if (event.target.closest('.delete-button')) {
        const id = event.target.closest('.delete-button').dataset.id;
        try {
            await deleteProduct(id);
            event.target.closest('.card').remove();
        } catch (error) {
            console.log(error);
        }
    }

    if (event.target.closest('.edit-button')) {
        const id = event.target.closest('.edit-button').dataset.id;

        // Obtener los nuevos valores del usuario
        const newName = prompt('Ingrese el nuevo nombre:');
        const newPrice = prompt('Ingrese el nuevo precio:');
        const newImage = prompt('Ingrese la nueva URL de la imagen:');

        // Construir el objeto actualizado
        const updatedProduct = {
            name: newName,
            price: newPrice,
            image: newImage
        };

        try {
            // Actualizar el producto en la base de datos
            await updateProduct(id, updatedProduct);

            // Actualizar la interfaz de usuario sin recargar la página
            const cardToUpdate = productContainer.querySelector(`.card[data-id="${id}"]`);
            cardToUpdate.querySelector('.img-container img').src = newImage;
            cardToUpdate.querySelector('.img-container img').alt = newName;
            cardToUpdate.querySelector('.card-container--info p').textContent = newName;
            cardToUpdate.querySelector('.card-container--value p').textContent = `$${newPrice}`;
        } catch (error) {
            console.log(error);
        }
    }
});


// Ocultar menú al hacer clic fuera
document.addEventListener('click', (event) => {
    if (!event.target.closest('.options-button')) {
        document.querySelectorAll('.options-menu').forEach(menu => menu.classList.remove('visible'));
    }
});
