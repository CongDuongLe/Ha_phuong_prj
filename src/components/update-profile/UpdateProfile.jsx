import React, {useState} from 'react'
import useProfile from '../../store/useProfile';

const UpdateProfile = () => {

    const {profile, setProfile} = useProfile();

     const [localProfile, setLocalProfile] = useState(profile);

  return (
    <div className='flex flex-1 flex-col gap-y-5 h-full w-full justify-center items-center pb-5'>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        value={localProfile.name}
        // ...localProfile : spread operator - lấy lại tất cả các key-value của object hiện tại
        onChange={(e) =>
          setLocalProfile({
            ...localProfile,
            name: e.target.value,
          })
        }
        placeholder="write your name"
      />

      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        value={localProfile.age}
        placeholder="write your age"
        onChange={(e) =>
          setLocalProfile({
            ...localProfile,
            age: e.target.value,
          })
        }
      />

      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        value={localProfile.gender}
        placeholder="write your gender"
        onChange={(e) =>
          setLocalProfile({
            ...localProfile,
            gender: e.target.value,
          })
        }
      />

      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        value={localProfile.phoneNum}
        placeholder="write your phone number"
        onChange={(e) =>
          setLocalProfile({
            ...localProfile,
            phoneNum: e.target.value,
          })
        }
      />

      <button onClick={() => setProfile(localProfile)} className="btn btn-info">
        Update Profile
      </button>
    </div>
  );
}

export default UpdateProfile