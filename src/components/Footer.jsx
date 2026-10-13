export function Footer({ naslov }) {
  return (
    <footer>
      <nav aria-label="Navigacija u podnozju">
        <ul className="footer-linkovi">
          <li>
            <a href="#sadrzaj">{naslov}</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
