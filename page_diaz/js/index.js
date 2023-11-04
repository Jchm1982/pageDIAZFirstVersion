document.addEventListener('DOMContentLoaded',()=>{
   
   itemNavegacion = document.querySelector('.nav');

   // console.log(itemNavegacion.children);
   
   
   // itemNavegacion.addEventListener('click', e =>{
   //    e.stopPropagation();
   //    var itemNagevacion = document.querySelectorAll('.navbItem');
   //    console.log(itemNagevacion);
      
   // })

   /*Mouse Hover */
   itemNavegacion.addEventListener('mouseover',e =>{
      if(e.target.id !== ''){
         var idName=e.target.id;
         var classItem = document.getElementById(idName);
         classItem.classList.remove('text-muted','nav-link');
         classItem.classList.add('navbItem333','text-primary');
         
      }
      
   });

   /*mouse output*/
   itemNavegacion.addEventListener('mouseout',e =>{
      if(e.target.id !== ''){
         var idName=e.target.id;
         var classItem = document.getElementById(idName);
         classItem.classList.add('text-muted','nav-link');
         classItem.classList.remove('navbItem333','text-primary');
         
      }
      
   });

   

   

});
