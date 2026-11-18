// Bilingual content. Marathi is the original source of truth.
const english = {
logo:'॥ Shri Ganeshaya Namah ॥',navHome:'Home',navPersonal:'Personal Details',navFamily:'Family',navCareer:'Education & Career',navGallery:'Photo Gallery',navContact:'Contact',ganesh:'॥ Shri Ganeshaya Namah ॥',title:'Matrimonial Profile',candidate:'Sumit Dilip Patil',tagline:'The beginning of a beautiful bond and a new chapter...',viewProfile:'Explore Profile',personalTitle:'✦ Personal Details ✦',dob:'Date of Birth:',birthTime:'Birth Time:',day:'Day:',birthPlace:'Birthplace:',height:'Height:',complexion:'Complexion:',bloodGroup:'Blood Group:',kul:'Kul:',gotra:'Gotra:',deity:'Family Deity:',careerTitle:'✦ Education & Career ✦',qualification:'Qualification:',job:'Occupation:',company:'Company:',jobLocation:'Work Location:',salary:'Annual Package:',familyTitle:'✦ Family Background ✦',grandfather:'Grandfather:',father:'Father:',fatherOccupation:'Father’s Occupation:',nativePlace:'Native Place:',mother:'Mother:',motherOccupation:'Mother’s Occupation:',sister:'Sister:',sisterEducation:'Sister’s Education:',relativesTitle:'✦ Extended Family ✦',paternalAunts:'Paternal Aunts',maternalInfo:'Maternal Family',uncle:'Maternal Uncle:',maternalKul:'Maternal Kul:',otherRelations:'Other Family Connections',financialTitle:'✦ Family & Financial Background ✦',land:'Ancestral Irrigated Farmland',annualPackage:'Sumit’s Annual Employment Package',financialNote:'Financial details as provided in the original matrimonial profile.',expectationsTitle:'✦ Partner Preferences ✦',expectedEducation:'Preferred Educational Qualifications:',galleryTitle:'✦ Photo Gallery ✦',contactTitle:'✦ Get in Touch ✦',mobile:'Mobile:',call:'📞 Call Now',footerDeity:'॥ Blessings of Shri KulSwamini Mahalaxmi Mata ॥',footerName:'Sumit Dilip Patil – Matrimonial Profile',footerTagline:'The beginning of a beautiful bond and a new chapter...',rights:'All Rights Reserved',
aunt1:'1. Alka and Dr. Ashok Dhanraj Patil (Raygade), Bhatkheda, Erandol.',aunt2:'2. Jyotsna and Vinod Vikram Jadhav, Primary Teacher, Dhule District.',aunt3:'3. Sunita and Krishnarao Tukaram Shirsath, Sr. General Manager (R&D), Books Steriscience Ltd., Vadodara.',uncle2:'Prakash Babulal Patil (Chahadi, retired employee)',auntMaternal:'Maternal Aunt: Kalpana and Rohidas Namdev Patil (Khairnar), Parola.',villages:'Kanalda, Borkud, Vinchur, Dondwad, Bhatkheda, Purmepada, Pashte, Dalwel, Chahadi, Pingalwade, Adgaon, Akkadse, Lasure, Wanegaon, Balde, Kolpimpri, Ganpur, Pargaon, Jawkheda, Shirdhane, Karwand, etc.'
};
const valueTranslations = {
'०४ एप्रिल १९९७':'04 April 1997','सकाळी ७:०२ वाजता':'7:02 AM','शुक्रवार':'Friday','चोपडा, जि. जळगाव':'Chopda, Jalgaon District','५ फूट ८ इंच':'5 feet 8 inches','गोरा':'Fair','शिंदे':'Shinde','कौंडल्य':'Kaundalya','श्री कुलस्वामिनी महालक्ष्मी माता':'Shri Kulswamini Mahalaxmi Mata','हिंजवडी, पुणे':'Hinjewadi, Pune','₹९.४० लाख':'₹9.40 lakh','कै. नारायण धोंडू पाटील':'Late Narayan Dhondu Patil','श्री. दिलीप नारायण पाटील':'Shri Dilip Narayan Patil','शेती – ३५ बिघे बागायती':'Farming – 35 bighas of irrigated land','वडी, ता. चोपडा, जि. जळगाव':'Wadi, Chopda Taluka, Jalgaon District','सौ. विद्या दिलीप पाटील':'Smt. Vidya Dilip Patil','गृहिणी':'Homemaker','कु. भुपाली दिलीप पाटील':'Bhupali Dilip Patil','कै. बाबुलाल गोधा पाटील':'Late Babulal Godha Patil','श्री. सुभाष बाबुलाल पाटील (चहाडी, ता. चोपडा)':'Shri Subhash Babulal Patil (Chahadi, Chopda)','शंखपाळ':'Shankhpal','३५ बिघे':'35 bighas','M.Sc. किंवा Pharmacy.':'M.Sc. or Pharmacy.','श्री. डॉ. अशोक धनराज पाटील':'Dr. Ashok Dhanraj Patil','श्री. विनोद विक्रम जाधव':'Shri Vinod Vikram Jadhav','श्री. कृष्णराव तुकाराम शिरसाठ':'Shri Krishnarao Tukaram Shirsath','श्री. सुभाष बाबुलाल पाटील':'Shri Subhash Babulal Patil','श्री. रोहिदास नामदेव पाटील (खैरनार)':'Shri Rohidas Namdev Patil (Khairnar)'};
const originals=new Map();document.querySelectorAll('[data-i18n]').forEach(el=>originals.set(el,el.textContent));
const valueNodes=[];
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
while(walker.nextNode()){const node=walker.currentNode;if(node.parentElement.closest('[data-i18n],script,style'))continue;const original=node.textContent;const trimmed=original.trim();if(valueTranslations[trimmed])valueNodes.push([node,original,trimmed]);}
let currentLanguage='mr';
function toggleLanguage(){currentLanguage=currentLanguage==='mr'?'en':'mr';document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.textContent=currentLanguage==='en'?(english[key]??originals.get(el)):originals.get(el)});valueNodes.forEach(([node,original,trimmed])=>{node.textContent=currentLanguage==='en'?original.replace(trimmed,valueTranslations[trimmed]):original});document.documentElement.lang=currentLanguage;document.getElementById('languageToggle').textContent=currentLanguage==='mr'?'🌐 English':'🌐 मराठी';}
window.toggleLanguage=toggleLanguage;
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}


// Interactive photo viewer (works with keyboard and touch).
(() => {
 const photos=[...document.querySelectorAll('.gallery img')];
 const box=document.getElementById('photoLightbox');
 if(!box || !photos.length)return;
 const full=box.querySelector('img'),count=box.querySelector('.lightbox-count');
 let index=0,previousFocus=null;
 function render(){full.src=photos[index].dataset.full;count.textContent=`${index+1} / ${photos.length}`;}
 function open(i){previousFocus=document.activeElement;index=i;render();box.hidden=false;document.body.style.overflow='hidden';box.querySelector('.lightbox-close').focus();}
 function close(){box.hidden=true;full.removeAttribute('src');document.body.style.overflow='';previousFocus?.focus();}
 function shift(n){index=(index+n+photos.length)%photos.length;render();}
 photos.forEach((photo,i)=>{photo.addEventListener('click',()=>open(i));photo.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(i);}})});
 box.querySelector('.lightbox-close').addEventListener('click',close);
 box.querySelector('.lightbox-prev').addEventListener('click',()=>shift(-1));
 box.querySelector('.lightbox-next').addEventListener('click',()=>shift(1));
 box.addEventListener('click',e=>{if(e.target===box)close();});
 document.addEventListener('keydown',e=>{if(box.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')shift(1);if(e.key==='ArrowLeft')shift(-1);});
})();
