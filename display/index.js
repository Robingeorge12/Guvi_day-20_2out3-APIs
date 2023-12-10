

const mainFunction = async () => {
    // https://cat-fact.herokuapp.com/facts 5 list
    // quotes, today, author, random
  let collect = await fetch(`https://zenquotes.io/api/random`);
  let data = await collect.json();
  // console.log(data);
  return data;
};


const display = async () => {
  let data = await mainFunction();
  console.log(data);
  append(data)
};
display();

const append = async (data)=>{
  // document.querySelector("#container").innerHTML = ""
    console.log(data)

    
    data?.forEach((el,i)=>{
        
let box = document.createElement("div")
box.setAttribute("class","card text-white bg-dark main")
// 
let hd = document.createElement("div")
hd.setAttribute("class","card-header")
hd.innerText = el.a

let cb = document.createElement("div")
cb.setAttribute("class","card-body")



let h5 = document.createElement("h5");
h5.setAttribute(
  "class",
  "card-title align-items-start justify-content-center"
);
h5.textContent ="QUOTES >"+" "+ el.q ;


let p = document.createElement("p");
cb.setAttribute("class","card-text")
p.textContent = el.h;


box.append(hd,cb)
cb.append(h5,p)
document.querySelector("#container").append(box)

    });
}