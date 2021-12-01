import http from "./http-common";

class BooksService {
  fetchAll() {
    console.log("service")
    return http.get("/volumes?q=%22%22&key=AIzaSyDfYS8u4y8OADwoUIkl0gYOl0SJQ4GLuaA");
  }
}

export default new BooksService();
