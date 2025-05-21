import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { TodoContext } from "@/store/todos-context";

const formSchema = z.object({
  text: z.string().min(1, "請輸入 Todo 內容!"),
});

export default function TodoForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const todoCtx = useContext(TodoContext);

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    todoCtx.addTodo(data.text);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="">
        <h1 className="mb-4">新增 Todo</h1>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Todo 內容</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="請輸入todo" {...field} />
              </FormControl>
              <FormDescription>
                這是todo的內容,請輸入你想要的todo
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-around">
          <Button type="submit" className="cursor-pointer">
            新增
          </Button>
          <Button
            type="button"
            className="cursor-pointer"
            onClick={handleCancel}
          >
            取消
          </Button>
        </div>
      </form>
    </Form>
  );
}
