//your code here!
var count = 1;
for(let i = 0; i<10; i++) 
	{
		document.getElementById('infi-list').innerHTML += `<li>Item ${count}</li>`;
		count += 1;
	}
document.getElementById('infi-list').addEventListener("scrollend", (event) => {
  for(let i =0; i<2; i++)
	  {
		  document.getElementById('infi-list').innerHTML += `<li>Item ${count}</li>`;
		  count +=1;
	  }
});
