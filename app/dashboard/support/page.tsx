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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { MoreHorizontal, Search, MessageSquare, Bot } from "lucide-react"

export default function SupportPage() {
  // Mock support ticket data
  const tickets = [
    {
      id: "TKT-001",
      customer: "John Smith",
      subject: "Product application question",
      date: "2023-05-01",
      status: "Open",
      priority: "Medium",
    },
    {
      id: "TKT-002",
      customer: "Sarah Johnson",
      subject: "Shipping delay inquiry",
      date: "2023-04-28",
      status: "In Progress",
      priority: "High",
    },
    {
      id: "TKT-003",
      customer: "Michael Brown",
      subject: "Product recommendation",
      date: "2023-04-25",
      status: "Resolved",
      priority: "Low",
    },
    {
      id: "TKT-004",
      customer: "Emily Davis",
      subject: "Order cancellation request",
      date: "2023-04-30",
      status: "Open",
      priority: "High",
    },
    {
      id: "TKT-005",
      customer: "Robert Wilson",
      subject: "Bulk order inquiry",
      date: "2023-04-29",
      status: "In Progress",
      priority: "Medium",
    },
  ]

  // Mock chatbot responses
  const chatbotResponses = [
    {
      id: "CHAT-001",
      query: "How do I apply nitrogen fertilizer?",
      response:
        "Apply nitrogen fertilizer evenly across the soil surface, avoiding direct contact with plant stems. Water thoroughly after application to help the nutrients reach the root zone.",
      category: "Product Usage",
      lastUpdated: "2023-04-15",
    },
    {
      id: "CHAT-002",
      query: "What's the best fertilizer for tomatoes?",
      response:
        "For tomatoes, we recommend our Balanced Vegetable Fertilizer with an NPK ratio of 5-10-10. This provides the phosphorus and potassium needed for fruit development while limiting nitrogen to prevent excessive foliage growth.",
      category: "Product Recommendation",
      lastUpdated: "2023-04-20",
    },
    {
      id: "CHAT-003",
      query: "How long does shipping take?",
      response:
        "Standard shipping typically takes 3-5 business days for domestic orders. International shipping times vary by location, typically 7-14 business days. Expedited shipping options are available at checkout for faster delivery.",
      category: "Shipping",
      lastUpdated: "2023-04-18",
    },
    {
      id: "CHAT-004",
      query: "Do you offer organic fertilizers?",
      response:
        "Yes, we offer a complete line of certified organic fertilizers. Our organic options include compost, bone meal, fish emulsion, and specialized blends for different plant types.",
      category: "Product Information",
      lastUpdated: "2023-04-22",
    },
    {
      id: "CHAT-005",
      query: "How do I track my order?",
      response:
        "You can track your order by logging into your account and viewing your order history. Alternatively, use the tracking number provided in your shipping confirmation email on our website or the carrier's site.",
      category: "Order Management",
      lastUpdated: "2023-04-25",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Support Management</h1>
          <p className="text-muted-foreground">Manage customer support tickets and chatbot responses.</p>
        </div>

        <Tabs defaultValue="tickets" className="space-y-4">
          <TabsList>
            <TabsTrigger value="tickets" className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" />
              Support Tickets
            </TabsTrigger>
            <TabsTrigger value="chatbot" className="flex items-center">
              <Bot className="mr-2 h-4 w-4" />
              Chatbot Responses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tickets" className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search tickets..." className="w-full pl-8" />
              </div>
              <Button>New Ticket</Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>{ticket.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ticket.status === "Open"
                              ? "border-red-200 bg-red-50 text-red-700"
                              : ticket.status === "In Progress"
                                ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                : "border-green-200 bg-green-50 text-green-700"
                          }
                        >
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ticket.priority === "High"
                              ? "border-red-200 bg-red-50 text-red-700"
                              : ticket.priority === "Medium"
                                ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                : "border-blue-200 bg-blue-50 text-blue-700"
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </TableCell>
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
                            <DropdownMenuItem>Assign ticket</DropdownMenuItem>
                            <DropdownMenuItem>Update status</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Close ticket</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="chatbot" className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search responses..." className="w-full pl-8" />
              </div>
              <Button>Add Response</Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Query</TableHead>
                    <TableHead>Response</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {chatbotResponses.map((response) => (
                    <TableRow key={response.id}>
                      <TableCell className="font-medium">{response.id}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{response.query}</TableCell>
                      <TableCell className="max-w-[300px] truncate">{response.response}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{response.category}</Badge>
                      </TableCell>
                      <TableCell>{response.lastUpdated}</TableCell>
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
                            <DropdownMenuItem>Edit response</DropdownMenuItem>
                            <DropdownMenuItem>View usage stats</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete response</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

