import React from "react";
import { Link, usePage, router } from "@inertiajs/react";
import route from "@/ziggy";

export default function Index() {
  const { users, flash } = usePage().props;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Users</h1>
        <Link
          href={route("admin.users.create")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Tambah User
        </Link>
      </div>

      {flash?.success && (
        <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
          {flash.success}
        </div>
      )}

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2 space-x-2">
                <Link
                  href={route("admin.users.edit", user.id)}
                  className="text-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() =>
                    confirm("Yakin hapus?") &&
                    router.delete(route("admin.users.destroy", user.id))
                  }
                  className="text-red-600"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex space-x-2">
        {users.links.map((link, i) => (
          <Link
            key={i}
            href={link.url || "#"}
            className={`px-3 py-1 border rounded ${
              link.active ? "bg-blue-600 text-white" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}
