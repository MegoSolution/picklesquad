import { useState } from 'react';
import ProfileForm from './ProfileForm';
import EditProfileForm from './EditProfileForm';

const ProfileBody = ({ programs }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setUser(JSON.parse(localStorage.getItem('user'))); // Refresh user data from local storage
  };

  return (
    <>
      {isEditing ? (
        <EditProfileForm user={user} onClose={handleCloseEdit} />
      ) : (
        <ProfileForm programs={programs} onEditClick={handleEditClick} />
      )}
    </>
  );
};

export default ProfileBody;