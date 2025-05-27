import React from "react";
import { ROUTES } from "@/constants/routes";
import { usePathname, useRouter } from "next/navigation";

const SelectNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPath = e.target.value;
    if (selectedPath !== pathname) {
      router.push(selectedPath);
    }
  };

  return (
    <div className="my-4">
      <select
        value={pathname}
        onChange={handleChange}
        className="border px-4 py-2 rounded"
      >
        {ROUTES.map((route) => (
          <option key={route.path} value={route.path}>
            {route.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectNavigation;
