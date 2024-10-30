import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ImageSourcePropType,  Pressable } from 'react-native';
import { Link } from "expo-router";

interface Message {
  id: string;
  userId: string;
  text: string;
  timestamp: string;
  avatar: ImageSourcePropType
}

const messages: Message[] = [
  { id: '1', userId: 'Jpp123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile_picture.jpg') },
  { id: '2', userId: 'App123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile_icon.png') },
  { id: '3', userId: 'Dpp123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile-800x800.png') },
  { id: '4', userId: 'Cpp123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile2-500x500.png') },
  { id: '5', userId: 'Vpp123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile3-500x500.png') },
  { id: '6', userId: 'Hpp123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile_picture.jpg') },
  { id: '7', userId: 'Tpp123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile_picture.jpg') },
  { id: '8', userId: 'Qpp123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile_picture.jpg') },
  { id: '9', userId: 'Wpp123', text: "Yeah I really like dinosaurs. My favorite is a velociraptor but I also really like Ankylosaurus and Triceratops", timestamp: "4:45 pm", avatar: require('../assets/images/profile_picture.jpg') },
];

interface MessageItemProps {
  item: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ item }) => (
  <Link 
    href={{
      pathname: "/ChatRoomFriend",
      params: { 
        userId: item.userId,
        username: item.userId,
        avatar: JSON.stringify(item.avatar)
      }
    }} 
    asChild
  >
    <Pressable style={styles.messageContainer}>
      <View style={styles.avatarContainer}>
        <Image 
          source={item.avatar}
          style={styles.avatarImage} 
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.username}>{item.userId}</Text>
        <Text style={styles.messageText} numberOfLines={2} ellipsizeMode="tail">
          {item.text}
        </Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </Pressable>
  </Link>
);

const MessageList: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Messages</Text>
    <FlatList
      data={messages}
      renderItem={({ item }) => <MessageItem item={item} />}
      keyExtractor={item => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  messageContainer: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  messageText: {
    color: '#333',
    fontSize: 15,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-start',
  },
});

export default MessageList;