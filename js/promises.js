const lastDateOfCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization' : `token ${gitHubKey}`}}).then(resp => resp.json()).then(data => {
        console.log(data);
        let date = ""
        for (let datum of data) {
            if (datum.type === "PushEvent") {
                date = datum.created_at;
                break;
            }
        }
        return date;
    }).then(date => document.getElementsByTagName("body")[0].innerText = date);
}

// lastDateOfCommit("davidandstephens");

const wait = (time) => new Promise(resolve => setTimeout(() => {
    resolve(`You will see this message after ${time} millisecond(s).`);
}, time));

wait(1200).then((message) => console.log(message));