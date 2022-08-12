function addNewWorldcup(left_link, left_name, right_link, right_name, title, description) {
    console.log("================ " + title + " ================");
    console.log(left_name + ": " + left_link);
    console.log(right_name + ": " + right_link);
    console.log("제목: " + title);
    console.log("설명: " + description);
    console.log("==================================================");

    const worldcup_box = '' +
        '        <div class="worldcup_box">\n' +
        '            <div class="worldcup_content">\n' +
        '                <div class="worldcup_sample left_sample">\n' +
        '                    <div class="worldcup_thumbnail" style="background-image: url(' + left_link + ');"></div>\n' +
        '                    <h4>' + left_name + '</h4>\n' +
        '                </div>\n' +
        '                <div class="worldcup_sample right_sample">\n' +
        '                    <div class="worldcup_thumbnail" style="background-image: url(' + right_link + ');"></div>\n' +
        '                    <h4>' + right_name + '</h4>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="worldcup_info">\n' +
        '                <a href="next_url">\n' +
        '                    <h3>' + title + '</h3>\n' +
        '                </a>\n' +
        '\n' +
        '                <h5>' + description + '</h5>\n' +
        '            </div>\n' +
        '' +
        '            <div class="buttons">\n' +
        '                <a href="next_url" class="btn-red"><i class="fa-solid fa-flag-checkered"></i>시작하기</a>\n' +
        '                <a href="next_url" class="btn-yellow"><i class="fa-solid fa-list"></i>랭킹보기</a>\n' +
        '                <a href="next_url" class="btn-blue"><i class="fa-solid fa-share"></i>공유하기</a>\n' +
        '            </div>\n' +
        '        </div>\n';
    let worldcup_box_object = $(worldcup_box);

    $(".worldcup_container").append(worldcup_box_object);
}

const result = fetch("../json/worldcup_jsons.json")
    .then(response => response.json())
    .then(function (files) {
        for (let i = 0; i < files.length; i++) {
            fetch("../json/" + files[i])
                .then(response => response.json())
                .then(function (json) {
                    const title = json.title;
                    const description = json.description;

                    // 0 ~ (max - 2) random
                    const left_index = Math.floor(Math.random() * (json.list.length - 1));
                    // (leftindex + 1) ~ (max - 1) random
                    const right_index = Math.floor((Math.random() * (json.list.length - left_index - 2)) + left_index + 1);

                    const left_name = json.list[left_index][0];
                    const left_link = json.list[left_index][1];

                    const right_name = json.list[right_index][0];
                    const right_link = json.list[right_index][1];

                    addNewWorldcup(left_link, left_name, right_link, right_name, title, description);
                });
        }
    });
