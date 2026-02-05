import React from 'react';
import { Send, Paperclip, Smile, Bot } from 'lucide-react';

const ChatCard: React.FC = () => {
    return (
        <div className="container_chat_bot">
            <div className="container-chat-options">
                <div className="chat">
                    <div className="chat-bot">
                        <Bot className="w-8 h-8 text-white/50" />
                    </div>
                    <div className="options">
                        <div className="btns-add">
                            <button>
                                <Smile className="w-5 h-5" />
                            </button>
                            <button>
                                <Paperclip className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="btn-submit">
                            <i>
                                <Send className="w-4 h-4" />
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="tags">
                <span>#AI</span>
                <span>#Automation</span>
                <span>#Growth</span>
                <span>#Support</span>
            </div>
        </div>
    );
};

export default ChatCard;
