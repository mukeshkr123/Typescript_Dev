import axios from "axios";
import { Reminder } from "../components/ReminderList";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos",
  });

  async getReminders() {
    const response = this.http.get<Reminder[]>("/todos");
    return (await response).data;
  }

  async addReminder(titles: string) {
    const response = await this.http.post("/todos", {
      title: titles,
    });
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default new ReminderService();
