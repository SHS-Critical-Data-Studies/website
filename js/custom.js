function changeWordcloud(){
	var list = ['International Affairs on Nuclear', 'World News', 'Documentaries on World Crisis', 'News', 'Ukraine-Russia News', 'Ted Talks', 'Johnny Depp-Amber Heard', 'Health', 'White House', 'Music', 'Education', 'Politics', 'Noah Trevor', 'Morning News', 'Rathee Dhruv']
	var val = $("#wordcloud").val()-1
	$("#wordcloud_title").text("Topic  "+ (val+1)+ " : "+list[val])
	$("#wordcloud_img").attr("src", "images/word_cloud_topic_"+val+".png") 

}

function changeDisplayRun(){
	var val = $("#displayrun").val()
	$("#explore").attr("src", "viz/p5_category_first_video_theme_0:"+val+".html") 

}