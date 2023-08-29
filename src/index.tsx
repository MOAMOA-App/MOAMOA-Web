import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false}/> */}
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </AuthProvider>
    </QueryClientProvider>
);
