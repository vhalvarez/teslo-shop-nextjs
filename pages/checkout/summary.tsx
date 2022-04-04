import NextLink from "next/link";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { CartList, OrderSummary } from "../../components/cart/";
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    Link,
} from "@mui/material";

const SummaryPage = () => {
    return (
        <ShopLayout
            title="Resumen de orden"
            pageDescription="Resumen de la orden"
        >
            <Typography variant="h1" component="h1">
                Resumen de la Orden
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2">
                                Resumen (3 Productos)
                            </Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box
                                display={"flex"}
                                justifyContent="space-between"
                            >
                                <Typography variant="subtitle1">
                                    Direccion de entrega
                                </Typography>
                                <NextLink href="/checkout/address" passHref>
                                    <Link underline="always">Editar</Link>
                                </NextLink>
                            </Box>

                            <Typography>Victor Alvarez</Typography>
                            <Typography>Av. La Guairita</Typography>
                            <Typography>La Tahona, Caracas</Typography>
                            <Typography>Venezuela</Typography>
                            <Typography>+58 22222</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display={"flex"} justifyContent="end">
                                <NextLink href="/cart" passHref>
                                    <Link underline="always">Editar</Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button
                                    color="secondary"
                                    className="circular-btn"
                                    fullWidth
                                >
                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;
