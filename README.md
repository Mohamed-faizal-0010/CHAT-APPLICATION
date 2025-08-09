# CHAT-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: S.KALISHWARAN

*INTERN ID*:CT04DZ460

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSE

*DESCRIPTION*:
   Project Title: Real-Time Group Chat Application (with Modern UI)
Overview:

The Group Chat Application is a real-time messaging platform designed for seamless communication among multiple users in a group setting. Developed with modern web technologies, the application enables users to exchange messages instantly through a clean, intuitive user interface. The frontend is built using React.js with Tailwind CSS for responsive design and styling, while the backend is powered by Node.js and Socket.IO for real-time bidirectional communication. This application can be deployed locally or on a server and is ideal for educational, collaborative, or casual communication needs.
Features:

   * Real-Time Messaging:*

        Messages are transmitted and received in real time using WebSockets (Socket.IO).

        No need for page refreshes; conversations stay live and responsive.

   * Group Chat Support:*

        Multiple users can join the chat and communicate in the same chatroom.

        Each message includes the sender’s name, content, and timestamp.

   * Modern UI/UX:*

        The interface mimics popular messaging apps, offering familiarity and usability.

        Messages from the current user appear on the right with a blue bubble, while others appear on the left with gray styling.

        The layout is clean, with rounded corners, soft shadows, and clear visual hierarchy.

   * Responsive Design:*
     
        Fully optimized for desktops and tablets, with potential scalability to mobile.

        Built using Tailwind CSS for fast styling and responsiveness.

   * Message Input with Actions:*

        A sticky footer input bar allows users to type messages and send them.

        The "Send" button is interactive, with keyboard support (Enter key to send).

   * User Identification:*

        Users can enter their name before joining the chat room.

        This username is displayed next to each message, helping identify contributors.

Technology Stack:

  *  Frontend:*

        React.js (with useState, useEffect)

        Tailwind CSS (for layout and styling)

        Socket.IO client (for WebSocket communication)

   * Backend:*

        Node.js with Express

        Socket.IO server

        HTTP server for serving the backend

   * Development Tools:*

        npm/Yarn

        VS Code

        Git for version control

*Working Mechanism:*

   * Client Initialization:*

        When a user opens the chat application, they are prompted to enter their name.

        The client establishes a Socket.IO connection with the backend server.

   * Sending Messages: *

        The user types a message and clicks the “Send” button or presses Enter.

        The message is sent to the server via the Socket.IO channel.

  *  Broadcasting: *

        The server receives the message and broadcasts it to all connected clients in the chat room.

        Each client receives the message and updates their UI with the new content.

   * UI Updates:*

        New messages are dynamically appended to the message list with proper styling.

        Messages are separated visually based on the sender’s identity.

#OUTPUT

 <img width="1356" height="679" alt="Image" src="https://github.com/user-attachments/assets/44194f58-1d53-4843-866f-288e32b75156" />
 
     
