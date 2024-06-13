"use client";
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="container p-4 m-auto" >
      <div className="bg-white rounded-lg shadow-md  h-96 w-72 text-gray-600 p-6  m-auto">
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
