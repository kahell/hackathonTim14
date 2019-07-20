var users= [];
export default function(state=gitRepos, action){
  switch (action.type) {
    case "": { gitRepos = action.payload;
      console.log(action, 'action');
      return users;
    }
      break;
  }
  return users;
}
