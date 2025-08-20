"use client"

import { useForm } from "@inertiajs/react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post("/login")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-radial from-sky-300 via-sky-100 to-white">
      <Card className="w-[500px] shadow-sm rounded-2xl border border-sky-200 bg-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="py-4 text-center text-3xl font-bold bg-gradient-to-r from-gray-800 to-sky-600 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-md font-semibold text-gray-700">
                Email
              </Label>
              <Input id="email" type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                placeholder="you@example.com"
                className="h-12 rounded-lg border-gray-300 focus:ring-sky-400"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-md font-semibold text-gray-700">
                Password
              </Label>
              <Input id="password" type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                placeholder="Enter your password"
                className="h-12 rounded-lg border-gray-300 focus:border-sky-400"
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" checked={data.remember}
                  onCheckedChange={(value) => setData("remember", value)}
                  className="data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-600"
                />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm text-sky-600 hover:text-sky-700 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <Button type="submit" className="w-full h-12 rounded-lg bg-sky-500 hover:bg-sky-700 text-lg text-white font-medium transition-all duration-200 active:scale-95"
              disabled={processing}
            >
              {processing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
