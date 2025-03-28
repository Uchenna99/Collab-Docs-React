import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000";
export const userURL = "http://localhost:5000/api/user"
export const authURL = "http://localhost:5000/api/auth"

const useSocket = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [messages, setMessages] = useState('');
    // const [currentUser, setCurrentUser] = useState<JWT_User|null>(null);
    const [typingUsers, setTypingUsers] = useState<string[]>([]);
    const [typing, setTyping] = useState(false);
    // const [userList, setUserList] = useState<WS_User[]>([]);

    
    useEffect(() => {
        
        const userSocket = io(SOCKET_URL);
        
        userSocket.on("connect", () => {
            console.log("Connected to WebSocket server");
        });
        
        userSocket.on("joined-users", (data: string)=>{
        });

        userSocket.on("message", (data: string) => {
            setMessages(data);
        });

        userSocket.on("typing", (user)=>{
            typingUsers.includes(user)? null : setTypingUsers((users)=> [...users, user]);
        });

        userSocket.on("notTyping", (user)=>{
            setTypingUsers(typingUsers.filter((typingUser)=> typingUser !== user));
        })

        userSocket.on("edited-message", (msg: string)=>{
        })

        userSocket.on("deleted-Message", (id)=>{
            // setMessages((current)=> current.filter((message)=> message.id !== id));
        })

        userSocket.on("disconnect", () => {
            console.log("Disconnected from WebSocket server");
        });

        setSocket(userSocket);

        return () => {
            userSocket.disconnect();
        };
    }, []);


    const sendMessage = (data: string) => {
        if (socket) {
            socket.emit("message", data);
        }
    };


    const deleteMessage = (id: string)=>{
        if(socket) {
            socket.emit("delete-Message",  id);
        }
    };

    const editMessage = (message: string)=>{
        if(socket) {
            socket.emit("edit-message", message);
        }
    };


    return { sendMessage, messages, typingUsers, deleteMessage, editMessage };
};

export default useSocket;
