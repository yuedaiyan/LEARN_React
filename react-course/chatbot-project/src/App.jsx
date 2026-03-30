import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import LoadingSpinnerImage from './assets/loading-spinner.gif'
import "./App.css";

function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState("");
    const [isLoading, setLoading] = useState(false);

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (isLoading || inputText === "") {
            return;
        }
        setLoading(true);

        // 首先: 情况输入框
        setInputText("");

        // 固定唯一的 robotId
        const robotId = crypto.randomUUID();
        // 先 将之前确定的消息进行拼接
        const newChatMesages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID(),
            },
        ];
        let response = "Loading…";

        // 将 Loading… 显示出来
        setChatMessages([
            ...newChatMesages,
            {
                // message: response,
                message: (
                    <img
                        className="loading-img"
                        src={LoadingSpinnerImage}
                    />
                ),
                sender: "robot",
                id: robotId,
            },
        ]);

        // 等待后端回复,再次设置聊天框内容
        response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            // 复制所有旧的消息,添加新的消息
            ...newChatMesages,
            {
                message: response,
                sender: "robot",
                id: robotId,
            },
        ]);

        setLoading(false);
    }

    function enterDown(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
        if (event.key === "Escape") {
            setInputText("");
        }
    }

    return (
        <div className="chat-input-contaier">
            <input
                className="chat-input"
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={enterDown}
            />

            <button
                className="send-button"
                // 一旦发生点击行为 → 执行 sendMeaasge函数
                onClick={sendMessage}>
                Send
            </button>
        </div>
    );
}

// 传入一条消息 进行渲染
function ChatMessage({ message, sender }) {
    return (
        <div className={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
            {sender === "robot" && (
                <img
                    className="chat-message-profile"
                    src={RobotProfileImage}
                />
            )}
            <div className="chat-message-text">{message}</div>
            {sender === "user" && (
                <img
                    className="chat-message-profile"
                    src={UserProfileImage}
                />
            )}
        </div>
    );
}

// 渲染函数 → 传入的是历史的聊天记录
function ChatMessages({ chatMessages }) {
    // 创建一个 ref
    const chatMessageRef = useAutoScroll(chatMessages);

    return (
        <div
            className="chat-message-container"
            // 将 ref 挂载
            // ref={chatMessageRef}
            ref={chatMessageRef}>
            {chatMessages.map((chatMessage) => {
                // 将历史记录中的消息逐个渲染
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

function WelcomeMessage({ chatMessages }) {
    console.log(chatMessages.length);
    if (chatMessages.length === 0) {
        return <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</p>;
    }
}

// 自制 hook
function useAutoScroll(dependencies) {
    const chatMessageRef = useRef(null);

    useEffect(() => {
        const containerElem = chatMessageRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [dependencies]);

    return chatMessageRef;
}

function App() {
    const [chatMessages, setChatMessages] = useState([]);

    return (
        <div className="app-container">
            <ChatMessages
                // className='chat-mesaaaage'
                chatMessages={chatMessages}
            />
            <WelcomeMessage chatMessages={chatMessages} />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App;
