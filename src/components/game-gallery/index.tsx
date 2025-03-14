type TGameGallery = {
  images: string[];
};

const GameGallery: React.FC<TGameGallery> = ({ images }) => {
  const gallery = images.map((image, index) => <img src={image} alt="preview" key={index} />);
  return <div>{gallery}</div>;
};

export default GameGallery;
