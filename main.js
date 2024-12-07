function addImage() {
    const imgName = document.getElementById('imgName').value
    const imgUrl = document.getElementById('imgUrl').value


const card = `<div class="col-4">
                <div class=" card">

                    <img class="card-img-top"
                        src="${imgUrl}"
                        alt="">
                    <div class="card-body">
                        <p class="m-0">${imgName}</p>
                    </div>
                </div>
            </div>`

const imgeList = document.querySelector('.imgeList')
imgeList.innerHTML += card






}












