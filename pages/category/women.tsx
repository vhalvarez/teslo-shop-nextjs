import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { FullScreenLoading } from "../../components/ui";
import { ProductList } from "../../components/products/";
import { useProducts } from "../../hooks";

const Women = () => {
    const { products, isLoading } = useProducts("/products?gender=women");

    return (
        <ShopLayout
            title="Teslo-Shop - Mujeres"
            pageDescription="Encuentra los mejores prodductos de Teslo para mujeres aqui"
        >
            <Typography variant="h1" component="h1">
                Mujeres
            </Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                Productos para mujeres
            </Typography>

            {isLoading ? (
                <FullScreenLoading />
            ) : (
                <ProductList products={products} />
            )}
        </ShopLayout>
    );
};

export default Women;
