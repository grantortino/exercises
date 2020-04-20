const input = document.querySelector(".input-field");
const button = document.querySelector(".button");
const form = document.querySelector('.wiget-form');
let targetContainer = document.querySelector(".target-container");
let userAccount = ""
// const fetching = () => {
// event.preventDefault();

//     fetch(`https://api.github.com/users/${input.value}/repos`) // vagobala
//         .then(result => result.json())
//        console.log(`https://api.github.com/users/${input.value}/repos`);

//     }

// form.addEventListener("submit", fetching);

const fetching = () => {
    // event.preventDefault();

    fetch(`https://api.github.com/users/vagobala/repos`)
        .then(result => result.json())

        .then(data => {
            userAccount = `https://api.github.com/users/vagobala/repos`
        })
}

// fetching()
form.addEventListener("submit", fetching);


console.log(userAccount)


const creator = () => {
    for (let i = 0; i < userAccount.length; i++) {

    }


}
creator()







// [{id: 202022539, node_id: "MDEwOlJlcG9zaXRvcnkyMDIwMjI1Mzk=", name: "vagob",…},…]


// 0: {id: 202022539, node_id: "MDEwOlJlcG9zaXRvcnkyMDIwMjI1Mzk=", name: "vagob",…}
// id: 202022539
// node_id: "MDEwOlJlcG9zaXRvcnkyMDIwMjI1Mzk="
// name: "vagob"
// full_name: "vagobala/vagob"
// private: false
// owner: {login: "vagobala", id: 54045860, node_id: "MDQ6VXNlcjU0MDQ1ODYw",…}
// html_url: "https://github.com/vagobala/vagob"
// description: null
// fork: false
// url: "https://api.github.com/repos/vagobala/vagob"
// forks_url: "https://api.github.com/repos/vagobala/vagob/forks"
// keys_url: "https://api.github.com/repos/vagobala/vagob/keys{/key_id}"
// collaborators_url: "https://api.github.com/repos/vagobala/vagob/collaborators{/collaborator}"
// teams_url: "https://api.github.com/repos/vagobala/vagob/teams"
// hooks_url: "https://api.github.com/repos/vagobala/vagob/hooks"
// issue_events_url: "https://api.github.com/repos/vagobala/vagob/issues/events{/number}"
// events_url: "https://api.github.com/repos/vagobala/vagob/events"
// assignees_url: "https://api.github.com/repos/vagobala/vagob/assignees{/user}"
// branches_url: "https://api.github.com/repos/vagobala/vagob/branches{/branch}"
// tags_url: "https://api.github.com/repos/vagobala/vagob/tags"
// blobs_url: "https://api.github.com/repos/vagobala/vagob/git/blobs{/sha}"
// git_tags_url: "https://api.github.com/repos/vagobala/vagob/git/tags{/sha}"
// git_refs_url: "https://api.github.com/repos/vagobala/vagob/git/refs{/sha}"
// trees_url: "https://api.github.com/repos/vagobala/vagob/git/trees{/sha}"
// statuses_url: "https://api.github.com/repos/vagobala/vagob/statuses/{sha}"
// languages_url: "https://api.github.com/repos/vagobala/vagob/languages"
// stargazers_url: "https://api.github.com/repos/vagobala/vagob/stargazers"
// contributors_url: "https://api.github.com/repos/vagobala/vagob/contributors"
// subscribers_url: "https://api.github.com/repos/vagobala/vagob/subscribers"
// subscription_url: "https://api.github.com/repos/vagobala/vagob/subscription"
// commits_url: "https://api.github.com/repos/vagobala/vagob/commits{/sha}"
// git_commits_url: "https://api.github.com/repos/vagobala/vagob/git/commits{/sha}"
// comments_url: "https://api.github.com/repos/vagobala/vagob/comments{/number}"
// issue_comment_url: "https://api.github.com/repos/vagobala/vagob/issues/comments{/number}"
// contents_url: "https://api.github.com/repos/vagobala/vagob/contents/{+path}"
// compare_url: "https://api.github.com/repos/vagobala/vagob/compare/{base}...{head}"
// merges_url: "https://api.github.com/repos/vagobala/vagob/merges"
// archive_url: "https://api.github.com/repos/vagobala/vagob/{archive_format}{/ref}"
// downloads_url: "https://api.github.com/repos/vagobala/vagob/downloads"
// issues_url: "https://api.github.com/repos/vagobala/vagob/issues{/number}"
// pulls_url: "https://api.github.com/repos/vagobala/vagob/pulls{/number}"
// milestones_url: "https://api.github.com/repos/vagobala/vagob/milestones{/number}"
// notifications_url: "https://api.github.com/repos/vagobala/vagob/notifications{?since,all,participating}"
// labels_url: "https://api.github.com/repos/vagobala/vagob/labels{/name}"
// releases_url: "https://api.github.com/repos/vagobala/vagob/releases{/id}"
// deployments_url: "https://api.github.com/repos/vagobala/vagob/deployments"
// created_at: "2019-08-12T23:08:49Z"
// updated_at: "2019-08-12T23:08:49Z"
// pushed_at: "2019-08-12T23:08:50Z"
// git_url: "git://github.com/vagobala/vagob.git"
// ssh_url: "git@github.com:vagobala/vagob.git"
// clone_url: "https://github.com/vagobala/vagob.git"
// svn_url: "https://github.com/vagobala/vagob"
// homepage: null
// size: 0
// stargazers_count: 0
// watchers_count: 0
// language: null
// has_issues: true
// has_projects: true
// has_downloads: true
// has_wiki: true
// has_pages: false
// forks_count: 0
// mirror_url: null
// archived: false
// disabled: false
// open_issues_count: 0
// license: null
// forks: 0
// open_issues: 0
// watchers: 0
// default_branch: "master"
// }


















// const recipes = JSON.parse(recipesOBJ);
// const sections = document.querySelectorAll(".container section");
// const categoryNames = Object.keys(recipes);
// const categoryValues = Object.values(recipes);

// let currentItem = ``;
// let currentName = ``;
// let currentAuthor = ``;
// let currentImg = ``;
// let currentIngredients = ``;
// let template = ``;
// let currentType = ``;


// for (let i = 0; i < categoryNames.length; i++) {
//     let currentCategoryName = categoryNames[i];
//     let currentCategoryValue = categoryValues[i];

//      for (let j = 0; j < currentCategoryValue.length; j++) {
//          currentItem = currentCategoryValue[j];

//          currentName = currentItem.title;
//          currentAuthor = currentItem.author;
//          currentImg = currentItem.image;
//          currentIngredients = currentItem.ingredients;
//          currentType = currentItem.type;

//          template =
//              `
//                  <div class="card" style="width: 18rem;">
//                  <img class="card-img-top" src="${currentImg}" alt="Card image cap">
//                      <div class="card-body">
//                  <h5 class="card-title">${currentName}</h5>
//                  <p class="card-text">${currentType}</p>
//                  <p class="card-text">${currentAuthor}</p>
//                  <hr>
//                  <p class="card-text">Ingredients: ${currentIngredients}</p>
//                  </div>
//                  </div>
//                  `


//          sections[i].innerHTML += template;

//      }

//  }






















// targetContainer.innerHTML=
// `
// <div id="repoContainer">
// <h2 id="repoName">${}</h2>
// <p id="repoDescription">${}</p>
// <p id="releaseDate">${}</p>
// </div>
// `;


// };