// Archivo: services/product-service.js

// Fetch products
export const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) throw new Error('Error fetching products');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

// Add product
export const addProduct = async (product) => {
    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) throw new Error('Error adding product');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

// Update product
export const updateProduct = async (id, updatedProduct) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });
        if (!response.ok) throw new Error('Error updating product');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

// Delete product
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Error deleting product');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error; 
    }
};

