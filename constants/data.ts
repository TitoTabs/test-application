import { Column } from "@/components/table/page";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export const USERS = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Developer" },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Designer",
  },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", role: "Manager" },
  { id: 4, name: "Emma Davis", email: "emma@example.com", role: "Developer" },
  { id: 5, name: "Tom Brown", email: "tom@example.com", role: "Designer" },
];

export const USER_COLUMNS: Column<User>[] = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "role", header: "Role" },
];
