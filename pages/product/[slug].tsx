import { NextPage, GetServerSideProps } from "next";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { IProduct } from "../../interfaces";
import { dbProducts } from "../../database/";

interface Props {
    product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
    // const router = useRouter()
    // const {products: product, isLoading} = useProducts(`/products/${router.query.slug}`)

    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideshow images={product.images} />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Box display="flex" flexDirection="column">
                        {/* Titulos */}
                        <Typography variant="h1" component="h1">
                            {product.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="h2"
                        >{`$${product.price}`}</Typography>

                        {/* Cantidad */}
                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2">
                                Cantidad
                            </Typography>
                            <ItemCounter />
                            <SizeSelector
                                selectedSize={product.sizes[0]}
                                sizes={product.sizes}
                            />
                        </Box>

                        {/* Agregar al carrito */}
                        <Button color="secondary" className="circular-btn">
                            Agregar al Carrito
                        </Button>

                        {/* <Chip label='No hay disponibles' color='error' variant='outlined'/> */}

                        {/* Description */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2">
                                Descripción
                            </Typography>
                            <Typography variant="body2">
                                {product.description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

// getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug = "" } = params as { slug: string };

    const product = await dbProducts.getProductBySlug(slug);

    if (!product) {
        return {
            destination: "/",
            permanent: false,
        };
    }

    return {
        props: {
            product,
        },
    };
};

export default ProductPage;
