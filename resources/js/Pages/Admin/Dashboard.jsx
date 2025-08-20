import { usePage } from '@inertiajs/react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"

export default function Dashboard() {
  const { auth } = usePage().props

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header user={auth.user} />

        <main className="p-6">
          <Card className="shadow-md">
            <CardContent>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600">Selamat datang, {auth.user.name} 👋</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
