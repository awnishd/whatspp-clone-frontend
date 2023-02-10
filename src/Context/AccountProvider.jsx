import { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);



const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [person, setPerson] = useState({});
    const socket = useRef();
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const ENDPOINT="https://whatsappsocket-vrl2.onrender.com";

    useEffect(() => {
        socket.current = io(ENDPOINT,{ transports: ['websocket'] });
    }, [])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket, activeUsers, setActiveUsers, newMessageFlag, setNewMessageFlag,
        }}>
            {children}
        </AccountContext.Provider>
    )
}
export default AccountProvider;
