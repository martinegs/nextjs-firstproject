"use client";
import Link from 'next/link';

function Users({ users }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Link 
            key={user.id} 
            href={`/users/${user.id}`}
            className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <li>
              <h2 className="text-xl font-semibold text-gray-600">{user.first_name} {user.last_name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="mt-2 rounded-md" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Users;