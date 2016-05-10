$(document).keydown(function(){
	
var open_tags = ["<p>","<b>","<h2>","<code>"];
var closed_tags = ["</p>","</b>","</h2>","</code>"];

for(var i =0; i<open_tags.length; i++){
var first=open_tags[i], end=" "+open_tags[i]+closed_tags[i]+" ";
	for(var j=3; j<8;j++){
  	if($('#input').val().slice(-j) == first){
       $('#input').val($('#input').val().replace($('#input').val().slice(-j),end));
    }
  }
}
});
