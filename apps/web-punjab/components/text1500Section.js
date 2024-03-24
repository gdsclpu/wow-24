import "../style.css"
let i  =  1300;

document.querySelector('#text-1500-section').innerHTML = `
<h2 class="second-color"><span id="inc_count">${i}</span>+</h2>
<p>An Initiative thanks to collaboration of GDSCs across India</p>
<img src="/images/monumentsImage.png" alt="1500">`


async function animateCounter(start,target){
    let i = start||1300;
    let t = target||1500

    let dxt = setInterval(()=>{ 
    i+=1;
    document.getElementById("inc_count").innerText = i
    if(i>=t)clearTimeout(dxt);

},1)
}

const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5 // Trigger when 50% of the target is visible
};


// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         // If target element is intersecting (in view)
//         if (entry.isIntersecting) {
//             doSomething(); // Execute the function
//             // observer.unobserve(entry.target); // Stop observing once executed
//         }
//     });
// }, options);

// observer.observe(document.getElementById("inc_count"))

animateCounter()
