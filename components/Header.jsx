import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-center bg-red-300 py-2">
      <ul className="uppercase font-semibold flex gap-x-4 ">
        <Link className="hover:text-red-600" href="/get-involved">
          Get Involved
        </Link>
        <Link className="hover:text-red-600" href="/resources">
          RESOURCES
        </Link>
        <Link className="hover:text-red-600" href="/faq">
          FAQ
        </Link>
      </ul>
    </nav>
  );
}
