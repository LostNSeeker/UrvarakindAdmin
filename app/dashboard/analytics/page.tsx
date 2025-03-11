import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DashboardLayout from "@/components/dashboard-layout"
import { BarChart3, LineChart, PieChart, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">Detailed analytics and insights for your fertilizer business.</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              <div className="mt-4 h-[60px]">
                <div className="h-full w-full rounded-md bg-primary/10">
                  {/* This would be a mini chart in a real app */}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350 units</div>
              <p className="text-xs text-muted-foreground">+12.2% from last month</p>
              <div className="mt-4 h-[60px]">
                <div className="h-full w-full rounded-md bg-primary/10">
                  {/* This would be a mini chart in a real app */}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Acquisition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+8.4% from last month</p>
              <div className="mt-4 h-[60px]">
                <div className="h-full w-full rounded-md bg-primary/10">
                  {/* This would be a mini chart in a real app */}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5%</div>
              <p className="text-xs text-muted-foreground">-1.1% from last month</p>
              <div className="mt-4 h-[60px]">
                <div className="h-full w-full rounded-md bg-primary/10">
                  {/* This would be a mini chart in a real app */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sales" className="space-y-4">
          <TabsList>
            <TabsTrigger value="sales" className="flex items-center">
              <LineChart className="mr-2 h-4 w-4" />
              Sales Trends
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Product Performance
            </TabsTrigger>
            <TabsTrigger value="customers" className="flex items-center">
              <PieChart className="mr-2 h-4 w-4" />
              Customer Demographics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sales Trends</CardTitle>
                <CardDescription>Monthly sales performance over time.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                    <LineChart className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">Sales Trend Chart</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                      Sales trend visualization would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Sales by Region</CardTitle>
                  <CardDescription>Geographic distribution of sales.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                      <PieChart className="h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">Regional Sales Chart</h3>
                      <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        Regional sales visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sales by Channel</CardTitle>
                  <CardDescription>Sales performance across different channels.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                      <BarChart3 className="h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">Channel Sales Chart</h3>
                      <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        Channel sales visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Performance</CardTitle>
                <CardDescription>Sales performance by product category.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                    <BarChart3 className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">Product Performance Chart</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                      Product performance visualization would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Top Selling Products</CardTitle>
                  <CardDescription>Best performing products by revenue.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Premium Nitrogen Fertilizer", sales: "$24,500", growth: "+12%" },
                      { name: "Organic Plant Food", sales: "$18,300", growth: "+23%" },
                      { name: "Phosphate Blend", sales: "$16,200", growth: "+7%" },
                      { name: "Complete Fertilizer Kit", sales: "$14,800", growth: "+15%" },
                      { name: "Soil Enhancer", sales: "$12,600", growth: "+9%" },
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
                  <CardTitle>Product Inventory Status</CardTitle>
                  <CardDescription>Current inventory levels by product.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Premium Nitrogen Fertilizer", stock: "432 units", status: "In Stock" },
                      { name: "Organic Plant Food", stock: "215 units", status: "In Stock" },
                      { name: "Phosphate Blend", stock: "54 units", status: "Low Stock" },
                      { name: "Complete Fertilizer Kit", stock: "0 units", status: "Out of Stock" },
                      { name: "Soil Enhancer", stock: "189 units", status: "In Stock" },
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between rounded-md border p-3">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">Stock: {product.stock}</p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant="outline"
                            className={
                              product.status === "In Stock"
                                ? "border-green-200 bg-green-50 text-green-700"
                                : product.status === "Low Stock"
                                  ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                  : "border-red-200 bg-red-50 text-red-700"
                            }
                          >
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Demographics</CardTitle>
                <CardDescription>Breakdown of customer base by demographics.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                    <PieChart className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">Customer Demographics Chart</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                      Customer demographics visualization would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Retention</CardTitle>
                  <CardDescription>Customer retention metrics over time.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                      <LineChart className="h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">Retention Chart</h3>
                      <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        Customer retention visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Acquisition Cost</CardTitle>
                  <CardDescription>Cost metrics for acquiring new customers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                      <BarChart3 className="h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">CAC Chart</h3>
                      <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        Customer acquisition cost visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

