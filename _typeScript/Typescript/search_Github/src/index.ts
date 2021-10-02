const projects = [];
var htmlTable = ``;
async function getData(query) {
  return new Promise(resolve => {
    fetch(`https://api.github.com/search/repositories?q=${query}`).then(
      (response: Response) => {
        response.json().then(data => projects.push(...data.items));
        resolve();
      }
    );
  });
}
function onSearch(input: HTMLInputElement) {
  htmlTable = ``;
  getData(input.value).then(resolve => {
    drawData().then(resolve => {
      document.getElementById("result").innerHTML = htmlTable;
    });
  });
}

async function drawData() {
  return new Promise(resolve => {
    htmlTable = `
        <table>
            <tr>
                <th>#id</th>
                <th>name</th>
                <th>clone_url</th>
                <th>description</th>
            </tr>
    `;
    projects.map(proj => {
      htmlTable += `<tr>
      <td>${proj.id}</td>
      <td>${proj.name}</td>
      <td>${proj.clone_url}</td>
      <td>${proj.description}</td>
      </tr>`;
    });
    htmlTable += `</table>`;
    console.log(projects);
    resolve();
  });
}