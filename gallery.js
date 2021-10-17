$(document).ready(function() {
  var Pictures = [
    "https://art.ngfiles.com/images/705000/705560_kaayunaka_free-to-use-art.png?f1544077708",
    "https://th.bing.com/th/id/R.9262b01e2847a37104c43c219c4e2849?rik=n1QOijnJqPiCYQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.1b9aa58a5a6eb625ebe56dd050354bf5?rik=yvRCURBMaOE51Q&riu=http%3a%2f%2fimages.freecreatives.com%2fwp-content%2fuploads%2f2015%2f03%2fAbstract-color-painting.jpg&ehk=VDsEUdrQ9KdGl8SsTTNJovitQGYqHhb%2fOcQwsi%2fsNMI%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.361985356bbc8252b6359dd3bcfbd7f7?rik=uAHTPnj5VUZS%2fw&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.ab85912eb10eb8611679eef4fc705e2a?rik=PuUQwkHjRsxhFg&riu=http%3a%2f%2fwww.jesseneo.com%2fimgkpop%2fIU_real_weightheight.jpg&ehk=FE7K%2fw676t%2b6jnJdOoOXKj3Vjjm9YxSCuPkwwECaSHc%3d&risl=&pid=ImgRaw&r=0"
  ];
  var Names = [
    "Sam from Queens",
    "Joey from Brooklyn",
    "Yolanda from Manhattan",
    "Mario from Queens",
    "Kai from The Bronx"
  ];

  function buildGallery() {
    for (var index = 0; index < Pictures.length; index++) {
      var Image = $("<img>");
      Image.attr("src", Pictures[index]);

      var imageLink = $("<a>");
      imageLink.attr("href", Pictures[index]);
      imageLink.attr("target", "_blank");
      imageLink.append(Image);

      var Name = $("<p>").text(Names[index]);

      var div = $("<div>");
      div.addClass("picture");
      div.append(imageLink);
      div.append(Name);

      $("#gallery").append(div);
    }
  }

  $("#add").click(function() {
    var imgUrl = $("#imgurl").val();
    var newname = $("#name").val();
    $("#gallery").empty();
    Pictures.push(imgUrl);
    Names.push(newname);
    buildGallery();
  });
  buildGallery();
});
