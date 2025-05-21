export default interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  priority: "low" | "medium" | "high";
  tags: string[];
  notes: string;
}
