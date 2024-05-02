export const PackageVersion = ({ pjson }) => {
  return (
    <strong className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 mt-3 text-sm font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
      Version: {pjson.version}
    </strong>
  );
};
