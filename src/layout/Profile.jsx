import React, { useState } from 'react';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [phone, setPhone] = useState('123-456-7890');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('********');
 

  const handleSave = () => {
    // Handle save logic here, you can send the data to your backend
    setEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex items-center justify-center mb-4">
        <img src="/src/img/images2.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          {editing ? (
            <input
              type="text"
              className="border rounded-md px-2 py-1 w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          ) : (
            <p className="text-gray-900 text-lg">{firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          {editing ? (
            <input
              type="text"
              className="border rounded-md px-2 py-1 w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            <p className="text-gray-900 text-lg">{lastName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          {editing ? (
            <input
              type="text"
              className="border rounded-md px-2 py-1 w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <p className="text-gray-900">{address}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          {editing ? (
            <input
              type="text"
              className="border rounded-md px-2 py-1 w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            <p className="text-gray-900">{phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <p className="text-gray-900 text-lg">{email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          {editing ? (
            <input
              type="password"
              className="border rounded-md px-2 py-1 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <p className="text-gray-900">{password}</p>
          )}
        </div>

        {editing ? (
          <button
            onClick={handleSave}
            className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 "
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 "
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
