type Props = {
  name: string,
  price: number,
  category: string,
  image: string
};

function Card({ name, price, category, image }: Props) {
  return (
    <div className="bg-white cursor-pointer w-60 h-60 rounded-lg shadow-md hover:opacity-95 mb-4">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {category}
        </span>
        <img className="w-full h-full object-cover rounded-t-lg" src={image} alt={name} />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2">
          +
        </div>
      </figure>
      <p className="flex justify-between items-center px-1">
        <span className="text-sm font-light truncate" title={name}>{name}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
}

export default Card;
