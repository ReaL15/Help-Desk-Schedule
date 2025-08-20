import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import route from "@/ziggy";

export default function Edit() {
  const { user } = usePage().props;
  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.put(route("admin.users.update", user.id), values);
  }

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4 font-bold">Edit User</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Kosongkan jika tidak diganti"
          value={values.password}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
