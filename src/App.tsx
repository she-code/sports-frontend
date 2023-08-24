import { ArticlesProvider } from "./contexts/articles/context";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { SportsProvider } from "./contexts/sports/context";
import { MatchesProvider } from "./contexts/matches/context";
import { TeamsProvider } from "./contexts/teams/context";
import { UsersProvider } from "./contexts/users/context";

function App() {
  return (
    <div className={` w-full mx-auto overflow-hidden `}>
      <TeamsProvider>
        <SportsProvider>
          <ArticlesProvider>
            <MatchesProvider>
              <UsersProvider>
                <RouterProvider router={router} />
              </UsersProvider>
            </MatchesProvider>
          </ArticlesProvider>{" "}
        </SportsProvider>
      </TeamsProvider>
    </div>
  );
}

export default App;
