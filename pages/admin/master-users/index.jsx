import Layout from "../layout";
import { Button } from "@/components/ui/button";
import { HiOutlinePlusCircle } from "react-icons/hi";

export default function MasterUsers() {
  return(
    <Layout title="Master User">
      <div className="space-between flex items-center">
        Filter Area
        <div className="ml-auto mr-4">
          <Button className="gap-1">
            <HiOutlinePlusCircle size={20} />
            Add User
          </Button>
        </div>
      </div>
      <div>
      {/* <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
      </div>
    </Layout>
  )
}