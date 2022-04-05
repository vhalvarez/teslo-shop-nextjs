import NextLink from "next/link";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { CartList, OrderSummary } from "../../components/cart/";
import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    Link,
    Chip,
} from "@mui/material";
import {
    CreditCardOffOutlined,
    CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
    return (
        <ShopLayout
            title="Resumen de la orden 1231312"
            pageDescription="Resumen de la orden"
        >
            <Typography variant="h1" component="h1">
                Orden: ABC123
            </Typography>

            {/* <Chip
                sx={{ my: 2 }}
                label="Pendiente de pago"
                variant="outlined"
                color="error"
                icon={<CreditCardOffOutlined />}
            /> */}
            <Chip
                sx={{ my: 2 }}
                label="Orden ya fue pagada"
                variant="outlined"
                color="success"
                icon={<CreditScoreOutlined />}
            />

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
                                {/* Todo */}
                                <h1>Pagar</h1>

                                <Chip
                                    sx={{ my: 2 }}
                                    label="Orden ya fue pagada"
                                    variant="outlined"
                                    color="success"
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default OrderPage;
