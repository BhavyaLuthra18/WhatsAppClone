import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3004",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// active users
let users = [];

// socket id comes from socket object in parameter
const addUser = (userData, socketId) => {
  /// if user exists in the userData object then show that if not then push that new user in the user object
  !users.some((user) => user.sub == userData.sub) &&
    users.push({ ...userData, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

// socket = info that comes from client side
io.on("connection", (socket) => {
  console.log("user connected");

  // add and get users
  socket.on("addUsers", (userData) => {
    addUser(userData, socket.id);
    // emit for sending information from  backend to frontend
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", (data) => {
    // receiverId is to whom your message will be sent
    const user = getUser(data.receiverId);
    if (user && user.socketId) {
      io.to(user.socketId).emit("getMessage", data);
    } else {
      console.log(
        `User with id${data.receiverId} not found or has no socketId`
      );
    }
  });
});
