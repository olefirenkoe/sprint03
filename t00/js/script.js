let nameTeam = prompt("Please, enter the name of the team:");
let nameLeader = prompt("Please, enter the name of the team's leader:");
let nameMembers = prompt("Please, enter the names of the members of the team(please, use \",\" between the words):");
let regсomma = /(,)/g;
let space = " ";

while (nameMembers.match(regсomma) == null) {
    alert("Please, use comma");
    nameMembers = prompt("Please, enter the names of the members of the team AGAIN (please, use \",\" between the words):");
}

let globalIdea = prompt("Please, describe what are the goals and ideas of the team:");
let trueOrnot = prompt("Please, answer: the team is evil or not?(yes,no)");
let commaMatch = nameMembers.match(regсomma).length;
let nameMembersArr = nameMembers.split();


if (trueOrnot == "yes") {
    trueOrnot = true;
} else if (trueOrnot == "no") {
    trueOrnot = false;
} else {
    trueOrnot = "Wrong input.";
}

let superTeam = {
    title: nameTeam,
    leader: nameLeader,
    members: nameMembersArr,
    memberCount: commaMatch + 2,
    agenda: globalIdea,
    isEvil: trueOrnot
};

alert(`Here's the team:
name - ${superTeam.title}
leader - ${superTeam.leader}
namebers - ${superTeam.members}
memberCount - ${superTeam.memberCount}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`)