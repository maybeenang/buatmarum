
let doi = "Devita";

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/maybeenang/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if(n >= 0 && n < 5){
    return "Malem"
  } else if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai bi!',
    html: `Selamat ${time()}, Kamu udah makan blom?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa makan yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Jaga kesehatan yaa`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Semangat jalanin harinya`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Pokoknya ga boleh sedih trus!').then((result) => {
                  Swal.fire(
                    'Jangan keseringan begadang!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan telat makan!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Gaboleh ngambek trus!',
                                '',
                                'error'
                      ).then((result) => {
                        Swal.fire({
                          title: 'Oh iya aku mau nanya',
                          text: 'Kamu sayang aku gak?',
                          showDenyButton: true,
                          confirmButtonText: `Sayang`,
                          denyButtonText: `Nggak`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Sayangnya seberapa ciii',
                              icon: 'question',
                              input: 'range',
                              showCancelButton: false,
                            }).then((result) => {
                              Swal.fire('Cieee', 'hehehehehehe cayang bgt ciii', 'success').then((result) => {
                                Swal.fire("Bye bye bi acuu, Aku kangen ^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('Oh okedeh kalo dah ga sayang :(').then((result) => {
                              Swal.fire("See ya! Aku kangen ^^").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
