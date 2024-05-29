import Character from "./character";
import Team from "./team";

const Char = new Character("Unit");
const newTeam = new Team("Kills");
newTeam.add(Char);
for (const player of newTeam) {
    console.log(player);
}