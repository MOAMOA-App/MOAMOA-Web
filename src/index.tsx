import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.css";
import { RecoilRoot } from "recoil";

import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import ReactQueryProvider from "./libary/reactQueryProvider";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <RecoilRoot>
        <ReactQueryProvider>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </AuthProvider>
        </ReactQueryProvider>
    </RecoilRoot>
);
