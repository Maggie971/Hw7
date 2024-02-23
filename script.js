document.getElementById("loginButton").onclick = function () {
    location.href = "./library-user.html";
};

function changeSearchType() {
    var searchType = document.getElementById('searchType').value;
    var searchArea = document.getElementById('searchArea');

    if (searchType == 'indirect') {
        searchArea.innerHTML = `
            <select id="indirectType">
                <option value="titles">By titles</option>
                <option value="authors">By authors</option>
                <option value="presses">By presses</option>
                <option value="keywords">Choose Keywords</option>
            </select>
            <input type="text" id="searchBox" placeholder="Enter...">
        `;
    } else {
        searchArea.innerHTML = '<input type="text" id="searchBox" placeholder="Enter...">';
    }
}
