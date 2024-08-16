const modal = document.querySelector("#modal");
const btn = document.querySelector(".modal-btn");

function closeModal() {
  modal.innerHTML = ``;
  modal.classList.add("modal-hidden");
  modal.classList.remove("modal-visible");
  document.getElementsByTagName("body")[0].classList.remove("background-fade");
}

btn.addEventListener("click", function openModal(event) {
  modal.innerHTML = `<div>
        <button onclick="closeModal()" class="btn-close">Close</button>
        <br />
      </div>
      <div class="modal-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        veritatis dignissimos est. Voluptatibus voluptatem non eligendi
        similique totam voluptatum cumque asperiores ipsam ex labore ducimus
        fugit ratione unde enim doloremque culpa impedit error itaque iure, sint
        corporis! Quas doloremque totam sapiente ex sequi, quo quia officia
        quidem accusamus perferendis fuga repudiandae numquam eius earum tempore
        suscipit quaerat. Officia debitis magnam in cum? Veritatis, corrupti
        reiciendis atque, quasi aut et expedita eveniet tempore numquam corporis
        voluptas sapiente, harum quae. Consectetur est facilis voluptatem
        aspernatur dolorem repellat neque animi? Ratione odit beatae vitae
        quisquam unde. Tenetur architecto voluptas consectetur aperiam suscipit
        perspiciatis, earum dignissimos placeat molestiae iusto excepturi natus,
        dolorum totam ullam voluptatem eum! Repellat, amet adipisci natus nisi
        maiores provident reiciendis, est porro dicta, numquam ratione
        voluptates quod rem officiis corrupti ipsa nulla expedita? Corrupti,
        labore dicta! Sit alias molestias explicabo nisi similique beatae quasi
        cumque repellat. Eveniet earum officiis dolor.
      </div>
  `;

  modal.classList.remove("modal-hidden");
  modal.classList.add("modal-visible");

  document.getElementsByTagName("body")[0].classList.add("background-fade");
});
