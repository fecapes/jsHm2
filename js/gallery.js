/*Name this external file gallery.js*/

function image_line(src_txt, alt_txt, tabi){
    txt_line = '<div class="column"><img class = "preview" alt = "' + alt_txt + '" src = "' + src_txt + '" tabindex = "' + tabi + '" onmouseover = "upDate(this)" onfocus="upDate(this)" onmouseout = "unDo()" onblur="unDo()"></div>'

    console.log(typeof txt_line)

    return txt_line
}

function initial_img_cnstr(imgs_list){

    let txt_list = ""

    for(let i=0; i < imgs_list.length; i++){
        txt_list = txt_list + " " + image_line(imgs_list[i][0], imgs_list[i][1], i)

    }

    console.log(txt_list)

    return txt_list
}
// i  
function iniciopag(){

    /* List with urls and alternative texts for each image we want in the web page */
    imgs_lists = [["https://upload.wikimedia.org/wikipedia/commons/b/b1/Beautiful-landscape.png", "Sunset behind tree"],
                  ["https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3BkbWlzY3Byb2plY3QyMC1sYWNtYTIyODQ1Mi1pbWFnZS5qcGc.jpg", "Stony mountain"],
                  ["https://freerangestock.com/sample/122788/lake-landscape.jpg", "Sunday day and lake"],
                  ["https://cdn.stocksnap.io/img-thumbs/960w/beautiful-landscape_FH3TLO40EI.jpg", "Dirt road and coast"],
                  ["https://freerangestock.com/sample/181688/misty-landscape-with-silhouettes-of-trees-and-hills.jpg", "Clouds over hills"],
                  ["https://cdn12.picryl.com/photo/2016/12/31/tatry-slovakia-landscape-nature-landscapes-ca7157-1024.jpg", "Lake and mountains"]]


    img_txt_line = initial_img_cnstr(imgs_lists)


    document.getElementsByClassName("row")[0].innerHTML = img_txt_line


}

function upDate(previewPic){

    console.log()
    
    document.getElementById("image").innerHTML = "<img alt =" + previewPic.alt + " src = " + previewPic.src + "></img> <div class='titleover'>" + previewPic.alt + "</div>"   
        
}
   
function unDo(){

    document.getElementById("image").innerHTML = "Hover over an image below to display here."
    
}