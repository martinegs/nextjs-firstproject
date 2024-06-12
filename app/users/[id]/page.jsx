 async function getUser(id) {
const res = await fetch(`https://reqres.in/api/users/${id}`);
const data = await res.json();
return data.data;
 
}
async function UserPage({params}){
    const user = await getUser(params.id);
    return <div>
            <img src={user.avatar}/>
    <h3>{user.id} {user.first_name} {user.last_name} </h3> 
    <p>email: {user.email}</p>
    </div>;
}
export default UserPage;