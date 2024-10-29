import React, { useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Animated } from 'react-native';

// Simplified Message interface
interface Message {
  id: string;
  text: string;
  isSent: boolean;
  opacity?: Animated.Value;
}

interface MessageContainerProps {
  messages: Message[];
  style?: object;
}

const MessageContainer: React.FC<MessageContainerProps> = ({ messages = [], style }) => {
  const scrollViewRef = useRef<ScrollView>(null);

  // Simple function to render a single message
  const renderMessage = (message: Message) => (
    <View
      key={message.id}
      style={[
        styles.messageWrapper,
        message.isSent ? styles.sentWrapper : styles.receivedWrapper,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          message.isSent ? styles.sentBubble : styles.receivedBubble,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            message.isSent ? styles.sentText : styles.receivedText,
          ]}
        >
          {message.text}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContent}
      >
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map(renderMessage)
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No messages yet</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#EBF7FE',
  },
  scrollContent: {
    paddingVertical: 8,
  },
  messageWrapper: {
    flexDirection: 'row',
    padding: 10,
  },
  sentWrapper: {
    justifyContent: 'flex-end',
  },
  receivedWrapper: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
  },
  sentBubble: {
    backgroundColor: '#4EBCEF',
    borderBottomRightRadius: 0,
  },
  receivedBubble: {
    backgroundColor: '#ECECEC',
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
  },
  sentText: {
    color: '#F1F3F5',
  },
  receivedText: {
    color: '#000',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#999',
    fontSize: 16,
  },
});

export default MessageContainer;