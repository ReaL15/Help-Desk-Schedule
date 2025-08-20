export default function Header({ user }) {
  return (
    <header className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Hi, {user?.name}</span>
      </div>
    </header>
  )
}
