export const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="text-center border-t border-white/20 py-8 lg:py-10 text-sm text-accent/40 font-mono">
            &copy; {date} | Davi Henrique DEV
        </footer>
    )
}