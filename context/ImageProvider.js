import React, { createContext, useState } from "react";

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [image, setImage] = useState("");

  const values = { image, setImage };
  return (
    <ImageContext.Provider value={values}>{children}</ImageContext.Provider>
  );
};

export default ImageProvider;
