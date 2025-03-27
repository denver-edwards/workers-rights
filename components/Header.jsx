import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-center bg-red-300 py-2">
      <ul className="uppercase font-semibold flex gap-x-4 transition-all">
        <Link
          className="hover:text-red-600 rounded-full bg-white px-2 shadow-xl hover:shadow-sm"
          href="/get-involved"
        >
          Get Involved
        </Link>
        <Link
          className="hover:text-red-600 rounded-full bg-white px-2 shadow-xl hover:shadow-sm"
          href="/resources"
        >
          RESOURCES
        </Link>
        <Link
          className="hover:text-red-600 rounded-full bg-white px-2 shadow-xl hover:shadow-sm"
          href="/faq"
        >
          FAQ
        </Link>
      </ul>
    </nav>
  );
}
