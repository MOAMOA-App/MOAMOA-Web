import Router from "./routes/Router";
// import  GlobalStyle  from './GlobalStyle.ㅅㄴ';

type AppProps = {
	name: string;
}; 

function App (props: AppProps) :JSX.Element {
    return (
		<>
			{/* <GlobalStyle />  */}
			<Router />
		</>
    )
}

export default App;

