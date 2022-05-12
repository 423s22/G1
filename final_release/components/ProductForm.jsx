import Link from "next/link";
const ProductForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-screen bg-white divide-gray-100 rounded-lg shadow-md"
      role="dialog"
      aria-label="Filters"
    >
      <header className="p-6 text-center">
        <p className="text-lg font-medium">Filter Services</p>
      </header>

      <div className="grid place-items-center border-2 border-black overflow-y-auto h-80">
        <div className="mt-4 ">
          <div className="py-2">
            <fieldset>
              <legend className="text-xl font-medium">Service Type</legend>

              <ul className="grid gap-5 mt-3 sm:grid-cols-3">
                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-gray-200"
                      name=""
                    />
                    <span className="ml-3 font-medium">X-Ray</span>
                  </label>
                </li>

                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-gray-200"
                    />
                    <span className="ml-3 font-medium ">Ultrasound</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-gray-200"
                    />
                    <span className="ml-3 font-medium">MRI</span>
                  </label>
                </li>

                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-gray-200"
                    />
                    <span className="ml-3 font-medium ">Mammogram</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-gray-200"
                    />
                    <span className="ml-3 font-medium">PET Scan</span>
                  </label>
                </li>

                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-gray-200"
                    />
                    <span className="ml-3 font-medium ">CT Scan</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>

          <div className="py-5">
            <fieldset>
              <legend className="text-xl font-medium">Locations</legend>

              <ul className="grid grid-cols-1 gap-2 mt-6 sm:grid-cols-4">
                <li>
                  <label className="flex items-center text-sm">
                    <input
                      name="hospital"
                      type="checkbox"
                      className="w-6 h-6 border border-gray-200 rounded-md checked:bg-orange-500"
                    />
                    <span className="ml-3 font-medium">Bozeman</span>
                  </label>
                </li>

                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span className="ml-3 font-medium">Billings</span>
                  </label>
                </li>

                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span className="ml-3 font-medium">Butte</span>
                  </label>
                </li>

                <li>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span className="ml-3 font-medium">Ennis</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-between p-6 w-1/4 m-auto">
        <button
          className="text-sm font-medium text-gray-600 underline"
          type="button"
        >
          Clear all
        </button>
        <Link href={"/products-table"}>
          <button
            className="px-5 py-3 font-medium text-white bg-orange-500 rounded-lg"
            type="submit"
          >
            Show results
          </button>
        </Link>
      </footer>
    </form>
  );
};

export default ProductForm;
