import Router from "./routes/Router.tsx";
// import  GlobalStyle  from './GlobalStyle.ㅅㄴ';
import { ThemeProvider } from "styled-components";
import theme from './style/theme';

type AppProps = {
	name: string;
}; 

function App (props: AppProps) :JSX.Element {
    return (
		<>
        	<ThemeProvider theme={theme}>
			{/* <GlobalStyle />  */}
				<Router />
			</ThemeProvider>

		</>
    )
}

export default App;

