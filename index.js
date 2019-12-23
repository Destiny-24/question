const PAGE = {
  data:{
    asd:true,
    questions: [{
        "id": 1,
        "title": "4%2 的值为",
        "options": [0,1,2,4],
        "correct": 0,
      },
      {
        "id": 2,
        "title": "\"0\" == false 的值为",
        "options": ["true","false"],
        "correct": 1,
      },
      {
        "id": 3,
        "title": "不设置cookie设置过期时间，cookie的默认时间长度为",
        "options": ["立刻过期","永不过期","cookie 无法设置","在浏览器会话结束时过期"],
        "correct": 3,
      },
      {
        "id": 4,
        "title": "+new Array(042) 的值为",
        "options": ["43","NaN","42","Error"],
        "correct": 1,
      },
      {
        "id": 5,
        "title": "数组的方法中，哪些方法不能改变自身数组？",
        "options": ["pop","splice","sort","concat"],
        "correct": 3,
      },
      {
        "id": 6,
        "title": "Number(null); 的值为：",
        "options": ["null",0,"undefined",1],
        "correct": 1,
      }],
    currentPage:0
  },
  init:function(){
    this.render();
    this.bind();
  },
  bind:function(){
    $('.page-mainer').on('click','.next-question',this.nextQuestion);
    $('.options-list').on('click','.options-item',this.clickOptions);
  },
  render:function(){
    let questions = PAGE.data.questions;
    let currentPage = PAGE.data.currentPage;
    let content = questions[currentPage];
    let contentTitle = content.title;
    let options = content.options;
    let showTitle = `<div class="question-title" id ="question-title">${contentTitle}</div>`;
    let showOption = options.map((data,index)=>{
      return `<div class="options-item" data-index='${index}'>${data}</div>`
    }).join('');
    $('.options-list').html(showOption);
    $('.question-title').html(showTitle);
  },
  nextQuestion:function(){
    let currentPage = PAGE.data.currentPage;
    let nextPage = currentPage+1;
    let total = PAGE.data.questions.length;
    PAGE.data.currentPage = Number(nextPage)
    if(nextPage >=total){
      return;
    }
    PAGE.data.asd = true;
    PAGE.render();
  },
  clickOptions:function(e){
    let asd = PAGE.data.asd;
    if(asd ){
    let optionsIndex = e.target;
    let currenttarget = PAGE.data.currentPage
    let index = e.target.dataset.index;
    let correct = PAGE.data.questions[currenttarget].correct;
    console.log(correct)
    if(index == correct){
      $(optionsIndex).css('background','red');
    }else{
      $(optionsIndex).css('background','green');
    }
    PAGE.data.asd = false;
  }
}
}
PAGE.init();