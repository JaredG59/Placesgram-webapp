import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1' , 
            name: 'Jared Godinez', 
            image: 
                'https://www.thesprucepets.com/thmb/R-wMyBfveAvwoEff3u5WzOYaJEI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-626916125-5b3a4a8046e0fb00379f682d.jpg', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
