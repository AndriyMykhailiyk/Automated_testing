import { test, expect } from "@playwright/test";
import axios from "axios";

test.describe("API тести", () => {
  test("GET всі дані", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    expect(res.status).toBe(200);
  });

  test("GET один запис", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(res.data.id).toBe(1);
  });

  test("POST запит", async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "test",
    });
    expect(res.status).toBe(201);
  });

  test("PUT запит", async () => {
    const res = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "updated",
      },
    );
    expect(res.status).toBe(200);
  });

  test("DELETE запит", async () => {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    expect(res.status).toBe(200);
  });
});
