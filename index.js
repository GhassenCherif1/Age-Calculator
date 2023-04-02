const day= document.querySelector("#dayinput");
const month= document.querySelector("#monthinput");
const year= document.querySelector("#yearinput");
const bouton= document.querySelector("i");
const dayspan = document.querySelector(".dayspan");
const monthspan = document.querySelector(".monthspan");
const yearspan = document.querySelector(".yearspan");
const labels = document.querySelectorAll(".form-label");

function calculateAge(an, mois, jour) {
  const maintenant = new Date();
  const annee = maintenant.getFullYear();
  const moisActuel = maintenant.getMonth() + 1; // Janvier est le mois 0
  const jourActuel = maintenant.getDate();

  let annees = annee - an;
  let moisDiff = moisActuel - mois;
  let joursDiff = jourActuel - jour;

  // Si la date d'anniversaire n'est pas encore passée cette année
  if (moisDiff < 0 || (moisDiff === 0 && joursDiff < 0)) {
    annees--;
    moisDiff += 12;
    if (joursDiff < 0) {
      moisDiff--;
      joursDiff += new Date(annee, moisActuel, 0).getDate();
    }
  }
  // Si la date d'anniversaire est passée cette année
  else if (joursDiff < 0) {
    moisDiff--;
    joursDiff += new Date(annee, moisActuel, 0).getDate();
  }

  return {
    ans: annees,
    mois: moisDiff,
    jours: joursDiff,
  };
}


bouton.addEventListener("click",()=>{
  if(Number.isInteger(Number(month.value)) == false || Number(month.value) < 1 || Number(month.value) > 12 || Number.isInteger(Number(year.value)) == false || Number(year.value) < 1900 || Number.isInteger(Number(day.value)) == false || Number(day.value) < 1 || Number(day.value) > 31 ){
    if(Number.isInteger(Number(month.value)) == false || Number(month.value) < 1 || Number(month.value) > 12  ){
      labels[1].classList.add("false");
    }
    else{
      labels[1].classList.remove("false");
    }
    if(Number.isInteger(Number(year.value)) == false || Number(year.value) < 1900  ){
      labels[2].classList.add("false");
    }
    else{
      labels[2].classList.remove("false");
    }
    if(Number.isInteger(Number(day.value)) == false || Number(day.value) < 1 || Number(day.value) > 31  ){
      labels[0].classList.add("false");
    }
    else{
      labels[0].classList.remove("false");
    }
  }
    else{
        for(let i=0;i<labels.length;i++){
            labels[i].classList.remove("false");
        }
    dayspan.textContent= calculateAge(year.value, month.value, day.value).jours;
    monthspan.textContent= calculateAge(year.value, month.value, day.value).mois;
    yearspan.textContent= calculateAge(year.value, month.value, day.value).ans;
    }
})