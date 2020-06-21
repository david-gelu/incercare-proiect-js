
$(function() {
  $("#myDiv").on("keyup", function() {
    $(".post-general").html("");
    var val = $.trim(this.value);
    if (val) {
      val = val.toLowerCase();
      $.each(usersArray, function(_,obj) {
       // console.log(val,obj.name.toLowerCase().indexOf(val),obj)
       
      });
    }
    
  });
});

// login form

function handlerSubmit (evt){
	// console.log(evt.target);
	let formEl = evt.target;
	let validForm = validate(formEl.elements);
		if(!validForm){
		evt.preventDefault();
		}
	 console.log('form is valid :' , validForm);
}
	
function validate (formEls){
	let valid = true ;

	
	for (let i = 0 ; i < formEls.length; i++){
		let el = formEls[i];

		if (el.name == 'user') {
			if (!el.value || el.value === ''){
				valid = false;
			}
		}else if(el.name == 'pass'){
			if (!el.value || el.value.length < 8){
				valid = false;
			}
		}
	}
	// if(valid == true){
	// 	 document.getElementById('display').innerHTML.style.display = 'none';
	// }
	return valid;
	
};

// navbar

let navbar= [{
		home: 'Home ',
		login: 'Login ',
		forum: 'Forum',
		search: 'Search ',
		submit: 'Search',
	}
	];
let navbarHTML = '';

for(let i = 0; i < navbar.length; i++){
	navbarHTML += `
	<nav class="navbar" id="navBar">
     <div class="container color-navbar">
         <div class="row">
            <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="home.html">
              <i class="fa fa-paw" aria-hidden="true"></i>
            </a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul class="nav navbar-nav">
                 <li class="active"><a href="home.html">${navbar[i].home}<span class="sr-only">(current)</span></a></li>
                 <li><a href="forum.html">${navbar[i].forum}</a></li>
               </ul>
               <form class="navbar-form navbar-right">
                 <div class="form-group ">
                   <input type="text" class="form-control" placeholder="${navbar[i].search}">
                 </div>
                 <button id="myInput" type="text" class="btn btn-success">${navbar[i].submit}</button>
               </form>
         
            </div>
       </div><!-- /.navbar-collapse -->
     </div><!-- /.container-fluid -->
   </nav>
`;
}
let navbarEl = document.getElementById('navBar');
navbarEl.innerHTML += navbarHTML;




               // content forum

// General Forum

let content= [{
		general: 'General ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	},{
		general: 'News ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	},{
		general: 'About Us ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	},{
		general: 'FAQ/Regulament ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	}
];
let contentHTML = '';

for(let i = 0; i < content.length; i++){
	contentHTML += `
	<div class="post-general  marg1 general col-xs-12 ">
        <div class="col-xs-12">
            <div class="general-posts col-xs-8">
              <h5><a href="post.html" class="color-a">${content[i].general}</a></h5>
            </div>
            <div class="general-posts col-xs-2">
               <h5>${content[i].reply}</h5>
            </div>
            <div class="general-posts col-xs-2">
              <h5>${content[i].threads}</h5>
            </div>
        </div>
    </div>
`;
}
let contentEl = document.getElementById('content');
contentEl.innerHTML += contentHTML;

// New Topics

let newTopic= [{
		general: 'Create new topic ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	},{
		general: 'NA Server ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	},{
		general: 'EU Server ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	},{
		general: 'Sugestions ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	}
];
let newTopicHTML = '';

for(let i = 0; i < newTopic.length; i++){
	newTopicHTML += `
	<div class="post-general  marg1 general col-xs-12 ">
        <div class="col-xs-12">
            <div class="general-posts col-xs-8">
              <h5><a href="#" class="color-a">${newTopic[i].general}</a></h5>
            </div>
            <div class="general-posts col-xs-2">
               <h5>${newTopic[i].reply}</h5>
            </div>
            <div class="general-posts col-xs-2">
              <h5>${newTopic[i].threads}</h5>
            </div>
        </div>
    </div>
`;
}
let newTopicEl = document.getElementById('newTopic');
newTopicEl.innerHTML += newTopicHTML;

// Random Topics

let random= [{
		general: 'Create new topic',
		reply: 'Reply ',
		threads: 'Threads ' ,
	},{
		general: 'Random ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	},{
		general: 'Sugestions ',
		reply: 'Reply ',
		threads: 'Threads ' ,
	}
];
let randomHTML = '';

for(let i = 0; i < random.length; i++){
	randomHTML += `
	<div class="post-general  marg1 general col-xs-12 ">
        <div class="col-xs-12">
            <div class="general-posts col-xs-8">
              <h5><a href="#" class="color-a">${random[i].general}</a></h5>
            </div>
            <div class="general-posts col-xs-2">
               <h5>${random[i].reply}</h5>
            </div>
            <div class="general-posts col-xs-2">
              <h5>${random[i].threads}</h5>
            </div>
        </div>
    </div>
`;
}
let randomEl = document.getElementById('random');
randomEl.innerHTML += randomHTML;


// New Reply

let newReply= [{
		new: 'New ',
	},{
		new: 'New ',
	},{
		new: 'New ',
	},{
		new: 'New ',
	},{
		new: 'New ',
	},{
		new: 'New ',
	}
];
let newReplyHTML = '';

for(let i = 0; i < newReply.length; i++){
	newReplyHTML += `
	<div class="post-general general col-xs-12">
        <div class="col-xs-12">
            <div class="general-posts col-xs-12">
                <h5><a href="#" class="color-a">${newReply[i].new}</a></h5>
            </div>
        </div>
    </div>
`;
}
let newReplyEl = document.getElementById('newReply');
newReplyEl.innerHTML += newReplyHTML;

// New Topics

let newTopics= [{
		newT: 'New ',
	},{
		newT: 'New ',
	},{
		newT: 'New ',
	},{
		newT: 'New ',
	},{
		newT: 'New ',
	},{
		newT: 'New ',
	}
];
let newTopicsHTML = '';

for(let i = 0; i < newTopics.length; i++){
	newTopicsHTML += `
	<div class="post-general general col-xs-12">
        <div class="col-xs-12">
            <div class="general-posts col-xs-12">
                <h5><a href="#" class="color-a">${newTopics[i].newT}</a></h5>
            </div>
        </div>
    </div>
`;
}
let newTopicsEl = document.getElementById('newTopics');
newTopicsEl.innerHTML += newTopicsHTML;