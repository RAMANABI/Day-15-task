const list_items= [
    "List 1",
    "List 2",
    "List 3",
    "List 4",
    "List 5",
    "List 6",
    "List 7",
    "List 8",
    "List 9",
    "List 10",
    "List 11",
    "List 12",
    "List 13",
    "List 14",
    "List 15",
    "List 16",
    "List 17",
    "List 18",
    "List 19",
    "List 20",
    "List 21",
    "List 22",
    "List 23",
    "List 24",
    "List 25"
];


const list_elements = document.getElementById("list");
const pagination_element=document.getElementById("pagination");

let currentpage = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page --;

    let start = rows_per_page * page;
    let end = start + rows_per_page;

    let paginatedItems=items.slice(start,end);
    for (let i=0; i < paginatedItems.length; i++){
    let item= paginatedItems[i];

    let item_element =document.createElement('div')
    item_element.classList.add("item")
    item_element.innerText = item;
    wrapper.appendChild(item_element);
}
}

function SetUpPagination(items, wrapper,rows_per_page) {
   wrapper.innerHTML = "";
   let page_count =Math.ceil(items.length/rows_per_page)

   for(let i=1; i< page_count + 1; i++){
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
   }
}

function PaginationButton(page, items) {
  let button = document.createElement("button")
  button.innerText=page;
  if(currentpage == page) button.classList.add("active");
  button.addEventListener("click", function() {
    currentpage =page;
    DisplayList(items,list_elements,rows,currentpage);

    let current_btn= document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");
    
    button.classList.add("active");
  });
  
  return button;
}

 DisplayList(list_items, list_elements,rows,currentpage);
 SetUpPagination(list_items,pagination_element,rows);


