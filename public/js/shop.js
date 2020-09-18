$(document).ready(function(){

           
    /*kod za tooltipster*/

    const nizSladoleda = [
        {"id":1,"ukus": "vanila", "cena": 100, "img":"./images/ukusi/vanila.jpg", "kolicina":1},
        {"id":2,"ukus": "čokolada","cena":110, "img":"./images/ukusi/cokolada.jpg","kolicina":1},
        {"id":3,"ukus": "jagoda" ,"cena":120, "img":"./images/ukusi/jagoda.jpg","kolicina":1},
        {"id":4,"ukus": "stracciatella","cena": 90, "img":"./images/ukusi/stracatela.jpg","kolicina":1},
        {"id":5,"ukus": "lešnik", "cena":120, "img":"./images/ukusi/lesnik.jpg","kolicina":1},
        {"id":6,"ukus": "borovnica", "cena": 150, "img":"./images/ukusi/borovnica.jpg","kolicina":1},
        {"id":7,"ukus": "čoko-badem","cena": 140, "img":"./images/ukusi/choko-badem.jpg","kolicina":1},
        {"id":8,"ukus": "karamela", "cena": 130, "img":"./images/ukusi/karamela.jpg","kolicina":1},
        {"id":9,"ukus": "karamela-orasi","cena": 150, "img":"./images/ukusi/karamela-orasi.jpg","kolicina":1},
        {"id":10, "ukus": "pistaći", "cena": 160, "img":"./images/ukusi/pistaci.jpg","kolicina":1}
        ];


        nizSladoleda.forEach((item,index)=>{
          
            const $dinDiv = $('<div class="item"></div>').append(`
                    <h3>${item.ukus}</h3>
                    <img src="${item.img}" class="div-image" />
                    <p><span>${item.cena}</span><span>din</span></p>
                    <button class="btn-1" id="${item.id}">DODAJ U KORNET</button>         
            `);

            $('.data-conteiner').append($dinDiv);
          
        })
       
    const korpa = [];

    function copy_obj(proizvod){
        const kopija = {};
        kopija.id = proizvod.id;
        kopija.ukus = proizvod.ukus;
        kopija.cena = proizvod.cena;
        kopija.img = proizvod.img;
        kopija.kolicina = 1;
        return kopija;
    }

    function dodaj(proizvod) {
        for (let pr of korpa) {
            if (pr.id == proizvod.id) {
                pr.kolicina ++;
                return true;
            }
        }

        const kopija = copy_obj(proizvod);
        korpa.push(kopija);
        }

   
    
    //  for (let pr of nizSladoleda) {

        $('button').on('click', function(){
            const id = $(this).prop('id');
            const pr = nizSladoleda[id-1];
           dodaj(pr);
           console.log('iznos korpe u ovom momentu', korpa);

        $('.dinamicki').remove();
          for (let k of korpa) {


            const $divApp = $('<div class="dinamicki"></div>');
            const $btnFinal = $('<div class="final"><button class="fin">KUPI</button/></div>');
            
            
            $divApp.html(`<span>${k.kolicina}</span> 
                         <i class="fas fa-times"> </i> 
                         <img src="${k.img}" class="tooltip min-image"   title="${k.ukus}"/>
                         <i class="fas fa-equals"></i>
                        <span>  ${k.kolicina * k.cena} DIN.</span>`);
                    $('.shop-conteiner').append($divApp);

                    let total=0;
                    korpa.forEach((item)=>{
                        total+=item.cena*item.kolicina;
                    })

                    console.log(total);
                    $('#total').html(`${total} DIN.`).append($btnFinal);


          }

          var modal = document.querySelector(".modal");
          var trigger = document.querySelector(".fin");
          var closeButton = document.querySelector(".close-button");
      
          function toggleModal() {
              modal.classList.toggle("show-modal");
          }
      
          function windowOnClick(event) {
              if (event.target === modal) {
                  toggleModal();
              }
          }
      
          trigger.addEventListener("click", toggleModal);
          closeButton.addEventListener("click", toggleModal);
          window.addEventListener("click", windowOnClick);

        

          $('.tooltip').tooltipster({
              theme : 'tooltipster-light',
              animation: 'fade'
          });
          /*ovde pozivamo tooltipster nakon sto smo dinamicki ubacili elemente*/

        })

       
        
    //  }


/* pogledati slick jquery za slidere*/
/*kraj document ready*/
}) 