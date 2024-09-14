import React from "react";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { NextRouter, useRouter } from "next/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sora } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Lato } from "@next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";

import type { AppProps } from "next/app";
import { handleHTTPResponse } from "@/utilities/handle-http-error-response";

const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    style: "normal",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    style: "normal",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    style: "normal",
});

export default function App({ Component, pageProps }: AppProps) {
    const router: NextRouter = useRouter();

    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
                mutationCache: new MutationCache({
                    onError: async (error) => {
                        await handleHTTPResponse(error, router);
                    },
                }),
                queryCache: new QueryCache({
                    onError: async (error) => {
                        await handleHTTPResponse(error, router);
                    },
                }),
            })
    );

    return (
        <>
            <ToastContainer newestOnTop={true} pauseOnHover={false} autoClose={3000} />

            <QueryClientProvider client={queryClient}>
                <main className={`${sora.className} ${lato.className} ${poppins.className}`}>
                    <Component {...pageProps} />
                </main>

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}
