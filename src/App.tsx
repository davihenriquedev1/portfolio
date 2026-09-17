import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { AppRoutes } from "./routes/AppRoutes"

function App() {

	return (
		<>
			<Header />
			<main className="min-h-screen">
				<AppRoutes />
			</main>
			<Footer/>
		</>
	)
}

export default App
