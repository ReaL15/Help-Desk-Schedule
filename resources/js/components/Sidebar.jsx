import { Link } from '@inertiajs/react'
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-md flex flex-col justify-between">
      <div>
        <div className="p-4 font-bold text-lg border-b">Admin Panel</div>
        <nav className="p-4 space-y-2">
          <Link href="/admin/dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link href="/admin/users" className="block text-gray-700 hover:text-blue-600">Users</Link>
          <Link href="/admin/schedules" className="block text-gray-700 hover:text-blue-600">Schedules</Link>
        </nav>
      </div>

      {/* Logout di bawah */}
      <div className="p-4 border-t">
        <form method="POST" action="/logout">
          <Button type="submit" className="w-full">Logout</Button>
        </form>
      </div>
    </aside>
  )
}
