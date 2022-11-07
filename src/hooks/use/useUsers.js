import { useCallback, useEffect, useState } from "react";

import { httpGetUsers } from '../requests/demo'

function useUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const fetchedUsers = await httpGetUsers();
    setUsers(fetchedUsers);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return users;
}

export default useUsers;