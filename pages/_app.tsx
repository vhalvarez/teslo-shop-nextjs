import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes/";
import { SWRConfig } from "swr";
import { UIProvider, CartProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                // refreshInterval: 3000,
                fetcher: (resource, init) =>
                    fetch(resource, init).then((res) => res.json()),
            }}
        >
            <CartProvider>
                <UIProvider>
                    <ThemeProvider theme={lightTheme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </UIProvider>
            </CartProvider>
        </SWRConfig>
    );
}

export default MyApp;
