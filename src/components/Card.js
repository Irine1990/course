import React from "react";


function Card() {
    return (
        <div className="container">


            <div class="card" id="content1" >
                <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Mechanical-Engineering-Project-Ideas.webp" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Mechanical Engineering : Project Ideas</p>
                </div>
            </div>
            <div class="card" id="content2" >
                <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Astounding-Websites-To-Learn-Cloud-Computing.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Cloud computing : Website to learn</p>
                </div>
            </div>
            <div class="card" id="content3">
                <img src="https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-1200x801.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Frontend: Steps to create</p>
                </div>
            </div>

        </div>
    )
}

export default Card;