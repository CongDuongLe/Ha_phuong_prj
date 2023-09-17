import { create } from "zustand";

// useState()  const [stateName, setStateName] = useState(initialState)

// so sanh voi zustand :
// nhung tham so khong di cung voi () => {} : === stateName
// nhung tham so di cung voi () => {} : === setStateName
// gia tri di cung voi nhung tham so khong chua () => {} : === initialState




const useProfile = create(
    (set) => ({

        // state
        profile : {
            name : 'Admin',
            age: 20,
            gender : 'male',
            phoneNum : 123456789,
        },

        details : {
            avatarUrl : 'https://toigingiuvedep.vn/wp-content/uploads/2022/11/hinh-anh-avatar-cute-de-thuong.jpg',
            address : '',
            coverUrl : 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/facebook-cover.jpg'
        },


        // function
        setProfile : (newProfile) => set({profile : newProfile}),

        setDetails : (newDetails) => set({details : newDetails}),



})
);


export default useProfile;

