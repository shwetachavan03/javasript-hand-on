
async function getProducts() {
    try {
        const productsData = await fetch("https://fakestoreapi.com/products");
        const products = await productsData.json();

        for (const product of products) {
            console.log(`${product.id}, ${product.title}`);
        }
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}

getProducts();