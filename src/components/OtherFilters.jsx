import Separator from "./Separator";

const OtherFilters = ({ handleInput, otherFilters }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <h4>Other Filters</h4>
      <input
        type="text"
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mb-5"
        value={otherFilters}
        name="otherFilters"
        placeholder="Filter by title and description"
        onChange={(e) => handleInput(e)}
      />
      <Separator />
    </div>
  );
};

export default OtherFilters;
