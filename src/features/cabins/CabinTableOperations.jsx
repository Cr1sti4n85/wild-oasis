import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name_asc", label: "By name [A-Z]" },
          { value: "name-desc", label: "By name [Z-A]" },
          { value: "regularPrice-asc", label: "By price (asc.)" },
          { value: "regularPrice-desc", label: "By price (desc.)" },
          { value: "maxCapacity-asc", label: "By capacity (asc.)" },
          { value: "maxCapacity-desc", label: "By capacity (desc.)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
