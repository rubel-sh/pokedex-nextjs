const VerticalScrollImage = () => {
  //   Inline CSS
  const scrollingBgImg = {
    backgroundImage: "url('/Left.png')",
  };
  return (
    <div style={scrollingBgImg} className="scrollingImg hidden md:block"></div>
  );
};

export default VerticalScrollImage;
