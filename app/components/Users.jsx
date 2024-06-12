"use client" ;
import Link from 'next/link';
function Users({users}) {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (

<Link key={user.id} href={`/users/${user.id}`} >



<li key={user.id}>
                        {user.id} {user.first_name} {user.last_name}
                        <p>{user.email}</p>
                        <img src={user.avatar}/>
                    </li>


</Link>
               
                ))}
            </ul>
        </div>       
    )
}

export default Users;