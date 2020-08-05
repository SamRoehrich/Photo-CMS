import { createContext, useReducer, useContext } from "react";
import PhotoCard from "./PhotoCard";
import ThumbnailCard from "./ThumbnailCard";

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
      let pictures = action.payload.map((item) => {
        if (item.isActive) {
          return {
            link: item.link,
            borderWidth: item.borderWidth,
            tagIndex: item.tagIndex,
          };
        }
      });
      let thumbnails = action.payload.map((item) => {
        if (item.isActive) {
          return {
            thumbnail: item.thumbnail,
            tagIndex: item.tagIndex,
          };
        }
      });
      pictures.sort((a, b) => b.tagIndex - a.tagIndex);
      thumbnails.sort((a, b) => b.tagIndex - a.tagIndex);
      let photos = pictures.map((photo) => <PhotoCard picture={photo} />);
      // let thumbnailCards = thumbnails.map((item) => (
      //   <ThumbnailCard thumbnmail={item} />
      // ));
      return { ...state, photos, thumbnails };
    }
    case "move-forward": {
      let currentPhotoIndex =
        state.currentPhotoIndex !== state.photos.length - 1
          ? state.currentPhotoIndex + 1
          : 0;
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
