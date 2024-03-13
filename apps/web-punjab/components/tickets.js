import "../style.css"
const TicketTiers = [
    {
    name:"Bronze",
    icon:"/images/mdi_podium-bronze.png",
    desc:"Mollit adipisicing deserunt laboris eiusmod. Eiusmod aliquip proident sint deserunt reprehenderit dolore ex Lorem deserunt amet fugiat pariatur quis. Veniam cillum exercitation enim consequat enim nulla occaecat.",
    benefits:[
        "et dolore magna aliqua",
        "et dolore magna aliqua",
        "et dolore magna aliqua",
        "et dolore magna aliqua",
    ],
    price:100,
    currency:"INR",
    link:"#",
    color:"var(--fourth-color)",
    },
    {
    name:"Sliver",
    icon:"/images/mdi_podium-silver.png",
    desc:"Mollit adipisicing deserunt laboris eiusmod. Eiusmod aliquip proident sint deserunt reprehenderit dolore ex Lorem deserunt amet fugiat pariatur quis. Veniam cillum exercitation enim consequat enim nulla occaecat.",
    benefits:[
        "et dolore magna aliqua",
        "et dolore magna aliqua",
        "et dolore magna aliqua",
        "et dolore magna aliqua",
    ],
    price:100,
    currency:"INR",
    link:"#",
    color:"var(--second-color)",
    },
    {
    name:"Gold",
    icon:"/images/mdi_podium-gold.png",
    desc:"Mollit adipisicing deserunt laboris eiusmod. Eiusmod aliquip proident sint deserunt reprehenderit dolore ex Lorem deserunt amet fugiat pariatur quis. Veniam cillum exercitation enim consequat enim nulla occaecat.",
    benefits:[
        "et dolore magna aliqua",
        "et dolore magna aliqua",
        "et dolore magna aliqua",
        "et dolore magna aliqua",
    ],
    price:100,
    currency:"INR",
    link:"#",
    color:"var(--container-color)"
    },
  
    
]







document.querySelector('#tickets').innerHTML = `

<div class="section ts_main">


    <h1 class="section__title ts_title" >Tickets</h1>
    <div class="container ts_section">${TicketTiers.reduce((prev,ticket)=>prev + ticketcard(ticket),"")}</div>
</div>

`



function ticketcard(ticket){
return `
<div class="ts_card">

    <div class="ts_card_strip" style="background-color:${ticket.color};">


    </div>






    <div class="ts_image_parent">
    
        <div class="ts_image_container">
            <img class="ts_image" src="${ticket.icon}"/>
        </div>
    </div>
    <h3 class=" ts_card_title" >${ticket.name}</h3>
    <p class=" ts_card_subtitle" >${ticket.desc}</p>


    <h3 class=" ts_card_title" style="font-size:var(--small-font-size);font-weight:500;margin-top:30px;" >Benefits</h3>

    <ul style="list-style-type:disc;margin-left:15px">${ticket.benefits.reduce((prev,cur)=>prev+`<li class="ts_card_subtitle">${cur}</li>`,"")}</ul>

    <a class="ts_bookNow" href="${ticket.link||"#"}">
    <button class="ts_bookNow_button">Book Now</button>
    </a>




    


</div>



`

}
