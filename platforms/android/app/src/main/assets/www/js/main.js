/*
共通html template Javascript
 */
function header() {

}
//footer
//@input rootDir : Root パス
function footer(rootDir){
    $.ajax({
        url: rootDir + "footer.html", // 読み込むHTMLファイル
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); //footer.htmlの{$root}を置換
            document.write(html);
        }
    });
}