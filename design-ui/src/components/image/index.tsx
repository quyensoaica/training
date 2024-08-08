const Image = ({ imageUrl, className, alt }: { imageUrl: string; className?: string; alt: string }) => {
  return <img className={className} src={`src/assets/images/${imageUrl}`} alt={alt} />;
};
export default Image;
