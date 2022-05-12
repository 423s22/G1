import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function FilterTable({ slug, name }) {
  const router = useRouter();

  return (
    <form>
      <label htmlFor="name">Name</label>
      <ul className="grid gap-5 mt-3 sm:grid-cols-3">
        <li>
          <label className="flex items-center text-sm">
            <input
              name="tester"
              slug="sometitle"
              value="x-ray"
              type="checkbox"
              className="w-6 h-6 border-gray-200"
            />
            <span className="ml-3 font-medium">X-Ray</span>
          </label>
        </li>
      </ul>
      <Link href={`/products-table?name=${name}`}>
        <button type="submit">Register</button>
      </Link>
    </form>
  );
}

export default FilterTable;
