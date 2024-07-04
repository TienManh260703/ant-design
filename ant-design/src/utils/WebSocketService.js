import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs.min"; // Import phiên bản tối ưu hóa cho trình duyệt

const SOCKET_URL = "http://localhost:8080/ws-endpoint";

class WebSocketService {
  constructor() {
    this.stompClient = null;
    this.subscriptions = {};
  }

  connect() {
    const socket = new SockJS(SOCKET_URL);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, this.onConnected, this.onError);
  }

  onConnected = () => {
    console.log("Connected to WebSocket");
  };

  onError = (error) => {
    console.error("WebSocket connection error:", error);
  };

  subscribe(topic, callback) {
    if (this.stompClient && this.stompClient.connected) {
      this.subscriptions[topic] = this.stompClient.subscribe(topic, callback);
    } else {
      console.error("WebSocket connection is not established.");
    }
  }

  unsubscribe(topic) {
    if (this.subscriptions[topic]) {
      this.subscriptions[topic].unsubscribe();
      delete this.subscriptions[topic];
    }
  }

  disconnect() {
    if (this.stompClient) {
      this.stompClient.disconnect();
    }
  }

  sendMessage(destination, message) {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.send(destination, {}, message);
    } else {
      console.error("WebSocket connection is not established");
    }
  }
}

const webSocketService = new WebSocketService();
export default webSocketService;
