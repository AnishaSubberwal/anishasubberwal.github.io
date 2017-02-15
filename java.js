
var feed = new Instafeed({
  get: 'anishasubs',
  userId: '7152949',
  filter: function(image) {
    return image.tags.indexOf('TAG_NAME') >= 0;
  }
});
feed.run();


//var userFeed = {
  //"get": "instagram.com/anishasubs",
  //"userId": '7152949',
  //"accessToken": "7152949.1677ed0.0306f42dec8d4ae4b1250c09924e9e86"
//};

//function Insta(rsp) {
//	for (var i = 0; resp.objects.length; i++) {
//		var imageUrl = rsp.objects[i].images[0].b.url;

//		var imageDisplay = document.createElement("img")
//		imageDisplay.setAttribute("srs",imageUrl);

//		document.getelementById("pictureholder").appendChild(imageDisplay)
//	}
//}

//userFeed.run();

//function Insta() {
	//var imageDisplay = document.createElemen("img")
	//imageDisplay.setAttribute("src", imageURL)
//}