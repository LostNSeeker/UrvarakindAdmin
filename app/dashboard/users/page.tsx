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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import DashboardLayout from "@/components/dashboard-layout"
import { MoreHorizontal, Plus, Search } from "lucide-react"

export default function UsersPage() {
  // Mock user data
  const users = [
    {
      id: "1",
      name: "John Smith",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
      lastOrder: "2023-05-01",
      totalSpent: "$1,245.00",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Customer",
      status: "Active",
      lastOrder: "2023-04-28",
      totalSpent: "$3,612.00",
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Distributor",
      status: "Active",
      lastOrder: "2023-05-02",
      totalSpent: "$8,940.00",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Customer",
      status: "Inactive",
      lastOrder: "2023-03-15",
      totalSpent: "$560.00",
    },
    {
      id: "5",
      name: "Robert Wilson",
      email: "robert@example.com",
      role: "Distributor",
      status: "Active",
      lastOrder: "2023-04-30",
      totalSpent: "$12,450.00",
    },
    {
      id: "6",
      name: "Jennifer Taylor",
      email: "jennifer@example.com",
      role: "Customer",
      status: "Active",
      lastOrder: "2023-04-25",
      totalSpent: "$890.00",
    },
    {
      id: "7",
      name: "David Martinez",
      email: "david@example.com",
      role: "Customer",
      status: "Pending",
      lastOrder: "2023-05-03",
      totalSpent: "$0.00",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">Manage your customers and distributors.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search users..." className="w-full pl-8" />
          </div>
          <Button className="sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead className="text-right">Total Spent</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage
                          src={`/placeholder.svg?height=36&width=36&text=${user.name.charAt(0)}`}
                          alt={user.name}
                        />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-sm text-muted-foreground">{user.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.role === "Distributor"
                          ? "border-blue-200 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-gray-50 text-gray-700"
                      }
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.status === "Active"
                          ? "border-green-200 bg-green-50 text-green-700"
                          : user.status === "Inactive"
                            ? "border-red-200 bg-red-50 text-red-700"
                            : "border-yellow-200 bg-yellow-50 text-yellow-700"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastOrder}</TableCell>
                  <TableCell className="text-right font-medium">{user.totalSpent}</TableCell>
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
                        <DropdownMenuItem>Edit user</DropdownMenuItem>
                        <DropdownMenuItem>View orders</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete user</DropdownMenuItem>
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

