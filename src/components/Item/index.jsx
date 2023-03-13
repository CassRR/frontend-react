import { useEffect, useState } from "react";


function Item() {
    const [users, setUsers] = useState([])
        ;


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);
    console.log(users);

    return (<ul>{
        users.map((user) => {
            return <li>{user.name}</li>
        })}
    </ul>)



}
export default Item