import PropTypes from 'prop-types';
import UserList from './UserList';


const User = (props) => {
  return (
    <>
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
        </div>
        <UserList 
            users={[
                {name: 'John', age: 30, email: 'john@gmail.com'},
                {name: 'Bob', age: 28, email: 'bob@gmail.com'},
                {name: 'Harry', age: 17, email: 'harry@gmail.com'},
            ]}
        />
    </>
  )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

export default User
