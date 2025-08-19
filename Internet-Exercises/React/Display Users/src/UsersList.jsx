const UsersList = () => {

  // Component Logic
  const users = [
    { id: 1, name: "Ahmed", age: 25 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Marwan", age: 27 },
    { id: 4, name: "Nora", age: 30 },
  ];


  return (
    <div className='users-list'>
      <ul>
        {users.length === 0 ? <p>No Users Found</p> : users.map((user)=> (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  )
}


export default UsersList;