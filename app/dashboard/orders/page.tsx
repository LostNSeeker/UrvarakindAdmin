import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import DashboardLayout from "@/components/dashboard-layout"
import { MoreHorizontal, Search, Filter } from "lucide-react"

export default function OrdersPage() {
  // Mock order data
  const orders = [
    {
      id: "ORD-001",
      customer: "John Smith",
      date: "2023-05-01",
      product: "Premium Nitrogen Fertilizer",
      amount: "$1,200.00",
      status: "Delivered",
    },
    {
      id: "ORD-002",
      customer: "Sarah Johnson",
      date: "2023-04-28",
      product: "Organic Plant Food",
      amount: "$850.00",
      status: "Processing",
    },
    {
      id: "ORD-003",
      customer: "Michael Brown",
      date: "2023-05-02",
      product: "Phosphate Blend",
      amount: "$2,340.00",
      status: "Shipped",
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      date: "2023-04-25",
      product: "Soil Enhancer",
      amount: "$560.00",
      status: "Processing",
    },
    {
      id: "ORD-005",
      customer: "Robert Wilson",
      date: "2023-04-30",
      product: "Complete Fertilizer Kit",
      amount: "$3,450.00",
      status: "Delivered",
    },
    {
      id: "ORD-006",
      customer: "Jennifer Taylor",
      date: "2023-04-22",
      product: "Organic Compost",
      amount: "$890.00",
      status: "Delivered",
    },
    {
      id: "ORD-007",
      customer: "David Martinez",
      date: "2023-05-03",
      product: "Potassium Fertilizer",
      amount: "$1,120.00",
      status: "Processing",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">Manage and track customer orders for your fertilizer products.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search orders..." className="w-full pl-8" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>Export</Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        order.status === "Delivered"
                          ? "border-green-200 bg-green-50 text-green-700"
                          : order.status === "Processing"
                            ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                            : "border-blue-200 bg-blue-50 text-blue-700"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{order.amount}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Update status</DropdownMenuItem>
                        <DropdownMenuItem>Print invoice</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Cancel order</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  )
}

