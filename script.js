document.addEventListener("DOMContentLoaded", function () {
    const vex = [
        {
        titulo : "Lulu",
        descricao : "A Lulu é muito fofa e perfeita mano",
        wall : "imgLulu/LuluWall.png",
        gifi : "imgLulu/LuluGif.gif",
        photo : "imgLulu/LuluFoto.jpg"
        },{
        titulo : "Poppy",
        descricao : "A Poppy é muito bonita e bondosa mano",
        wall : "imgPoppy/PoppyWall.png",
        gifi : "imgPoppy/PoppyGif.gif",
        photo : "imgPoppy/PoppyFoto.jpg"
        },{
        titulo : "Tristana",
        descricao : "A Tristana é muito graciosa e maravilhosa mano",
        wall : "imgTristana/TristanaWall.jpg",
        gifi : "imgTristana/TristanaGif.gif",
        photo : "imgTristana/TristanaFoto.jpg"
        },{
        titulo : "Vex",
        descricao : "A Vex é muito linda e fascinante mano",
        wall : "imgVex/VexWall.jpg",
        gifi : "imgVex/VexSide.png",
        photo : "imgVex/VexFoto.jpg"
        },{
        titulo : "Todas",
        descricao : "As Yordles são incriveis",
        wall : "imgYordles/YordlesWall.jpg",
        gifi : "imgYordles/YordlesSide-removebg-preview.png",
        photo : "imgYordles/YordlesFoto.jpeg"
        }
      ];

    const vexSec = document.getElementById("vexSec")
    let titulo = document.getElementById("Titulo")
    let descricao = document.getElementById("Paragrafo")
    let wall = document.getElementById("Picturi")
    let gifi = document.getElementById("gifit")
    let photo = document.getElementById("perfil")
    const yordle = document.getElementById("yordles")
    
    vex.forEach((vexSec) => {
        let list = document.createElement("li");
        let butao = document.createElement("button");
        butao.textContent = vexSec.titulo;

      butao.addEventListener("click", function () {
        titulo.textContent = vexSec.titulo;
        descricao.textContent = vexSec.descricao;
        wall.src = vexSec.wall;
        gifi.src = vexSec.gifi;
        photo.src = vexSec.photo;
      conteudoExibido.style.display = "block";
      });
      list.appendChild(butao);
      yordle.appendChild(list);
    });
  });