const template_code1 = `const app = "Try to double click on any word";
var app = " and you will find";
var app = " the variable in other editor";
var app = " will be highlighted!";
let apple = "good"

function boo() {
  let apple = "apple";
  let hellohello = "hellohello";
  let num = 123;
  let banana = "delicious"
}
`
const template_code2 = `var app = 123
let apple = "good"
boo()
const bar = ()=>apple
function foo(){
	console.log(apple)
  	boo()
  	goodgood();
}
Lorem Ipsum is simply dummy text of the
 printing and typesetting industry.
 Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s,
 when an unknown printer took a galley of 
 type and scrambled it to make a
  type specimen book. It has survived
   not only five centuries, 
  but also the leap into electronic 
  typesetting, remaining essentially 
  unchanged. It was popularised in the
   1960s with the release of Letraset
   sheets containing Lorem Ipsum passages,
    and more recently with desktop
    publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.
`

const initialState = [{id:0,code:template_code1},{id:1,code:template_code2},{id:3,code:template_code1},{id:4,code:template_code2}]

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BLOCK':
            return [...state, {id:action.id, code:""}]
        case 'REMOVE_BLOCK':
            return state.filter(block=>block.id !== action.id)
        default:
            return state
    }
}