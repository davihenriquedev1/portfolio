export const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="mt-10 text-center border-t border-white/20 py-3 text-sm text-accent/40 font-mono">
            &copy; {date} | Davi Henrique DEV
        </footer>
    )
}