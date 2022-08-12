// using jquery

function addNewWorldcup(left_link, left_name, right_link, right_name, title, summary) {
    console.log("[addNewWorldcup]");
    console.log(left_name + ": " + left_link);
    console.log(right_name + ": " + right_link);
    console.log("제목: " + title);
    console.log("설명: " + summary);
    console.log("=====================================");

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
        '                <h5>' + summary + '</h5>\n' +
        '            </div>\n' +
        '' +
        '            <div class="buttons">\n' +
        '                <a href="next_url" class="btn-red"><i class="fa-solid fa-flag-checkered"></i>시작하기</a>\n' +
        '                <a href="next_url" class="btn-yellow"><i class="fa-solid fa-list"></i>랭킹보기</a>\n' +
        '                <a href="next_url" class="btn-blue"><i class="fa-solid fa-share"></i>공유하기</a>\n' +
        '            </div>\n' +
        '        </div>\n';

    console.log(worldcup_box);

    let worldcup_box_object = $(worldcup_box);

    $(".worldcup_container").append(worldcup_box_object);
}

addNewWorldcup('img/champion/ash.png', '애쉬1', 'img/champion/ash.png', '애쉬2', '롤 챔피언 월드컵', '당신이 가장 좋아하는 롤 챔피언을 찾아보세요!');