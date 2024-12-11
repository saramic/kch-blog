import Link from "next/link";

export default function Footer() {
  return (
    <footer className="has-text-centered is-flex-align-items-flex-end mt-auto">
      <p>
        <strong>
          <Link href="/">KCH.app</Link>
        </strong>
      </p>
      <small>
        <span>Copyright @2024</span>
        <br />
      </small>
    </footer>
  );
}
