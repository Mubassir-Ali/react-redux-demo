import React, { useEffect } from 'react';
import { fetchUsers } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

const UserContainer = () => {
	const userData = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());   
      console.log(userData);
        
	}, []);
   
   
	return <h2>User List</h2>
};

export default UserContainer;
