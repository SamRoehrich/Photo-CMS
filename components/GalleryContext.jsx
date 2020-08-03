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
      let photos = action.payload.photos;
      let thumbnails = action.payload.thumbnails;
      let classes = action.payload.classes;

      return { ...state, photos, thumbnails, classes };
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
    galleryState: state,
    dispatch,
  };
  return (
    <GalleryStateProvider values={defaultValues}>
      {children}
    </GalleryStateProvider>
  );
}

function useGalleryState() {
  const all = useContext(GalleryContext);
  return all;
}

export { GalleryState, GalleryContext, useGalleryState };
