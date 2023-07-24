import { ArticlesProvider } from "./contexts/articles/context";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { SportsProvider } from "./contexts/sports/context";
import { MatchesProvider } from "./contexts/matches/context";
import { TeamsProvider } from "./contexts/teams/context";

function App() {
  return (
    <div className={`h-full w-full mx-auto overflow-x-hidden`}>
      <TeamsProvider>
        <SportsProvider>
          <ArticlesProvider>
            <MatchesProvider>
              <RouterProvider router={router} />
            </MatchesProvider>
          </ArticlesProvider>{" "}
        </SportsProvider>
      </TeamsProvider>
    </div>
  );
}

export default App;
