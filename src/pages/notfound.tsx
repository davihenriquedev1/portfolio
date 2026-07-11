const Notfound = () => {
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-6">
            <section className="text-center space-y-6">
                <h1 className="text-7xl font-bold text-accent">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-text-heading">
                    Página não encontrada
                </h2>

                <p className="max-w-md text-text leading-relaxed">
                    A página que você está procurando não existe ou foi movida.
                    Verifique o endereço ou volte para a página inicial.
                </p>

                <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition hover:opacity-90"
                >
                    Voltar ao início
                </a>
            </section>
        </main>
    )
}

export default Notfound;