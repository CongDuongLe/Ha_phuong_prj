import { create } from "zustand";

// useState()  const [stateName, setStateName] = useState(initialState)

// so sanh voi zustand :
// nhung tham so khong di cung voi () => {} : === stateName
// nhung tham so di cung voi () => {} : === setStateName
// gia tri di cung voi nhung tham so khong chua () => {} : === initialState

const useSelectGesture = create((set) => ({
  // state
  selectedItem: [],

  setSelectedItem: (newItem) => set({ selectedItem: newItem }),
}));

export default useSelectGesture;

