export default function Footer() {
  return (
    <footer className="mt-16 mb-6 text-center text-xs text-zinc-500">
      <p>© {new Date().getFullYear()} J.Muthukumar · Chennai, India · <a className="underline hover:text-zinc-300" href="mailto:jmuthukumar@example.com">jmuthukumar@example.com</a></p>
    </footer>
  );
}
