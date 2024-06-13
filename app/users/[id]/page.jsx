"use client";
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-32 h-32 rounded-full mx-auto mb-4 text-gray-600"
        />
        <h1 className="text-2xl font-bold text-center mb-2 ">
          {user.id} {user.first_name} {user.last_name}
        </h1>
        <p className="text-gray-600 text-center">{user.email}</p>
      </div>
    </div>
  );
}

export default UserPage;
