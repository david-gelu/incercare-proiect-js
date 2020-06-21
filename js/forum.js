let posts= [{
		general: 'Pets , best friens',
		reply: 'Reply ',
		date: 'Date: 31.Dec.18 ' ,
	},{
		general: 'Dogs ',
		reply: 'Reply ',
		date: 'Date: 24.Dec.19 ' ,
	},{
		general: 'Ala bala portocala ',
		reply: 'Reply ',
		date: 'Date: 15.Oct.19 ' ,
	},{
		general: 'How could this happen? ',
		reply: 'Reply ',
		date: 'Date: 5.Dec.19 ' ,
	},{
		general: 'Cats being b.... ',
		reply: 'Reply ',
		date: 'Date: 5.Dec.19 ' ,
	},{
		general: 'Lorem ipsum dolor sit. ',
		reply: 'Reply ',
		date: '25.Dec.18 ' ,
	},{
		general: 'Need some help.. ',
		reply: 'Reply ',
		date: 'Date: 5.Jan.19 ' ,
	},{
		general: 'What? ',
		reply: 'Reply ',
		date: 'Date: 15.May.19 ' ,
	},{
		general: 'Lorem ipsum dolor sit amet, consectetur. ',
		reply: 'Reply ',
		date: 'Date: 25.Apr.19 ' ,
	},{
		general: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		reply: 'Reply ',
		date: 'Date: 21.Aug.19 ' ,
	}
];
let postsHTML = '';

for(let i = 0; i < posts.length; i++){
	postsHTML += `
	<div class="post-general  marg1 general col-xs-12  ">
        <div class="col-xs-12">
            <div class="general-posts col-xs-12 col-sm-8">
              <h5><a href="forumPost.html" class="color-a ">${posts[i].general}</a></h5>
            </div>
            <div class="general-posts col-xs-6 col-sm-2">
               <h5>${posts[i].reply}</h5>
            </div>
            <div class="general-posts col-xs-6 col-sm-2">
              <h5>${posts[i].date}</h5>
            </div>
        </div>
    </div>
`;
getUsers
let postsEl = document.getElementById('posts');
postsEl.innerHTML += postsHTML;
