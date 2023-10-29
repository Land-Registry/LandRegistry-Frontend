import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar/Navbar';

function PropertyChat() {
  const [propertyID, setPropertyID] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    setPropertyID(pid);
  }, [pid]);

  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/chats/property-chat?propertyID=${propertyID}`);
        if (response.status === 200) {
          setChatMessages(response.data);
        }
      } catch (error) {
        console.error('Error fetching chat messages:', error);
      }
    };

    if (propertyID) {
      fetchChatMessages();
    }
  }, [propertyID]);

  const handlePropertyIDChange = (event) => {
    setPropertyID(event.target.value);
  };

  // Create a map of users to background colors
  const userColors = new Map();
  const getUserBackgroundColor = (userId) => {
    if (!userColors.has(userId)) {
      // Generate a random color for the user
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      userColors.set(userId, randomColor);
    }
    return userColors.get(userId);
  };

  return (<>
  <div className='pb-24'>
    
      <Navbar />
  </div>
    <div className='h-screen'>

      <div className=' h-[70%] overflow-y-auto w-2/3 m-auto p-10 bg-gray-100 rounded-lg no-scrollbar'>
        <div className='flex'>

      <h1 style={{ fontSize: '24px', marginBottom: '20px' }} className="w-full">Chat Messages for Property ID</h1>
      <input
        type="text"
        placeholder="Enter Property ID"
        value={propertyID}
        onChange={handlePropertyIDChange}
        className='bg-gray-100 font-bold text-red-500'
        style={{ padding: '10px', fontSize: '16px', width: '100%', marginBottom: '20px' }}
        />
        </div>
        {chatMessages.map((message, index) => (
          <div
            key={message._id}
            style={{
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '5px',
              textAlign: 'left',
            }}
            className='bg-gray-300 text-black'
            >
            <p style={{ fontWeight: 'bold' }}>{message.Name}</p>
            <div className='flex justify-between'>
              <p>RS. {message.highestBid}</p>
              <p>{new Date(message.timestamp).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </>

  );
}

export default PropertyChat;
