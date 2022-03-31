import NextLink from "next/link";
import Link from "next/link";

import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Badge,
} from "@mui/material";
import {
    Search,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href="/" passHref>
                    <Link display="flex" alignItems="center">
                        <Typography variant="h6">Teslo Shop</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <NextLink href="/category/men" passHref>
                        <Link>
                            <Button>Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/women" passHref>
                        <Link>
                            <Button>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/kid" passHref>
                        <Link>
                            <Button>Niños</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button>Menú</Button>

                {/* todo flex */}
            </Toolbar>
        </AppBar>
    );
};