//your JS code here. If required.
const item=document.getElementById("colorSelect");
const all_items=document.getElementsByTagName("option");
const btn=document.getElementsByTagName("input")[0];
btn.addEventListener("click",()=>{
	for(let i of all_items){
		if(i.innerHTML==item.value){
			i.remove();
		}
	}
})
