import React, {useState} from 'react'
import useProfile from '../../store/useProfile'
import UpdateProfile from '../../components/update-profile/UpdateProfile';


const Profile = () => {

    const { profile, details } = useProfile();



  return (
    <div className="w-full h-full flex flex-1 justify-center items-center flex-col gap-y-5">
      <div className="h-1/2 w-3/4 rounded-xl bg-white relative mt-5">
        <div className="h-3/4 w-full">
          <img src={details.coverUrl} alt="" className="h-full w-full cover rounded-t-lg" />
        </div>
        <div className="w-[150px] h-[150px] bg-white rounded-full absolute bottom-5 left-10">
          {/*  avatar */}
          <img
            src={details.avatarUrl}
            alt=""
            className="h-full w-full rounded-full"
          />
        </div>

        <div className="h-1/4 w-full bg-blue-200  rounded-b-lg">
          <div className="pl-[200px] text-black">
            <div>
              {profile.name}, {profile.age}
            </div>
            <div>
              {profile.gender}, {profile.phoneNum}
            </div>
          </div>
        </div>
      </div>

      {/* update profile */}
      <UpdateProfile />

    </div>
  );
}

export default Profile