import { Button } from "@/components/ui/button";

import { NextPage } from "next";

interface Props {
  table: any;
}

const Pagination: NextPage<Props> = ({ table }) => {
  return (
    <div className="flex items-center justify space-x-2 pt-4">
      <div className="flex gap-x-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
