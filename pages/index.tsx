import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ShopLayout } from "../components/layouts";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <ShopLayout
            title={"Teslo - Shop"}
            pageDescription={"Encuentra los mejores prodductos de Teslo aqui"}
        >
            <Typography variant="h1" component="h1">
                Tienddad
            </Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                Todos los productos
            </Typography>
        </ShopLayout>
    );
};

export default Home;
