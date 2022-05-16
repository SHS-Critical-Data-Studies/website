function changeWordcloud(){
	var list = ['UK', 'Morning Show', 'Sciences', 'USA', 'Ukraine-Russia News', 'International Affairs', 'Ukraine-Russia war', 'Music & New York City', 'Trevor Noah Show', 'Business News', 'Education', 'Ted Talks', 'World News', 'Education', 'Biathlon']
	var val = $("#wordcloud").val()-1
	$("#wordcloud_title").text("Topic  "+ (val+1)+ " : "+list[val])
	$("#wordcloud_img").attr("src", "images/word_cloud_topic_"+val+".png") 

}

function changeDisplayRun(){
	var val = $("#displayrun").val()
	$("#explore").attr("src", "viz/p5_category_first_video_theme_0:"+val+".html") 

}