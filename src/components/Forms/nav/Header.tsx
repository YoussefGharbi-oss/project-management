export const Header = ({ name }) => {
  return (
    <header className="p-8 flex flex-col gap-4 w-max">
      <h1 className="text-left text-4xl font-bold ">Welcome , {name} </h1>
      <h3 className="text-gray-500">Welcome To your Project Manager , Sir</h3>
    </header>
  )
}
