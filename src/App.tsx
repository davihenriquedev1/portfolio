import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { AppRoutes } from "./routes/AppRoutes"

function App() {

	return (
		<div className="mx-auto max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-4 lg:px-8">
			<Header />
				<main className="min-h-screen">
					<AppRoutes />
				</main>
            <Footer/>
        </div>
	)
}

export default App
