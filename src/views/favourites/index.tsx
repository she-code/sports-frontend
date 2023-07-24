import FavouriteTeamList from "./FavouriteTeamList";

export default function Favourite() {
  return (
    <div className="border-2 rounded-lg p-3 w-full h-full mt-9">
      <h2 className="mt-3 mx-4 text-xl font-semibold  mb-4"> Favourites</h2>

      <FavouriteTeamList />
    </div>
  );
}
