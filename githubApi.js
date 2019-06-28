
document.querySelector('#btn_search').addEventListener('click', function() {
    let userId = document.getElementById('ipt_gitUserName').value;
    githubApi.sendRequest(userId);
});

const githubApi = {
    url: 'https://api.github.com/users/',
    sendRequest : function(userId) {
        let sendUrl = this.url + userId;
        fetch(sendUrl)
        .then(function(response) {
            return response = response.json();
        })
        .then(function(res) {

            let profileImg = res['avatar_url'];
            let loginId = res['login'];
            let createdDate = res['created_at'];
            let reposCnt = res['public_repos'];
            let gistsCnt = res['public_gists'];
            let followerCnt = res['followers'];
            
            document.querySelector('#profile1').src = profileImg;
            document.querySelector('#githubNicname').innerHTML = loginId;
            document.querySelector('#div_createdAt').innerHTML = createdDate.substr(0, 10);
            document.querySelector('#reposCnt').innerHTML = reposCnt;
            document.querySelector('#gistsCnt').innerHTML = gistsCnt;
            document.querySelector('#followersCnt').innerHTML = followerCnt;
        });
    },

}