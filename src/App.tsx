import { Header } from "./components/header"

function App() {

	return (
		<div className="mx-auto max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-4 lg:px-8">
			<Header />
			<main>
				<section id="center">
				</section>
				<div className="ticks"></div>
				<section id="next-steps">
				</section>
				<div className="ticks"></div>
				<section id="spacer"></section>
			</main>
		</div>
	)
}

export default App
