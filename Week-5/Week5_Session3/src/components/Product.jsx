function Product(props) {
  const { userObj } = props

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-lg transition-all hover:scale-105">
      <div className="aspect-h-1 aspect-w-1 bg-gray-800 sm:aspect-none sm:h-64">
        <img
          src={userObj.image}
          alt={userObj.title}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full transition-opacity group-hover:opacity-75"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-white">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {userObj.title}
          </a>
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">{userObj.description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{userObj.category}</p>
          <p className="text-base font-bold text-white mt-1">${userObj.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;