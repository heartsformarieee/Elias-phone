// ELIAS OS 2.1 — SHARED ARCHIVE
(function(){
"use strict";
const memories=[
{src:"couple.PNG",tag:"US",title:"The one that became the wallpaper."},
{src:"sushi.PNG",tag:"SUSHI",title:"A completely reasonable amount of sushi."},
{src:"flowers.PNG",tag:"BERLIN",title:"Flowers, city lights, and you."},
{src:"holding hands.PNG",tag:"CANDID",title:"The tiny moments count too."},
{src:"home.PNG",tag:"HOME",title:"My favorite kind of nowhere."},
{src:"cooking.PNG",tag:"DOMESTIC CHAOS",title:"We attempted to behave like adults."},
{src:"hello kitty bubble tea.JPG",tag:"BUBBLE TEA",title:"This was aggressively you-coded."},
{src:"on a walk.JPG",tag:"NIGHT WALK",title:"No destination required."},
{src:"morii.PNG",tag:"MORI FILE",title:"Primary suspect. No remorse."},
{src:"kissing.PNG",tag:"FAVORITE",title:"Evidence I am absolutely keeping."}
];
function injectIcon(){const grid=document.querySelector('.apps-grid');if(!grid||document.getElementById('archiveAppButton'))return;const b=document.createElement('button');b.id='archiveAppButton';b.className='app-icon-button';b.type='button';b.innerHTML='<div class="app-icon archive-icon">✦</div><span>Archive</span>';b.addEventListener('click',openArchive);grid.appendChild(b)}
function openArchive(){homeScreen.classList.add('hidden');statusBar.classList.add('hidden');appWindow.classList.remove('hidden');renderArchive();window.scrollTo(0,0)}
function renderArchive(){appTitle.textContent='Archive';const visits=Number(localStorage.getItem('elias17.visits')||0);const hearts=Number(localStorage.getItem('elias17.hearts')||0);const cards=memories.map((m,i)=>`<button class="archive-card ${i===0||i===9?'wide':''}" data-archive="${i}" type="button"><img src="${m.src}" alt=""><span class="archive-card-copy"><small>${m.tag}</small><strong>${m.title}</strong></span></button>`).join('');appContent.innerHTML=`<div class="archive-page"><section class="archive-intro"><small>ELIAS OS · PRIVATE ARCHIVE</small><h3>Things I refused to forget.</h3><p>Photos pulled together from all the little versions of us that ended up inside this phone.</p></section><div class="archive-grid">${cards}</div><div class="archive-secret"><b>Archive note:</b> you've opened Elias OS ${visits} times and sent ${hearts} hearts. Apparently we're documenting the evidence now.</div></div>`;appContent.querySelectorAll('[data-archive]').forEach(b=>b.addEventListener('click',()=>showMemory(memories[Number(b.dataset.archive)])))}
function showMemory(m){let v=document.getElementById('archiveViewer');if(!v){v=document.createElement('div');v.id='archiveViewer';v.className='archive-viewer hidden';v.innerHTML='<button type="button" aria-label="Close">×</button><img src="" alt=""><p></p>';document.body.appendChild(v);v.querySelector('button').addEventListener('click',()=>v.classList.add('hidden'));v.addEventListener('click',e=>{if(e.target===v)v.classList.add('hidden')})}v.querySelector('img').src=m.src;v.querySelector('p').textContent=m.title;v.classList.remove('hidden')}
function surpriseMemory(){if(Math.random()>.08)return;const widget=document.getElementById('eliasWidget');if(!widget)return;widget.classList.add('archive-memory-flash');setTimeout(()=>widget.classList.remove('archive-memory-flash'),650);const t=document.querySelector('.elias-system-whisper');if(t){t.textContent='I found an old photo of us again. ♡';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}}
window.openArchive=openArchive;window.renderArchive=renderArchive;injectIcon();setTimeout(surpriseMemory,7000);
})();