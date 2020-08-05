import { createContext, useReducer, useContext } from "react";

const GalleryContext = createContext();

const GalleryStateProvider = GalleryContext.Provider;

const initialState = {
  photos: [],
  thumbnails: [],
  classes: [],
  currentPhotoIndex: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "load-photos": {
      let photos = action.payload.map((item) => {
        return {
          image: item.original,
          borderWidth: item.borderWidth,
        };
      });
      let thumbnails = action.payload.map((item) => item.thumbnail);
      return { ...state, photos, thumbnails };
    }
    case "move-forward": {
      let currentPhotoIndex = state.currentPhotoIndex + 1;
      return { ...state, currentPhotoIndex };
    }
    case "move-backward": {
      let nextIndex =
        state.currentPhotoIndex !== 0
          ? state.currentPhotoIndex - 1
          : state.photos.length - 1;
      return { ...state, currentPhotoIndex: nextIndex };
    }
    default:
      return state;
  }
}

function GalleryState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const defaultValues = {
    state,
    dispatch,
  };
  return (
    <GalleryStateProvider value={defaultValues}>
      {children}
    </GalleryStateProvider>
  );
}

function useGalleryState() {
  const all = useContext(GalleryContext);
  return all;
}

export { GalleryState, GalleryContext, useGalleryState };
