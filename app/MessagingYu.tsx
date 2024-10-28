import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import MessageContainer from '../components/MessageContainer';
import InputContainer from '../components/InputContainer';
import FooterNavigation from '../components/FooterNavigation';
import FriendProfile from '../components/FriendProfile';

// Define our message interface
interface Message {
  id: string;
  text: string;
  isSent: boolean;
}

const MessagingYu = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputHeight, setInputHeight] = useState(60);

  // Initial messages when component mounts
  useEffect(() => {
    const initialMessages: Message[] = [
      {
        id: '1',
        text: "Hi! You can use this space to ask me questions about yourself. You can ask questions like:",
        isSent: false
      },
      {
        id: '2',
        text: "1. What should I say as a fun fact for me at school?",
        isSent: false
      },
      {
        id: '3',
        text: "2. Is there anything interesting about me I can say at an upcoming networking event?",
        isSent: false
      },
      {
        id: '4',
        text: "3. I sit next to this girl in class and I know she likes anime like me, but I can't get myself to start a conversation with her. How can I start a conversation with her about anime?",
        isSent: false
      },
      {
        id: '5',
        text: "These are all just example questions. Use the text box below to ask anything you want!",
        isSent: false
      }
    ];

    // Add messages one by one with a delay
    initialMessages.forEach((message, index) => {
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, message]);
      }, index * 1000); // 1 second delay between each message
    });
  }, []);

  // Simulated response after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const responseMessage: Message = {
        id: Date.now().toString(),
        text: "No way! College is a time to find friends that align with your interests and passions. The more seemingly odd your interests, the quicker you'll find someone who shares that hobby. If you hide it, you may never find them! Plus, college is so big that it doesn't matter what other people think. You may never see them again. All that matters if you be who you want to be and you'll find a great group of friends. Lean in to what makes you unique!",
        isSent: false
      };
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // Handle sending new messages
  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isSent: true
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
        <FriendProfile 
            imageSource={require('../assets/images/yu_progress_bar.png')} // or whatever your image path is
            name="Yu :)" // or whatever name you want to display
            />
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={{ flex: 1 }}>
          <MessageContainer 
            messages={messages}
            style={{ marginBottom: inputHeight }}
          />
        </View>
      </TouchableWithoutFeedback>
      <InputContainer
        onSendMessage={handleSendMessage}
        onHeightChange={setInputHeight}
      />
      <FooterNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FCFE',
  },
});

export default MessagingYu;