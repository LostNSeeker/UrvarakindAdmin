import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { ArrowDown, ArrowUp, DollarSign, Users, ShoppingCart, TrendingUp, BarChart3, Calendar } from "lucide-react"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your fertilizer business.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 flex items-center">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  +20.1%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 flex items-center">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  +12.2%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 flex items-center">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  +8.4%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500 flex items-center">
                  <ArrowDown className="mr-1 h-4 w-4" />
                  -1.1%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Monthly sales performance for your fertilizer products.</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full">
                    {/* This would be a chart in a real app */}
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                      <BarChart3 className="h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">Sales Chart</h3>
                      <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        Sales data visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest orders from your customers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: "ORD-001",
                        customer: "John Smith",
                        product: "Premium Nitrogen Fertilizer",
                        amount: "$1,200.00",
                        status: "Delivered",
                      },
                      {
                        id: "ORD-002",
                        customer: "Sarah Johnson",
                        product: "Organic Plant Food",
                        amount: "$850.00",
                        status: "Processing",
                      },
                      {
                        id: "ORD-003",
                        customer: "Michael Brown",
                        product: "Phosphate Blend",
                        amount: "$2,340.00",
                        status: "Shipped",
                      },
                      {
                        id: "ORD-004",
                        customer: "Emily Davis",
                        product: "Soil Enhancer",
                        amount: "$560.00",
                        status: "Processing",
                      },
                    ].map((order) => (
                      <div key={order.id} className="flex items-center justify-between rounded-md border p-3">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{order.customer}</p>
                          <p className="text-xs text-muted-foreground">{order.product}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{order.amount}</p>
                          <p className="text-xs text-muted-foreground">{order.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>Your best-selling fertilizer products.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Premium Nitrogen Fertilizer",
                        sales: "$24,500",
                        growth: "+12%",
                      },
                      {
                        name: "Organic Plant Food",
                        sales: "$18,300",
                        growth: "+23%",
                      },
                      {
                        name: "Phosphate Blend",
                        sales: "$16,200",
                        growth: "+7%",
                      },
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between rounded-md border p-3">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">Sales: {product.sales}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-500">{product.growth}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Customer Support</CardTitle>
                  <CardDescription>Recent support tickets from customers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Product application question",
                        customer: "John Smith",
                        time: "2 hours ago",
                        status: "Open",
                      },
                      {
                        title: "Shipping delay inquiry",
                        customer: "Sarah Johnson",
                        time: "5 hours ago",
                        status: "In Progress",
                      },
                      {
                        title: "Product recommendation",
                        customer: "Michael Brown",
                        time: "1 day ago",
                        status: "Resolved",
                      },
                    ].map((ticket, index) => (
                      <div key={index} className="flex items-center justify-between rounded-md border p-3">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{ticket.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {ticket.customer} · {ticket.time}
                          </p>
                        </div>
                        <div className="text-right">
                          <p
                            className={`text-xs ${
                              ticket.status === "Open"
                                ? "text-red-500"
                                : ticket.status === "In Progress"
                                  ? "text-yellow-500"
                                  : "text-green-500"
                            }`}
                          >
                            {ticket.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Scheduled events and reminders.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Product Launch Meeting",
                        date: "Tomorrow, 10:00 AM",
                        type: "Meeting",
                      },
                      {
                        title: "Inventory Restock",
                        date: "May 15, 2023",
                        type: "Task",
                      },
                      {
                        title: "Quarterly Review",
                        date: "May 28, 2023",
                        type: "Meeting",
                      },
                    ].map((event, index) => (
                      <div key={index} className="flex items-center justify-between rounded-md border p-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{event.title}</p>
                            <p className="text-xs text-muted-foreground">{event.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">{event.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>Detailed analytics for your fertilizer business.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                    <BarChart3 className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">Analytics Dashboard</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">Detailed analytics would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>View and download reports for your business.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                    <BarChart3 className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">Reports Dashboard</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">Reports and exports would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage your notifications and alerts.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                    <BarChart3 className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">Notifications Dashboard</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                      Notifications and alerts would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

