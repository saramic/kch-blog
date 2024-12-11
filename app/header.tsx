import Link from "next/link";

export default function Header() {
  return (
    <header className="has-text-centered">
      <section className="hero">
        <div className="hero-body">
        <Link href="/">
          <h2 className="title">Komendant Chorągwi Harcerzy</h2>
          </Link>
        </div>
      </section>
    </header>
  );
}
